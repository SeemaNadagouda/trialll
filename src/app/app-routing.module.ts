import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainpageComponent } from './mainpage/mainpage.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path: 'home', component: HomeComponent},
  {path: 'main', component: MainpageComponent},
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: '**', component: PagenotfoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
