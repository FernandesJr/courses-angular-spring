import { Course } from './../courses/model/course';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; //Lembrando que necessita ser importado no modulo do app

@Injectable({
  providedIn: 'root'
}) //Semelhante a um Bean que é gerenciado pelo Angula
export class CoursesService {

  //Injetando class via construtor
  constructor(private httpClient : HttpClient) { }

  list(): Course[] {
    return [
      {_id: '1', name: 'Angular', category: 'Front-end'},
      {_id: '2', name: 'Spring', category: 'Back-end'}
    ];
  }
}
