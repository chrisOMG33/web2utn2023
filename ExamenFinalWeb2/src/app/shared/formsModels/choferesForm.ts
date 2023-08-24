import { formatDate } from '@angular/common';
import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Injectable({ providedIn: 'root' })
export class choferesForm {
  baseFrom: FormGroup;
  constructor(private fb: FormBuilder) {
    this.baseFrom = this.fb.group({
      cedula: ['', [Validators.required]],
      nombre: ['', [Validators.required]],
      apellido1: ['', [Validators.required]],
      apellido2: ['', [Validators.required]],
      fechaNac: [Date, [Validators.required]],
      estado: [true],
      licencia: [Validators.required],
    });
  }
}
