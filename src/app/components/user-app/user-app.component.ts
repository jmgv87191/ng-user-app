import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';
import { UserComponent } from '../user/user.component';
import { UserFormComponent } from '../user-form/user-form.component';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-user-app',
  standalone: true,
  imports: [ UserComponent,UserFormComponent],
  templateUrl: './user-app.component.html',
  styleUrl: './user-app.component.css'
})
export class UserAppComponent implements OnInit {

  users:User[] = []
  userSelected:User;
  open: boolean = false;

  constructor ( private _userService:UserService ){
    this.userSelected = new User();
  }

  ngOnInit(): void {

    this._userService.findAll().subscribe((data)=>{
      this.users = data
    })

  }


  addUser( user:User ){

    if (user.id > 0) {
      this.users = this.users.map( u => ( u.id ===user.id )?{...user}: u )
    } else {
      this.users = [ ...this.users, {...user, id:new Date().getTime() } ]
    }
    Swal.fire({
      title: "Guardado!",
      text: "Usuario agregado con exito!",
      icon: "success"
    });
    this.userSelected = new User();
    this.setOpen()
  }

  remove( id:number){
    Swal.fire({
      title: "Estas seguro?",
      text: "El usuario sera eliminado pra siempre!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si!"
    }).then((result) => {
      if (result.isConfirmed) {
        this.users = this.users.filter(  item => { return item.id !== id } )
        Swal.fire({
          title: "Eliminado!",
          text: "Usuario eliminado con exito.",
          icon: "success"
        });
      }
    });
  }

  setSelectedUser( userRow:User ){
    this.userSelected = { ...userRow }
    this.open = true
  }

  setOpen(){
    this.open = !this.open
  }

}
