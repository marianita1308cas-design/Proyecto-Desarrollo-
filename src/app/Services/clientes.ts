
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ClientesService {

  private readonly url = 'http://localhost:3000/api/clientes';

  constructor(private http: HttpClient) {}

  // Consultar todos los clientes
  obtenerTodos(): Observable<any[]> {
    return this.http.get<any[]>(this.url);
  }

  // Consultar un cliente por su ID
  obtenerPorId(id: number): Observable<any> {
    return this.http.get<any>(`${this.url}/${id}`);
  }

  // Registrar un nuevo cliente
  crear(cliente: any): Observable<any> {
    return this.http.post<any>(this.url, cliente);
  }

  // Actualizar todos los datos de un cliente
  actualizar(id: number, cliente: any): Observable<any> {
    return this.http.put<any>(`${this.url}/${id}`, cliente);
  }

  // Actualizar parcialmente un cliente
  actualizarParcial(id: number, cliente: any): Observable<any> {
    return this.http.patch<any>(`${this.url}/${id}`, cliente);
  }

  // Eliminar un cliente
  eliminar(id: number): Observable<any> {
    return this.http.delete<any>(`${this.url}/${id}`);
  }
}

