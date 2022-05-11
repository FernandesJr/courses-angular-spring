import { ActivatedRoute, Router } from '@angular/router';
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
  displayedColumns = ['name', 'category', 'actions']; //Colunas que têm declaradas na tabela

  //Injetando class via construtor
  constructor(
    private coursesService: CoursesService,
    public dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute //Referência a rota atual em que se encontra
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

  onAdd() {
    this.router.navigate(["new"], {relativeTo: this.route}); //navegando nas rotas
    //O relative é opcional, ele indica a rota atual, isso ajuda no caso de uma possível troca de nome da rota. Caso colocasse /courses/new em todos os lugares que a rota fosse chamada teria que vir e alterar.
  }

}
