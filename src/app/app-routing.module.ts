import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PropertyComponent } from './property/property.component';
import { ProjectsComponent } from './projects/projects.component';
import { DocsComponent } from './docs/docs.component';
import { ClientsComponent } from './clients/clients.component';
import { ContactsComponent } from './contacts/contacts.component';




const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent, data: {state:'home'}},
  { path: 'projects', component: ProjectsComponent, data:{state:'projects'}},
  { path: 'property/:id', component: PropertyComponent, data:{state:'property'}},
  { path: 'docs', component: DocsComponent, data:{state:'docs'}},
  { path: 'clients', component: ClientsComponent, data:{state:'clients'}},
  { path: 'contacts', component: ContactsComponent, data:{state:'contacts'}}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
