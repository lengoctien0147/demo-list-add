import { Component, OnInit, OnDestroy } from '@angular/core';
import { StudentService} from './../../services/student.service';
import { Subscription} from 'rxjs';
import { Student} from './../../models/student.model';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit, OnDestroy {
  
  totalRecords: number;
  page: number =1;
	public subscription : Subscription;
	public student: Student[]=[];

  constructor(public studentService : StudentService) { }

  ngOnInit(): void {
  	this.subscription=this.studentService.getAllStudent().subscribe((data : Student[]) =>{
         this.student =data;
         this.totalRecords = data.length;
  	});
  }

  ngOnDestroy(){
  	if(this.subscription){
  		this.subscription.unsubscribe();
  	}
  }

  onDeleteStudent(massv: string){
    this.subscription=this.studentService.deleteStudent(massv).subscribe((data : Student) =>{
         this.updataDataAfterDelete(massv);
         //console.log(data);
    });

  }

  updataDataAfterDelete(massv: string){
    for (var i = 0; i < this.student.length; i++) {
      if(this.student[i].massv == massv){
        this.student.splice(i, 1);
        break;

            }
        }
    }

    Search(){
      if(this.name !=""){
        this.student=this.student.filter(res=>{
        return res.name.toLocaleLowerCase().match(this.name.toLocaleLowerCase());
      })
      }else if(this.name ==""){
        this.ngOnInit();
      }
    }
}
