import { Component, OnInit } from '@angular/core';
import { Task } from '../task.model';
import { TaskServices } from '../task.services';

@Component({
  selector: 'app-alltask',
  templateUrl: './alltask.component.html',
  styleUrls: ['./alltask.component.css']
})

export class AlltaskComponent implements OnInit {
  
      tasklist:Task[] = [];
      updatelist:Task[] = [];
      selectTask:string = '';
      selectTaskName:string ='';
      selectTaskstartdate:string ='';
      selectTaskenddate:string ='';
      selectTaskstatus:string ='';
      deleteIds:any =  new Array();
      selectname:any =  new Array();
      constructor(private taskService: TaskServices) { }
 


      showbutton:boolean = false;
      loading:boolean =false;
          ngOnInit(){
            this.fetchdata();
          }
 
          fetchdata(){
      this.loading = true;
      this.taskService.fechtAll().subscribe(
        task => {
          this.loading = false;
          this.tasklist = task;
          this.showbutton = false;
          this.updatelist = [];
          this.deleteIds =  new Array();
          this.selectname =  new Array();
       
         
        }
      );
    
  }

  select(id:string,taskname:string,startdate:string,completedate:string,status:string ){
    
    if(this.deleteIds.includes(id)){
      this.deleteIds.splice(this.deleteIds.indexOf(id), 1);
      this.selectname.splice(this.selectname.indexOf(taskname), 1);

      for (var i = this.updatelist.length; i--;) {
        if (this.updatelist[i].taskname === taskname) this.updatelist.splice(i, 1);}
     
      this.showbutton = true;
    }else{
      this.deleteIds.push(id);
      this.selectname.push(taskname);
      this.updatelist.push({taskname: taskname,completedate: completedate,status: 'Complete',startdate: startdate,id:id});
      this.showbutton = true;
    }
   
    if(this.deleteIds.length < 1){
      this.showbutton = false;
      this.updatelist = [];
      this.deleteIds =  new Array();
      this.selectname =  new Array();
    }
    
         this.selectTask = id ;
         this.selectTaskName = taskname;
         this.selectTaskstartdate = startdate;
         this.selectTaskenddate = completedate;
         this.selectTaskstatus = status;
  }


      deleteTask(taskname:[]){
       this.taskService.deleteTask(taskname)
        alert('Sucessful remove this Task..!') 
        return this.fetchdata();
      }
    
  
        update(updatelist:Task[]){
          this.taskService.update(updatelist);
          alert('Sucessful update this Task..!');
            return this.fetchdata() ;
       }
}
