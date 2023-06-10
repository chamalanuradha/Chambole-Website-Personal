import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { EmploeesComponent} from './emploees/emploees.component';
import { FeaturesComponent } from './features/features.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'login', component: LoginComponent},
  {path:'employees', component: EmploeesComponent},
  {path:'register', component: RegisterComponent},
  {path:'features', component: FeaturesComponent},
  {path:'aboutus', component: AboutusComponent},
  {path:'contact', component: ContactComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
