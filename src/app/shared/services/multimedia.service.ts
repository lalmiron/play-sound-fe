import { EventEmitter, Injectable } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { BehaviorSubject, Observable, Observer, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MultimediaService {
  callback:EventEmitter<any> = new EventEmitter<any>()

  public trackInfo$: BehaviorSubject<any> = new BehaviorSubject(undefined) 
  public audio!: HTMLAudioElement
  
  constructor() { 
  }

  private listenAllEvents(): void {
    
  }

  public setAudio(track: TrackModel): void {
    console.log("akakak");
    this.audio.src = track.url;
    this.audio.play()
  }
}
