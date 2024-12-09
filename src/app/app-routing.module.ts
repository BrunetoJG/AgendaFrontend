import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AgendaFormComponent } from './agenda-form/agenda-form.component';
import { AgendasTableComponent } from './agendas-table/agendas-table.component';

const routes: Routes = [
{ path:'', redirectTo: '/agendas', pathMatch: 'full'},
{path: 'agendas', component: AgendasTableComponent},
{path: 'agenda/:id',component: AgendaFormComponent},
{path: 'agenda', component: AgendaFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
