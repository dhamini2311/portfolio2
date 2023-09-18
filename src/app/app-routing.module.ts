import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';
import { SkillsComponent } from './skills/skills.component';
import { CertificatesComponent } from './certificates/certificates.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactsComponent } from './contacts/contacts.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      { path: 'home', component: HomeComponent },
      {path:'skills',component:SkillsComponent},
      {path:'certificates',component:CertificatesComponent},
      {path:'projects',component:ProjectsComponent},
      {path:'contacts',component:ContactsComponent},
      { path: '**', redirectTo: 'home' },]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
