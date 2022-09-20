import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { AlbumTracksPageComponent } from './pages/album-tracks-page/album-tracks-page.component';
import { DataPlaylistComponent } from '@shared/components/data-playlist/data-playlist.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardPageComponent
  },
  {
    path: 'album',
    component: DataPlaylistComponent
  },
  {
    path: ':albumId',
    component: AlbumTracksPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
