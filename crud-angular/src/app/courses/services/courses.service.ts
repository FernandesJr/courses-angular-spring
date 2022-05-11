import { Course } from './../courses/model/course';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; //Lembrando que necessita ser importado no modulo do app
import { delay, first, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
}) //Semelhante a um Bean que é gerenciado pelo Angula
export class CoursesService {

  private readonly API = "/assets/date.json";

  //Injetando class via construtor
  constructor(private httpClient : HttpClient) { }

  list() {
    return this.httpClient.get<Course[]>(this.API)
    .pipe(
      delay(3000), //Delay para mostrar o spinner 'carregando'
      first(), //Para não manter uma conecxão permanente
      tap(courses => console.log(courses))//Manipular dados antes de enviar
    );
  }
}
