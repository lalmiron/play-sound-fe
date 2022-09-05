import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'psf-tracks-page',
  templateUrl: './tracks-page.component.html',
  styleUrls: ['./tracks-page.component.css']
})
export class TracksPageComponent implements OnInit {
  mockTracksList = [
    {
      name: 'Madonna'
    },
    {
      name: 'Madonna'
    },
    {
      name: 'Madonna'
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
