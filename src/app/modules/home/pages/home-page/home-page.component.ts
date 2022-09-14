import { Component, OnInit } from '@angular/core';
import { PlaylistsService } from '@modules/depository/services/playlists.service';
@Component({
  selector: 'psf-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
}
