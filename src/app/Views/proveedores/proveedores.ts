import { Component, OnInit, inject } from '@angular/core';
import { CatalogosService, FilaCatalogo } from '../../Services/catalogos';
import { Table } from '../../table/table';

@Component({
  selector: 'app-proveedores',
  standalone: true,
  imports: [Table],
  templateUrl: './proveedores.html',
  styleUrl: './proveedores.css',
})
export class Proveedores implements OnInit {
  private readonly catalogosService = inject(CatalogosService);
  proveedores: FilaCatalogo[] = [];
  cargando = true;
  error = '';

  ngOnInit(): void {
    this.catalogosService.obtener('proveedores').subscribe({
      next: (datos) => {
        this.proveedores = datos;
        this.cargando = false;
      },
      error: (error: unknown) => {
        console.error('Error al cargar proveedores:', error);
        this.error = 'No se pudieron cargar los proveedores.';
        this.cargando = false;
      },
    });
  }
}
