import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Streamer } from '../models/streamer';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StreamerService {
  http = inject(HttpClient)

  API = "http://localhost:8080/streamer";

  constructor() { }

  findAll(): Observable<Streamer[]>{
    return this.http.get<Streamer[]>(this.API+"/findall");
  }

  delete(id: number): Observable<string>{
    return this.http.delete<string>(this.API+"/delete/"+id, {responseType: 'text' as 'json'});
  }

  save(streamer: Streamer): Observable<string>{
    return this.http.post<string>(this.API+"/save", streamer, {responseType: 'text' as 'json'});
  }

  update(streamer: Streamer, id: number): Observable<string>{
    return this.http.put<string>(this.API+"/update/"+id, streamer, {responseType: 'text' as 'json'});
  }
}
