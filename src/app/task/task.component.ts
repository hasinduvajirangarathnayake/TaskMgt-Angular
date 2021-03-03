import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TaskServices } from './task.services';
import { Task} from './task.model';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})

export class TaskComponent implements OnInit {
   Task:Task[] = [];
   taskIn:any = [];
   taskForm:FormGroup;
  constructor(
    private taskServrvice: TaskServices
  ) {}
 
   

  ngOnInit() {
    this.taskForm = new FormGroup({
      'taskname': new FormControl(null, [Validators.required, this.checkTask.bind(this)]),
      'completedate': new FormControl(null, Validators.required),
    });
    
   this.gettaskin();

  }
  
  gettaskin(){
    this.taskServrvice.fechtAll().subscribe(
      task => {
        for(let taskdeta of task){
          this.taskIn.push(taskdeta.taskname);
          
        }
       
      }
    );
  }

 

  onSubmit(taskData: Task){
    alert('Sucessful adding task..!');
    this.taskIn.push(taskData.taskname);
    this.taskForm.reset();
    this.taskServrvice.createTask(taskData.taskname, taskData.completedate);
   
  }


  checkTask(control: FormControl): {[s: string]: boolean} | null{
  if (this.taskIn.indexOf(control.value) !== -1) {
    return {'taskIsexits': true};
  }
    return null;
  }
 

}
