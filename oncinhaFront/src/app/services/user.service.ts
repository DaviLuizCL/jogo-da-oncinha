import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  http = inject(HttpClient)

  API = "http://localhost:8080/user";

  constructor() { }

  findAll(): Observable<User[]>{
    return this.http.get<User[]>(this.API+"/findall");
  }

  delete(id: number): Observable<string>{
    return this.http.delete<string>(this.API+"/delete/"+id, {responseType: 'text' as 'json'});
  }

  save(user: User): Observable<string>{
    return this.http.post<string>(this.API+"/save", user, {responseType: 'text' as 'json'});
  }

  update(user: User, id: number): Observable<string>{
    return this.http.put<string>(this.API+"/update/"+id, user, {responseType: 'text' as 'json'});
  }
}
