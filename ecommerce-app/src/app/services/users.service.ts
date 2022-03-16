import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { User } from '../models/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private baseURL = environment.serviceUrl + 'users';

  constructor(private http: HttpClient) { }

  public findAll(): Observable<User[]>{
    return this.http.get<User[]>(this.baseURL);
  }

  public findById(id:number): Observable<User>{
    return this.http.get<User>(`${this.baseURL}/${id}`)
  }

  public create(user:User): Observable<User>{
    return this.http.post<User>(`${this.baseURL}`, user);
  }

  public update(user:User): Observable<User>{
    return this.http.post<User>(`${this.baseURL}/${user.id}`, user);
  }

  public deleteById(id: number): Observable<void>{
    return this.http.delete<void>(`${this.baseURL}/${id}`)
  }
}
