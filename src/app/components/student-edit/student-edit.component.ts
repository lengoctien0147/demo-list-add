import { Component, OnInit } from '@angular/core';
import { Student} from './../../models/student.model';
import { StudentService} from './../../services/student.service';
import { Subscription} from 'rxjs';
import { Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
  styleUrls: ['./student-edit.component.css']
})
export class StudentEditComponent implements OnInit {

	public subscription : Subscription;
    public subscriptionParams : Subscription;
    public student : Student;

  constructor(
  	public studentService : StudentService,
  	public routerService: Router,
  	public activatedRouteService : ActivatedRoute
  	) { }

  ngOnInit(){
  	this.student = new Student();
  	this.loadData();
  }

  loadData(){
  	this.subscriptionParams=this.activatedRouteService.params.subscribe((data: Params )=>{
         let massv = data['massv'];
         this.subscription = this.studentService.getStudent(massv).subscribe((student : Student) =>{
         this.student=student;
         });
  	});
  }

  onEditStudent(){
  	this.subscription = this.studentService.updateStudent(this.student).subscribe((data: Student) =>{
    this.routerService.navigateByUrl('student');
    //console.log(data);
  	});

  }

}
