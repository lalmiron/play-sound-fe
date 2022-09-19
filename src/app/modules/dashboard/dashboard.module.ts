import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { SharedModule } from '@shared/shared.module';
import { AlbumTracksPageComponent } from './pages/album-tracks-page/album-tracks-page.component';
import { LoadSongComponent } from './components/load-song/load-song.component';


@NgModule({
  declarations: [
    DashboardPageComponent,
    AlbumTracksPageComponent,
    LoadSongComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class DashboardModule { }
