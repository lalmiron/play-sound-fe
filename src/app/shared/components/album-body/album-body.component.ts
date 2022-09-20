import { Component, Input, OnInit } from '@angular/core';
import { AlbumModel } from '@core/models/album.model';

@Component({
  selector: 'psf-album-body',
  templateUrl: './album-body.component.html',
  styleUrls: ['./album-body.component.css']
})
export class AlbumBodyComponent implements OnInit {
  @Input() albums:Array<AlbumModel> = [];

  constructor() { }

  ngOnInit(): void {
  }

}
