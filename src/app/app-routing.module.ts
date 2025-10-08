import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from 'app/layouts/home/home.component';
import { InsuranceManagerComponent } from 'app/layouts/insurance-manager/insurance-manager.component';
import { NoAccessComponent } from 'app/layouts/no-access/no-access.component';
import { AuthGuard } from './services/auth.guard';
const routes: Routes = [
  { path: 'home', component: HomeComponent },
  {
    path: 'insurance-manager',
    component: InsuranceManagerComponent,
    // canActivate: [AuthGuard],
  },
  { path: 'no-access', component: NoAccessComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
