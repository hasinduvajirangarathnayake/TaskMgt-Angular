import { Injectable } from '@angular/core';
import {
  HttpClient
} from '@angular/common/http';
import { Task } from './task.model';
import { map, catchError } from 'rxjs/operators';
import { Subject, throwError} from 'rxjs';

@Injectable({ providedIn: 'any' })


export class TaskServices {
    error = new Subject<string>();
    constructor(private http: HttpClient) {}

    today = new Date().toLocaleDateString();
    

createTask(taskname: string,completedate: string){
       
  const taskData:Task = {taskname: taskname,completedate: completedate,status: 'Not Complete',startdate: this.today}

  this.http
      .post<{ name: string }>(
        'https://taskmanagement-79112-default-rtdb.firebaseio.com/task.json',
        taskData,
        {
          observe: 'response'
        }
      )
      .subscribe(
        responseData => {
          console.log(responseData);
        },
        error => {
          this.error.next(error.message);
        }
      );
    }

  fechtAll(){

      return this.http
      .get<{ [key: string]: Task }>(
        'https://taskmanagement-79112-default-rtdb.firebaseio.com/task.json')
      .pipe(
        map(responseData => {
          const taskArray: Task[] = [];
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              taskArray.push({ ...responseData[key], id: key });
            }
          }
          return taskArray;
        }),
        catchError(errorRes => {
          return throwError(errorRes);
        })
      );
}


update(updatelist:Task[]){

  for (var val of  updatelist) {
  const url = 'https://taskmanagement-79112-default-rtdb.firebaseio.com/task/'+val.id+'.json';
  let datas = JSON.stringify(val);
  this.http.put(url,datas).subscribe(resp => {
    return resp;
  }
     );
  }
 
}

deleteTask(taskname:[]){
 
  for (var val of  taskname) {
    const url = 'https://taskmanagement-79112-default-rtdb.firebaseio.com/task/'+val+'.json';
     this.http.delete(url).subscribe(resp => {
      return resp;
  }
     );
}
 
}
 
}