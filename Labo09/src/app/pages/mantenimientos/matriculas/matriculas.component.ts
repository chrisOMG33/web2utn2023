import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { EstudiantesService } from 'src/app/shared/services/estudiantes.service';
import { ToastrService } from 'ngx-toastr';
import { AdminMatriculasComponent } from './admin-matriculas/admin-matriculas.component';
import { Estudiantes } from 'src/app/shared/models/estudiantes';
@Component({
  selector: 'app-matriculas',
  templateUrl: './matriculas.component.html',
  styleUrls: ['./matriculas.component.scss'],
})
export class MatriculasComponent {
  displayedColumns: string[] = [
    'id',
    'nombre',
    'apellido1',
    'apellido2',
    'direccion',
    'acciones',
  ];

  dataSource = new MatTableDataSource();

  constructor(
    private srvEstudiantes: EstudiantesService,
    public dialog: MatDialog,
    private mensajeria: ToastrService
  ) {}
  ngOnInit() {
    this.cargarlista();
  }

  cargarlista() {
    this.srvEstudiantes.getAll().subscribe(
      (datos) => {
        this.dataSource.data = datos;
      },
      (error) => {
        this.mensajeria.error(error);
      }
    );
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  modificar(): void {
    alert('modificar');
  }

  eliminar(id: number): void {
    this.srvEstudiantes.eliminar(id).subscribe(
      (dato) => {
        alert('Se eliminó el estudiante');
      },
      (err) => {
        alert('Error al eliminar');
      }
    );
  }

  detalle(dato: Estudiantes): void {
    alert(dato.nombre);
  }

  abrirDialog(estudiante?: Estudiantes): void {
    let dialogOpen;
    if (estudiante) {
      dialogOpen = this.dialog.open(AdminMatriculasComponent, {
        width: '700px',
        height: '700px',
        data: { estudiante },
      });
    } else {
      dialogOpen = this.dialog.open(AdminMatriculasComponent, {
        width: '700px',
        height: '700px',
      });
    }

    dialogOpen.afterClosed().subscribe((data) => {
      console.log(data);
      this.cargarlista();
    });
  }
}
