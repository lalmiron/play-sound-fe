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
  public timeElapsed$ : BehaviorSubject<string> = new BehaviorSubject('00:00')
  public timeRemaining$ : BehaviorSubject<string> = new BehaviorSubject('00:00')
  public playerStatus$ : BehaviorSubject<string> = new BehaviorSubject('paused')
  
  constructor() { 
    this.audio = new Audio()
    this.trackInfo$.subscribe(responseOk => {
      if (responseOk) {
        this.setAudio(responseOk)
      }
    })

    this.listenAllEvents()
    
  }

  private listenAllEvents(): void {
    this.audio.addEventListener('timeupdate', this.calculateTime, false)
    this.audio.addEventListener('playing', this.setPlayerStatus, false)
    this.audio.addEventListener('play', this.setPlayerStatus, false)
    this.audio.addEventListener('pause', this.setPlayerStatus, false)
    this.audio.addEventListener('ended', this.setPlayerStatus, false)
    
  }

  private setPlayerStatus = (state: any) => {

  }

  

  private calculateTime = () => {
    console.log('disparando evento')
    const { duration, currentTime } = this.audio 
    console.table([duration, currentTime])
    this.setTimeElapsed(currentTime)
    this.setTimeRemaining(currentTime, duration)
  }

  private setTimeElapsed(currentTime: number) : void {
    let seconds = Math.floor(currentTime % 60 )
    let minutes = Math.floor((currentTime / 60 ) % 60)

    const displaySeconds = (seconds < 10 ) ? `0${seconds}` : seconds
    const displayMinutes = (minutes < 10 ) ? `0${minutes}` : minutes

    const displayFormat = `${displayMinutes}:${displaySeconds}`
    this.timeElapsed$.next(displayFormat)
  }

  private setTimeRemaining(currentTime: number, duration: number) : void {
    let timeLeft = duration - currentTime;
    let seconds = Math.floor(timeLeft % 60 )
    let minutes = Math.floor((timeLeft / 60 ) % 60)

    const displaySeconds = (seconds < 10 ) ? `0${seconds}` : seconds
    const displayMinutes = (minutes < 10 ) ? `0${minutes}` : minutes

    const displayFormat = `-${displayMinutes}:${displaySeconds}`
    this.timeRemaining$.next(displayFormat)
  }

  public setAudio(track: TrackModel): void {
    console.log("akakak");
    this.audio.src = track.url;
    this.audio.play()
  }
}
