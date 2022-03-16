import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  title: string = 'Users List'
  users: User[] = [];



  constructor(private service:UsersService) { }

  ngOnInit(): void {
    this.service.findAll().subscribe(users =>this.users = users)

  }
  delete(user: User):void {
    if (confirm(`¿Seguro que desea eliminar a ${user.name}?`)) {
      this.service.deleteById(user.id!).subscribe(() => {
        this.users = this.users.filter(a => a != user);
        alert(`User ${user.name}eliminado con exito`)
      })
    }
  }

}
