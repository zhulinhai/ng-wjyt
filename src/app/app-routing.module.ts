import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';

import { CaseRoutingModule } from './case/case-routing.module';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'contact', component: ContactComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full'},
];

@NgModule({
  imports: [ RouterModule.forRoot(routes), CaseRoutingModule ],
  exports: [ RouterModule ],
})
export class AppRoutingModule { }
