import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DepositoryRoutingModule } from './depository-routing.module';

import { SharedModule } from './../../shared/shared.module';
import { DepositoryPageComponent } from './pages/depository-page/depository-page.component';

@NgModule({
  declarations: [
    DepositoryPageComponent
  ],
  imports: [
    CommonModule,
    DepositoryRoutingModule,
    SharedModule
  ]
})
export class DepositoryModule { }
