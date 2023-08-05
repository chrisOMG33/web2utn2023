import { FormBuilder, FormGroup } from '@angular/forms';

export class ProductosForm {
  baseForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.baseForm = this.fb.group({
      id: [''],
      nombre: [''],
      precio: [0],
      stock: [0],
      fechaIngreso: [Date],
      estado: [true],
    });
  }
}
