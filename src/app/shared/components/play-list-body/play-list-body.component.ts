import { Component, OnInit } from '@angular/core';
import * as dataRaw from '../../../data/track.model.json'
import { TrackModel } from './../../../core/models/tracks.model';

@Component({
  selector: 'psf-play-list-body',
  templateUrl: './play-list-body.component.html',
  styleUrls: ['./play-list-body.component.css']
})
export class PlayListBodyComponent implements OnInit {
  tracks: Array<TrackModel> = [];

  constructor() { }

  ngOnInit(): void {
    const { data }:any = (dataRaw as any).default;
    this.tracks = data;
  }

}
