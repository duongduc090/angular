import { Injectable } from '@angular/core';
import { ProductType } from './product/product';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ProductService {
  API: string = 'https://60f772469cdca00017454e48.mockapi.io/product';

  constructor(private http: HttpClient) {}
  getList(): Observable<ProductType[]> {
    return this.http.get<ProductType[]>(this.API);
  }
  get(id:number): Observable<ProductType> {
    return this.http.get<ProductType>(`${this.API}/${id}`);
  }
  addProduct(item: ProductType): Observable<ProductType> {
    return this.http.post<ProductType>(this.API, item);
  }
  updateProduct(item: ProductType): Observable<ProductType> {
    return this.http.put<ProductType>(`${this.API}/${item.id}`, item);
  }
  removeProduct(id: number): Observable<ProductType> {
    return this.http.delete<ProductType>(`${this.API}/${id}`);
  }
}
