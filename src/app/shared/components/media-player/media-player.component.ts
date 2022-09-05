import { Component, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';

@Component({
  selector: 'psf-media-player',
  templateUrl: './media-player.component.html',
  styleUrls: ['./media-player.component.css']
})
export class MediaPlayerComponent implements OnInit {
  mockCover: TrackModel = {
    cover: 'https://los40es00.epimg.net/los40/imagenes/2017/11/28/album/1511885438_220718_1512034279_album_normal.jpg',
    album: 'Vogue',
    name: 'Madonna',
    url: 'http"//localhost/track.mp3',
    _id: 1
  }

  constructor() { }

  ngOnInit(): void {
  }

}
