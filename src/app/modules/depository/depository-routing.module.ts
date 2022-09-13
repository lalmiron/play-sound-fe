import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepositoryPageComponent } from './pages/depository-page/depository-page.component';

const routes: Routes = [
  {
    path: '',
    component: DepositoryPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DepositoryRoutingModule { }
