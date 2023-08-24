import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { Chofer } from 'src/app/shared/models/choferes';
import { AdminLicenciasComponent } from './admin-licencias/admin-licencias.component';

@Component({
  selector: 'app-choferes',
  templateUrl: './choferes.component.html',
  styleUrls: ['./choferes.component.scss'],
})
export class ChoferesComponent {
  displayedColumns: string[] = ['cedula', 'nombre', 'acciones'];

  isCreate = true;
  constructor(public dialog: MatDialog) {}

  abrirDialog(chofer?: Chofer): void {
    let dialogOpen;
    if (chofer) {
      dialogOpen = this.dialog.open(AdminLicenciasComponent, {
        width: '700px',
        height: '700px',
        data: { chofer },
      });
    } else {
      dialogOpen = this.dialog.open(AdminLicenciasComponent, {
        width: '700px',
        height: '700px',
      });
    }
  }
}
