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
  listObservers$: Array<Subscription> = []
  constructor(public multimediaService: MultimediaService) { }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.listObservers$.forEach(u => u.unsubscribe())
    
  }

}
