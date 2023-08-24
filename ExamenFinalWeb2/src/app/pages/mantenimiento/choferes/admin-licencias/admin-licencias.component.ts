import { Component } from '@angular/core';
import { choferesForm } from 'src/app/shared/formsModels/choferesForm';
@Component({
  selector: 'app-admin-licencias',
  templateUrl: './admin-licencias.component.html',
  styleUrls: ['./admin-licencias.component.scss'],
})
export class AdminLicenciasComponent {
  constructor(public choferesForm: choferesForm) {}
}
