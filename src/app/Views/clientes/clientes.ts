
import { Component, inject, OnInit } from '@angular/core';

import { Cliente, ClientesService } from './clientes.service';
import { Table } from '../../table/table';

@Component({
  selector: 'app-clientes',
  standalone: true,
  imports: [Table],
  templateUrl: './clientes.html',
  styleUrl: './clientes.css',
})
export class Clientes implements OnInit {

  private readonly clientesService = inject(ClientesService);

  clientes: Cliente[] = [];

  cargando = true;

  error = '';

  ngOnInit(): void {
    this.cargarClientes();
  }

  // Consultar todos los clientes
  cargarClientes(): void {
    this.cargando = true;
    this.error = '';

    this.clientesService.obtenerTodos().subscribe({
      next: (clientes) => {
        console.log('Clientes recibidos:', clientes);

        this.clientes = clientes;
        this.cargando = false;
      },

      error: (error) => {
        console.error('Error al consultar clientes:', error);

        this.error = 'No se pudieron cargar los clientes.';
        this.cargando = false;
      },
    });
  }

}
