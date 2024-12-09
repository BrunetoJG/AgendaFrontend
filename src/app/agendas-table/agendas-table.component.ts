import { Component, OnInit } from '@angular/core';
import { Agenda } from '../../agenda';
import { Router } from '@angular/router';
import { AgendaService } from '../agenda.service';

@Component({
  selector: 'app-agendas-table',
  templateUrl: './agendas-table.component.html',
  styleUrl: './agendas-table.component.css'
})
export class AgendasTableComponent implements OnInit{

  agendas: Agenda[] = [];

  constructor(private service: AgendaService,
    private router: Router
  ){}

    ngOnInit() {
      this.loadAgendas();
    }
  
  loadAgendas(){
    this.service.getAgendas().subscribe({
      next: data => this.agendas = data
    });
  }
  create(){
    this.router.navigate(['agenda'])
  }
  createNew(id:number){
    this.router.navigate(['agenda',id]);
  }
  delete(agenda:Agenda){
    this.service.delete(agenda).subscribe({
      next: () => this.loadAgendas()
    })
  }
}
