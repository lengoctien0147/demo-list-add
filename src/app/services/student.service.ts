import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse} from '@angular/common/http';
import { Student} from './../models/student.model';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

	public API : string ='https://serverstudent.herokuapp.com';

  constructor(public http: HttpClient) { }

  getAllStudent(): Observable<Student[]>{
  	return this.http.get<Student[]>(this.API +'/getAll');
  }

  addStudent(student: Student) : Observable<Student>{
  	return this.http.post<Student>(this.API, student);
  }

  deleteStudent(massv: string): Observable<Student>{
    return this.http.delete<Student>(this.API +'/delete' + massv);
  }

  updateStudent(student: Student): Observable<Student>{
  	return this.http.put<Student>(this.API + '/update', student);
  }
  
  getStudent(massv: string): Observable<Student>{
    return this.http.get<Student>(this.API +'/find' + massv);
  }
}
