import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TaskServices } from '../task/task.services';
@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

 
 constructor(){}

  ngOnInit(): void {
  }

  formsForm  = new FormGroup({
  
    'image': new FormControl(null, Validators.required),
    'des': new FormControl(null)
  });
  onSubmit(data:any){
    console.log(data.des);
  }
}
