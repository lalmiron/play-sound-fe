import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { DashboardService } from '@modules/dashboard/services/dashboard.service';

@Component({
  selector: 'psf-load-song',
  templateUrl: './load-song.component.html',
  styleUrls: ['./load-song.component.css']
})
export class LoadSongComponent implements OnInit {
  @Output() callbackOpen: EventEmitter<any> = new EventEmitter<any>();
  open:boolean = true;

  formSong: FormGroup = new FormGroup({});
  track:any;

  constructor(private _dashboard:DashboardService) { }

  ngOnInit(): void {
    this.formSong = new FormGroup({
      name: new FormControl(),
      duration: new FormControl(),
      albumId: new FormControl(),
      artistId: new FormControl(),
      tracksrc: new FormControl()
    })
  }

  saveTrack(event:any):any{
    this.track = event.target.files[0] 
  }

  public sendTrack(): void {
    const{ name, duration, albumId,artistId } = this.formSong.value
    try {
      const formData = new FormData();
      formData.append('name',name);
      formData.append('duration',duration);
      formData.append('albumId',albumId);
      formData.append('artistId',artistId);
      formData.append('tracksrc',this.track);

      this._dashboard.sendTrack$(formData).subscribe({
        next:((res)=> {
          this.emitData();
          console.log(res);
        })
      })
      console.log('Enviando archivo...')
    } catch (error) {
      
    }
  }

  emitData(){
    this.callbackOpen.emit(false);
  }

}
