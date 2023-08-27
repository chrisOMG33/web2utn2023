import { Component, Inject, Pipe } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { Curso } from 'src/app/shared/models/curso';
import { EstudiantesForm } from 'src/app/shared/formsModels/estudiantesForms';
import { EstudiantesService } from 'src/app/shared/services/estudiantes.service';
import { CursossService } from 'src/app/shared/services/cursos.service';
@Component({
  selector: 'app-admin-matriculas',
  templateUrl: './admin-matriculas.component.html',
  styleUrls: ['./admin-matriculas.component.scss'],
})
export class AdminMatriculasComponent {
  titulo = 'Crear Estudiante';
  isCreate = true;

  listaCursos: Curso[] = [];

  constructor(
    public estudianteForm: EstudiantesForm,
    private srvEstudiantes: EstudiantesService,
    @Inject(MAT_DIALOG_DATA) public data: { estudiante: any },
    private mensajeria: ToastrService,
    private srvCursos: CursossService
  ) {}
  ngOnInit() {
    if (this.data?.estudiante) {
      this.isCreate = false;
      this.titulo = 'Modificar Estudiante';
      this.cargarDatosForm();
    } else {
      this.isCreate = true;
      this.titulo = 'Crear Estudiante';
    }

    this.cargarCombos();
  }
  cargarCombos(): void {
    this.srvCursos.getAll().subscribe((lista) => {
      this.listaCursos = lista;
    });
  }

  cargarDatosForm() {
    this.estudianteForm.baseForm.patchValue({
      id: this.data.estudiante.id,
      nombre: this.data.estudiante.nombre,
      apellido1: this.data.estudiante.apellido1,
      apellido2: this.data.estudiante.apellido2,
      direccion: this.data.estudiante.direccion,
      estado: true,
      cursos: this.data.estudiante.cursos.id,
    });
  }

  guardar() {
    if (this.estudianteForm.baseForm.valid) {
      if (this.isCreate) {
        this.srvEstudiantes
          .guardar(this.estudianteForm.baseForm.value)
          .subscribe(
            (dato) => {
              this.estudianteForm.baseForm.reset();
              this.mensajeria.success('Se guardo de forma satisfactoria');
            },
            (error) => {
              this.mensajeria.error(`Se produjo un error. ${error}`);
            }
          );
      } else {
        this.srvEstudiantes
          .modificar(this.estudianteForm.baseForm.value)
          .subscribe(
            (dato) => {
              this.estudianteForm.baseForm.reset();
              this.mensajeria.success('Se modifico de manera correcta');
            },
            (error) => {
              this.mensajeria.error(`Se produjo un error. ${error}`);
            }
          );
      }
    }
  }
}
