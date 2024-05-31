import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private users:User[] = [
    {
      id:1,
      name: 'Juan',
      lastname:'Gutierrez',
      email:'jmgv8719@gmail.com',
      username: 'jmgv8719',
      password: 'contraseña123'
    },
    {
      id:2,
      name: 'Alo',
      lastname:'Garcia',
      email:'Alondra@gmail.com',
      username: 'alo',
      password: 'contraseña456'
    },
  ]

  constructor() { }


  findAll():Observable<User[]>{
    return of(this.users)
  }

}
