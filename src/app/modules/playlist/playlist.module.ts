import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlaylistRoutingModule } from './playlist-routing.module';
import { PlaylistPageComponent } from './pages/playlist-page/playlist-page.component';
import { SharedModule } from '@shared/shared.module';


@NgModule({
  declarations: [
    PlaylistPageComponent
  ],
  imports: [
    CommonModule,
    PlaylistRoutingModule,
    SharedModule
  ]
})
export class PlaylistModule { }
