import { Course } from './model/course';
import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../services/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  courses: Course[] = []; //Lista que será iterada na tabela do html
  displayedColumns = ['name', 'category']; //Colunas que têm declaradas na tabela

  //Injetando class via construtor
  constructor(private coursesService: CoursesService) {
    this.courses = this.coursesService.list();
  }

  ngOnInit(): void {
    //this.courses = this.coursesService.list();
  }

}
