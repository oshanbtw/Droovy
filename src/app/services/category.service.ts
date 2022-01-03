import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { Category } from '../category/category';

@Injectable()
export class CategoryService {

  path = "http://localhost:3000/categories"

  constructor(private http: HttpClient) { }

  getCategory():Observable<Category[]>{
    return this.http.get<Category[]>(this.path)
  }
}
