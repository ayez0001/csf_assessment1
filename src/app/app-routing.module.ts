import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationComponent } from './components/registration.component';
import { ConfirmationComponent } from './components/confirmation.component';

const routes: Routes = [
  { path: '', component: RegistrationComponent },
  { path: 'confirm', component: ConfirmationComponent },
  { path: '**', redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
