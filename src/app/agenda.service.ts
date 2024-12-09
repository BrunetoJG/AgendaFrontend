import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Agenda } from '../agenda';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AgendaService {

  constructor(private http: HttpClient) { }

  url = 'http://localhost:3000/agendas';
  
  getAgendas(): Observable<Agenda[]>{
    return this.http.get<Agenda[]>(this.url);
  }
  getAgendaById(id: number): Observable<Agenda> {
    return this.http.get<Agenda>(`${this.url}/${id}`);
  }
  delete(agenda:Agenda): Observable<void> {
    return this.http.delete<void>(`${this.url}/${agenda.id}`);
  }
  update(agenda:Agenda): Observable<Agenda>{
    return this.http.put<Agenda>(`${this.url}/${agenda.id}`,agenda);
  }
  save(agenda:Agenda): Observable<Agenda>{
    return this.http.post<Agenda>(this.url, agenda);
  }
}
