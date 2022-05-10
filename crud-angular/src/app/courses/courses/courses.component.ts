import { Course } from './model/course';
import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../services/courses.service';
import { catchError, Observable, of } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  courses$: Observable<Course[]>; //Lista que será iterada na tabela do html, o $ é informando que o objeto é um Observable
  displayedColumns = ['name', 'category']; //Colunas que têm declaradas na tabela

  //Injetando class via construtor
  constructor(
    private coursesService: CoursesService,
    public dialog: MatDialog
    ) {
    this.courses$ = this.coursesService.list().pipe(
      catchError(error => {
        this.onError("Erro ao carregar os cursos.")
        return of([]); //Construtor de um Observable
      })
    );
  }

  ngOnInit(): void {
    //this.courses = this.coursesService.list();
  }

  onError(errorMsg : string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg
    });
  }

}
