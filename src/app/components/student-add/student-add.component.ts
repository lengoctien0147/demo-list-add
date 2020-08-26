import { Component, OnInit, OnDestroy } from '@angular/core';
import { Student} from './../../models/student.model';
import { StudentService} from './../../services/student.service';
import { Subscription} from 'rxjs';
import { Router} from '@angular/router';

@Component({
  selector: 'app-student-add',
  templateUrl: './student-add.component.html',
  styleUrls: ['./student-add.component.css']
})
export class StudentAddComponent implements OnInit , OnDestroy{

	public subscription : Subscription;
	public student : Student;

  constructor(public studentService : StudentService,
  	public routerService: Router) { }

  ngOnInit() {
  	this.student = new Student();
  }

  onAddStudent(){

  	this.subscription= this.studentService.addStudent(this.student).subscribe((data: Student) =>{
         //console.log(data);
         if(data && data.massv){
         	this.routerService.navigateByUrl('student');
         }
         this.routerService.navigateByUrl('student');
  	});
  }

  ngOnDestroy(){
  	if(this.subscription){
  		this.subscription.unsubscribe();
  	}
  }

}
