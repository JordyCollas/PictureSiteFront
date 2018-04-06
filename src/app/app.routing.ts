import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RegisterSuccessComponent } from './register/register-success/register-success.component';
import { AuthGuard } from './guards/auth.guard';
import { AdminComponent } from './admin/admin.component';

const appRoutes: Routes = [
   { path: '', component: HomeComponent},
   { path: 'login', component: LoginComponent },
   { path: 'register', component: RegisterComponent },
   { path: 'registerSuccess', component: RegisterSuccessComponent},
   { path: 'admin', component: AdminComponent},
   
   // otherwise redirect to home
   { path: '**', redirectTo: '' }
];

export const Routing = RouterModule.forRoot(appRoutes);