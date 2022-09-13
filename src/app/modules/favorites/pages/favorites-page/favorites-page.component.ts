import { Component, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { TrackService } from '@modules/tracks/services/track.service';

@Component({
  selector: 'psf-favorites-page',
  templateUrl: './favorites-page.component.html',
  styleUrls: ['./favorites-page.component.css']
})
export class FavoritesPageComponent implements OnInit {
  tracks:Array<TrackModel> = []

  constructor(private trackService: TrackService) { }

  ngOnInit(): void {
    this.loadFavoritesTracks();
  }

  loadFavoritesTracks(): void {
    this.trackService.getAllRandom$().subscribe(
      (response : TrackModel[]) => {
        this.tracks = response
      })
  }

}
