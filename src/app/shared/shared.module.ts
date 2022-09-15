import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { MediaPlayerComponent } from './components/media-player/media-player.component';
import { HeaderUserComponent } from './components/header-user/header-user.component';
import { SectionGenericComponent } from './components/section-generic/section-generic.component';
import { CardPlayerComponent } from './components/card-player/card-player.component';
import { PlayListHeaderComponent } from './components/play-list-header/play-list-header.component';
import { PlayListBodyComponent } from './components/play-list-body/play-list-body.component';
import { ImgBrokenDirective } from './directives/img-broken.directive';
import { OrderListPipe } from './pipes/order-list.pipe';
import { DataPlaylistComponent } from './components/data-playlist/data-playlist.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AlbumHeaderComponent } from './components/album-header/album-header.component';
import { AlbumBodyComponent } from './components/album-body/album-body.component';

@NgModule({
  declarations: [
    SideBarComponent,
    MediaPlayerComponent,
    HeaderUserComponent,
    SectionGenericComponent,
    CardPlayerComponent,
    PlayListHeaderComponent,
    PlayListBodyComponent,
    ImgBrokenDirective,
    OrderListPipe,
    DataPlaylistComponent,
    AlbumHeaderComponent,
    AlbumBodyComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule
  ],
  exports: [
    SideBarComponent,
    MediaPlayerComponent,
    HeaderUserComponent,
    PlayListHeaderComponent,
    PlayListBodyComponent,
    SectionGenericComponent,
    CardPlayerComponent,
    ImgBrokenDirective,
    OrderListPipe,
    DataPlaylistComponent,
    AlbumHeaderComponent,
    AlbumBodyComponent
  ]
})
export class SharedModule { }
