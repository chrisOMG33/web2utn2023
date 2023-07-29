import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Productos } from 'src/app/shared/components/models/productos';
import { ProductosService } from 'src/app/shared/services/productos.service';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

// const ELEMENT_DATA: Productos[] = [];
@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss'],
})
export class ProductosComponent {
  displayedColumns: string[] = ['id', 'nombre', 'precio'];
  dataSource = new MatTableDataSource();

  constructor(private srvProductos: ProductosService) {}
  ngOnInit() {
    this.srvProductos.getAll().subscribe((datos) => {
      this.dataSource.data = datos;
    });
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
