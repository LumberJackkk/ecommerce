import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../../../models/user';
import { UsersService } from '../../../services/users.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  title: string = "Create a User"

  user: User = {
    name: '',
    userName: '',
    password:'',
    address: '',
    email: '',
    cellNumber: '',
  };
  error: any;

  constructor(private service:UsersService, private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id: number = Number(params.get('id'));
      if (id) {
        this.service.findById(id).subscribe(user => {
          this.user = user;
        })
      }
    })
  }

  create() {

    this.service.create(this.user).subscribe(user => {
      console.log(user);
      alert(`User creado con exito: ${user.name}`);
      this.router.navigate(['/users'])
    }, err => {
      if (err.status === 400) {
        this.error = err.error;
        console.log(this.error);
      }
    })
  }

  edit() {
    this.service.update(this.user).subscribe(user => {
      console.log(user);
      alert(`User actualizado con con exito: ${user.name}`);
      this.router.navigate(['/users'])
    }, err => {
      if (err.status === 400) {
        this.error = err.error;
        console.log(this.error);
      }
    })
  }

}

