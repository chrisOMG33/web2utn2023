import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UsuariosForm } from 'src/app/shared/formsModels/usuariosForms';
import { UsuariosService } from 'src/app/shared/services/usuarios.service';

@Component({
  selector: 'app-admin-usuarios',
  templateUrl: './admin-usuarios.component.html',
  styleUrls: ['./admin-usuarios.component.scss'],
})
export class AdminUsuariosComponent {
  titulo = 'Crear Usuario';
  isCreate = true;
  constructor(
    public usuariosForm: UsuariosForm,
    private srvUsuarios: UsuariosService,
    @Inject(MAT_DIALOG_DATA) public data: { usuario: any }
  ) {}
  ngOnInit() {
    if (this.data?.usuario) {
      this.isCreate = false;
      this.titulo = 'Modificar Usuario';
      this.cargarDatosForm();
    } else {
      this.isCreate = true;
      this.titulo = 'Crear Usuario';
    }
  }

  cargarDatosForm() {
    this.usuariosForm.baseForm.patchValue({
      cedula: this.data.usuario.cedula,
      nombre: this.data.usuario.nombre,
      apellido1: this.data.usuario.apellido1,
      apellido2: this.data.usuario.apellido2,
      fecha_ingreso: this.data.usuario.fecha_ingreso,
      correo: this.data.usuario.correo,
      rol: this.data.usuario.rol,
      contrasena: this.data.usuario.contrasena,
      estado: true,
    });
  }

  guardar() {
    if (this.usuariosForm.baseForm.valid) {
      if (this.isCreate) {
        this.srvUsuarios.guardar(this.usuariosForm.baseForm.value).subscribe(
          (dato) => {
            this.usuariosForm.baseForm.reset();
            alert('SE GUARDO CORRECTAMENTE');
          },
          (error) => {
            alert('Error al guardar');
          }
        );
      } else {
        this.srvUsuarios.modificar(this.usuariosForm.baseForm.value).subscribe(
          (dato) => {
            this.usuariosForm.baseForm.reset();
            alert('SE MODIFICO CORRECTAMENTE');
          },
          (error) => {
            alert('Error al guardar');
          }
        );
      }
    }
  }
}
