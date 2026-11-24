import { Component, OnInit, inject } from '@angular/core';
import { CatalogosService, FilaCatalogo } from '../../Services/catalogos';
import { Table } from '../../table/table';

@Component({
  selector: 'app-ventas',
  standalone: true,
  imports: [Table],
  templateUrl: './ventas.html',
  styleUrl: './ventas.css',
})
export class Ventas implements OnInit {
  private readonly catalogosService = inject(CatalogosService);
  ventas: FilaCatalogo[] = [];
  cargando = true;
  error = '';

  ngOnInit(): void {
    this.catalogosService.obtener('ventas').subscribe({
      next: (datos) => {
        this.ventas = datos;
        this.cargando = false;
      },
      error: (error: unknown) => {
        console.error('Error al cargar las ventas:', error);
        this.error = 'No se pudieron cargar las ventas.';
        this.cargando = false;
      },
    });
  }
}
