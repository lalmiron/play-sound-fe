import { Component, OnDestroy, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { TracksModule } from '@modules/tracks/tracks.module';
import { MultimediaService } from '@shared/services/multimedia.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'psf-media-player',
  templateUrl: './media-player.component.html',
  styleUrls: ['./media-player.component.css']
})
export class MediaPlayerComponent implements OnInit, OnDestroy {
  mockCover: TrackModel = {
    cover: 'https://los40es00.epimg.net/los40/imagenes/2017/11/28/album/1511885438_220718_1512034279_album_normal.jpg',
    album: 'Vogue',
    name: 'Madonna',
    url: 'http"//localhost/track.mp3',
    _id: 1
  }

  listObservers$: Array<Subscription> = []
  constructor(private multimediaService: MultimediaService) { }

  ngOnInit(): void {
    const observer1$: Subscription =this.multimediaService.callback.subscribe(
      (response: TrackModel) => { 
        console.log("Recibiendo cancion ", response);
      }
    )

    this.listObservers$ = [observer1$]
  }

  ngOnDestroy(): void {
    this.listObservers$.forEach(u => u.unsubscribe())
    
  }

}
