import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AgendaService } from '../agenda.service';

@Component({
  selector: 'app-agenda-form',
  templateUrl: './agenda-form.component.html',
  styleUrl: './agenda-form.component.css'
})
export class AgendaFormComponent implements OnInit{

  formGroupAgenda: FormGroup;
  isEditing: boolean = false;

  constructor(private router: Router,
    private activeRoute: ActivatedRoute,
  private service: AgendaService,
  private formBuilder: FormBuilder
  ){
    this.formGroupAgenda = formBuilder.group({
      id : [''],
      description : [''],
      duration : [''],
      local : [''],
      
      
    });
  }

  ngOnInit(){
    const id = Number(this.activeRoute.snapshot.paramMap.get("id"));
    if(id !=0){
      this.isEditing= true;
      this.loadAgendas(id);
  }
  }
  loadAgendas(id: number) {
    this.service.getAgendaById(id).subscribe({
      next: data => this.formGroupAgenda.setValue(data)
    });
  }
  update(){
    this.service.update(this.formGroupAgenda.value).subscribe({
      next: () => this.router.navigate(['agendas'])
    });
  }
  save(){
    this.service.save(this.formGroupAgenda.value).subscribe({
      next: () => this.router.navigate(['agendas'])
    });
  }
}
