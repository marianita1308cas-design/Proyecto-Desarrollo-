import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, timeout } from 'rxjs';

export type Catalogo = 'proveedores' | 'inventario' | 'ventas';
export type FilaCatalogo = Record<string, unknown>;

@Injectable({ providedIn: 'root' })
export class CatalogosService {
  private readonly http = inject(HttpClient);
  private readonly apiUrl = 'http://localhost:3000/api/v1';

  obtener(tabla: Catalogo): Observable<FilaCatalogo[]> {
    return this.http.get<FilaCatalogo[]>(`${this.apiUrl}/${tabla}`).pipe(timeout(10000));
  }
}
