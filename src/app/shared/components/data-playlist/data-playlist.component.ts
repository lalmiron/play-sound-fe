import { Component, OnInit, EventEmitter,Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { PlaylistService } from '@modules/playlist/services/playlist.service';

@Component({
  selector: 'psf-data-playlist',
  templateUrl: './data-playlist.component.html',
  styleUrls: ['./data-playlist.component.css']
})
export class DataPlaylistComponent implements OnInit {
  formPlaylist: FormGroup = new FormGroup({})

  constructor(private _playlistService: PlaylistService, private _location: Location) { }

  ngOnInit(): void {
    this.formPlaylist = new FormGroup({
      title : new FormControl('',[
        Validators.required,
        Validators.minLength(6)
      ]),
      description: new FormControl()
    })
  }

  sendDataPlaylist(): void {
    const {title, description} = this.formPlaylist.value
    this._playlistService.createPlaylist(title,description)
    .subscribe({
      next:(resp) => {
        this._playlistService.newPlaylist$.next(resp)
      }
    })
    
    this.backClicked()
  }

  backClicked(): void {
    this._location.back();
  }
}
