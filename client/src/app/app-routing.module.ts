import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookStoreComponent } from './book-store/book-store.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ServicesComponent } from './pages/services/services.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent, data: {title: 'Our Home Page'}},
  {path: 'about', component:AboutComponent, data: {title: 'About'}},
  {path: 'projects', component:ProjectsComponent, data: {title: 'Projects'}},
  {path: 'services', component:ServicesComponent, data: {title: 'Services'}},
  {path: 'book-list', component: BookStoreComponent, data: {title: 'Book Store'}},
  {path: 'contact', component:ContactComponent, data: {title: 'Contact'}},
  {path: '', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
