import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';
import { UserComponent } from '../user/user.component';
import { UserFormComponent } from '../user-form/user-form.component';

@Component({
  selector: 'app-user-app',
  standalone: true,
  imports: [ UserComponent,UserFormComponent],
  templateUrl: './user-app.component.html',
  styleUrl: './user-app.component.css'
})
export class UserAppComponent implements OnInit {

  users:User[] = []

  constructor ( private _userService:UserService ){}

  ngOnInit(): void {

    this._userService.findAll().subscribe((data)=>{
      this.users = data
    })

  }


}
