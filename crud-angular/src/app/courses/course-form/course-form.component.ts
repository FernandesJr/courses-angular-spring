import { CoursesService } from './../services/courses.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Location } from '@angular/common';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss']
})
export class CourseFormComponent implements OnInit {

  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private service: CoursesService,
    private location: Location,
    private snackBar: MatSnackBar, ) {
    this.form = this.formBuilder.group({
      name: [null],
      category: [null]
    })
   }

  ngOnInit(): void {
  }

  onCancel(){
    this.location.back();
  }

  onSubmit(){
    this.service.save(this.form.value);
    //.subscribe(result => this.onSuccess(), error => this.onError());
    this.onSuccess();
  }

  private onSuccess() {
    this.snackBar.open('Curso salvo com sucesso!', 'X', { duration: 5000 });
    this.onCancel();
  }

  private onError() {
    this.snackBar.open('Erro ao salvar curso.', '', { duration: 5000 });
  }

}
