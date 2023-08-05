import { Component } from '@angular/core';
import { ProductosForm } from 'src/app/shared/formsModels/productosForms';

@Component({
  selector: 'app-admin-productos',
  templateUrl: './admin-productos.component.html',
  styleUrls: ['./admin-productos.component.scss'],
})
export class AdminProductosComponent {
  titulo: 'Crear Producto';
  constructor(public productosForm: ProductosForm) {}
}
