import { Component, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../../models/user';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  @Input() users: User[] = []
  @Output() idUserEventEmitter: EventEmitter<number> = new EventEmitter;
  @Output() selectedUserEventEmitter: EventEmitter<User> = new EventEmitter;

  onRemoveUser( id:number ){
    this.idUserEventEmitter.emit(id)
  }

  onSelectedUser( user:User ){
    this.selectedUserEventEmitter.emit(user)
  }

}