import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import { catchError, Observable, retry, throwError } from "rxjs";
import { environment } from "../../../environments/environment.development";

@Injectable({
  providedIn: 'root'
})
export class ApiProductsService {
  protected baseUrl = `${environment.serverBasePath}/api/v1`;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  };

  constructor(private http: HttpClient) {}

  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) console.log(`An error occurred ${error.error.message}`);
    else console.log(`${error.error}`);
    return throwError(() => new Error('Something happened with request, please try again later'));
  }

  getAllProducts(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/products`);
  }

  getProductById(id: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/products/${id}`);
  }

  create(item: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/products`, JSON.stringify(item), this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/products/${id}`, this.httpOptions).pipe(retry(2), catchError(this.handleError));
  }

  update(id: number, item: any): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/products/${id}`, JSON.stringify(item), this.httpOptions).pipe(retry(2), catchError(this.handleError));
  }
}
