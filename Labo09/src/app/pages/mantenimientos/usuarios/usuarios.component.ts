import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Usuarios } from 'src/app/shared/models/usuarios';
import { UsuariosService } from 'src/app/shared/services/usuarios.service';
import { AdminUsuariosComponent } from './admin-usuarios/admin-usuarios.component';
// const ELEMENT_DATA: Productos[] = [];

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss'],
})
export class UsuariosComponent {
  displayedColumns: string[] = [
    'cedula',
    'nombre',
    'apellido1',
    'apellido2',
    'correo',
    'rol',
    'contrasena',
    'acciones',
  ];

  dataSource = new MatTableDataSource();

  constructor(private srvUsuarios: UsuariosService, public dialog: MatDialog) {}
  ngOnInit() {
    this.srvUsuarios.getAll().subscribe((datos) => {
      this.dataSource.data = datos;
    });
  }

  ngAfterViewInit() {
    this.ejecutarDespuesDeVistaCargada();
  }

  ejecutarDespuesDeVistaCargada() {
    console.log('Vista de Usuarios Component cargada completamente');
    alert('¡La vista de Usuarios Component se ha cargado completamente!');
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  modificar(): void {
    alert('modificar');
  }

  eliminar(cedula: number): void {
    this.srvUsuarios.eliminar(cedula).subscribe(
      (dato) => {
        alert('Se eliminó el usuario');
      },
      (err) => {
        alert('Error al eliminar');
      }
    );
  }

  detalle(dato: Usuarios): void {
    alert(dato.nombre);
  }

  abrirDialog(usuario?: Usuarios): void {
    if (usuario) {
      this.dialog.open(AdminUsuariosComponent, {
        width: '700px',
        height: '700px',
        data: { usuario },
      });
    } else {
      this.dialog.open(AdminUsuariosComponent, {
        width: '700px',
        height: '700px',
      });
    }
  }
}
