import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table'
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';


//Concentrar todos os modulos do angular material em um só lugar
//Para não precisar importar o mesmo modulo várias vezes em todos os modulos da app
@NgModule({
  exports: [
    MatTableModule,
    MatToolbarModule,
    MatCardModule,
    MatProgressSpinnerModule
  ]
})
export class AppMaterialModule { }
