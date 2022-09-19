import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'psf-album-tracks-page',
  templateUrl: './album-tracks-page.component.html',
  styleUrls: ['./album-tracks-page.component.css']
})
export class AlbumTracksPageComponent implements OnInit {
  addTrack:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  reciveData(data:boolean):void {
    this.addTrack = data;
  }
}
