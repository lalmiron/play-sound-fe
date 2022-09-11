import { Component, OnDestroy, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { TrackService } from '@modules/tracks/services/track.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'psf-tracks-page',
  templateUrl: './tracks-page.component.html',
  styleUrls: ['./tracks-page.component.css']
})
export class TracksPageComponent implements OnInit, OnDestroy {
  tracksTrending: Array<TrackModel> = []
  tracksRandom: Array<TrackModel> = []
  listObservers$: Array<Subscription> = []

  constructor(private trackService: TrackService) { }

  ngOnInit(): void {
    this.loadDataAll()
    this.loadDataRandom()
  }

  async loadDataAll() : Promise<any> {
    //const dataRaw = this.trackService.getAllTracks$()
    //const dataRaw = await this.trackService.getAllTracks$().toPromise()
    this.tracksTrending = await this.trackService.getAllTracks$().toPromise()
    
    
  }

  loadDataRandom(): void {
  this.trackService.getAllRandom$().subscribe(
      (response : TrackModel[]) => {
        this.tracksRandom = response
      },
      err => {
        alert('Error de conexion')
        console.log('Error de conexion')
      }
    )
  }

  ngOnDestroy(): void {

  }

  /* async loadDataAll(): Promise<any> {
    this.tracksTrending = await this.trackService.getAllTracks$().toPromise()

  } */
}
