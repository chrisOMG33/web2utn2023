import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Injectable({ providedIn: 'root' }) //todos los formGroup deben llevar esta linea
export class UsuariosForm {
  baseForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.baseForm = this.fb.group({
      cedula: ['', [Validators.required]],
      nombre: ['', [Validators.required]],
      apellido1: ['', [Validators.required]],
      apellido2: ['', [Validators.required]],
      fecha_ingreso: [Date.now, [Validators.required]],
      correo: ['', [Validators.email]],
      rol: ['', [Validators.required]],
      contrasena: ['', [Validators.required]],
      estado: [true],
    });
  }
}
