import { Component, Output, EventEmitter, Input } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { User } from '../../models/user';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [ FormsModule ],
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.css'
})
export class UserFormComponent {

  @Input() user:User;
  @Output() userEventEmitter:EventEmitter<User> = new EventEmitter;

  constructor(){
    this.user = new User;
  }

  onSubmit(userForm: NgForm):void{

    if (userForm.valid) {
      
      this.userEventEmitter.emit(this.user)
    }
    userForm.reset();
    userForm.resetForm();

  }

  onClear(userForm: NgForm){
    userForm.reset();
    userForm.resetForm();
  }

}
