import { Injectable } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { observable, Observable, of } from 'rxjs';
import * as dataRaw from '../../../data/track.model.json'

@Injectable({
  providedIn: 'root'
})
export class TrackService {
  dataTracksTrending$: Observable<TrackModel[]> = of([])
  dataTracksRandom$: Observable<any> = of([])

  constructor() {
    const {data}: any= (dataRaw as any).default
    this.dataTracksTrending$ = of(data)
    this.dataTracksRandom$ = new Observable((observer) => {
      const trackExample: TrackModel = {
        _id: 9,
        name:"vogue",
        album: "madonna",
        url: "http://",
        cover: "https://i.discogs.com/mD0y-Ti5vRtUn3PAz-uM_NGFWP5Rle8g2sA_IST7Vjc/rs:fit/g:sm/q:90/h:590/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTcxMTM3/LTEyMjM2NTM3NTQu/anBlZw.jpeg"
      }

      
      setTimeout( () => {
        observer.next([trackExample])
      }, 3500)
    })
  }
}
