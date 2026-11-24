import { Component, OnInit, inject } from '@angular/core';
import { CatalogosService, FilaCatalogo } from '../../Services/catalogos';
import { Table } from '../../table/table';

@Component({
  selector: 'app-inventario',
  standalone: true,
  imports: [Table],
  templateUrl: './inventario.html',
  styleUrl: './inventario.css',
})
export class Inventario implements OnInit {
  private readonly catalogosService = inject(CatalogosService);
  productos: FilaCatalogo[] = [];
  cargando = true;
  error = '';

  ngOnInit(): void {
    this.catalogosService.obtener('inventario').subscribe({
      next: (datos) => {
        this.productos = datos;
        this.cargando = false;
      },
      error: (error: unknown) => {
        console.error('Error al cargar el inventario:', error);
        this.error = 'No se pudo cargar el inventario.';
        this.cargando = false;
      },
    });
  }
}
