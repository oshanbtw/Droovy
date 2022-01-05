import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { Category } from '../category/category';
import { environment } from 'src/environments/environment';

@Injectable()
export class CategoryService {

  path = "http://localhost:3000/categories" //Json-server url'si
  
  //path = environment.API_URL //Strapi path

  constructor(private http: HttpClient) { }

  getCategory():Observable<Category[]>{
    return this.http.get<Category[]>(this.path)
    .pipe(tap(data=>console.log(JSON.stringify(data))),
    catchError(this.handleError));
  }

  handleError(err:HttpErrorResponse)
  {
    let errorMessage = ""
    if(err.error instanceof ErrorEvent)
    {
      errorMessage = "Bir Hata Oluştu " + err.error.message
    }
    else
    {
      errorMessage = "Sistemsel Bir Hata Oluştu "
    }

    return throwError(errorMessage)
  }
}
