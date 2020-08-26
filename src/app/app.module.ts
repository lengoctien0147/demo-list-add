import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentComponent } from './components/student/student.component';
import { StudentListComponent } from './components/student-list/student-list.component';
import { StudentAddComponent } from './components/student-add/student-add.component';

import { FormsModule} from '@angular/forms';
import { RouterModule, Routes} from '@angular/router';
import { StudentService } from './services/student.service';
import { HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { StudentEditComponent } from './components/student-edit/student-edit.component';

import {NgxPaginationModule} from 'ngx-pagination';


const appRoutes : Routes = [
      {
        path: '',
        component: StudentListComponent
      },
      {
        path: 'student',
        component: StudentComponent,
        children:[
            {
              path: '',
              component: StudentListComponent
            },
            {
              path: ':massv/edit',
              component: StudentEditComponent
            },
            {
              path: 'add',
              component: StudentAddComponent
            },
            {
              path: 'student/add',
              component: StudentAddComponent
            }
        ]

      }
];

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    StudentListComponent,
    StudentAddComponent,
    HomeComponent,
    StudentEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule,
    NgxPaginationModule
    

  ],
  providers: [StudentService],
  bootstrap: [AppComponent]
})
export class AppModule { }

