import { Component, OnInit } from '@angular/core';
import { PlaylistsService } from '@modules/depository/services/playlists.service';
@Component({
  selector: 'psf-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  playlistMenu: Array<any> = []

  constructor(private playlists:PlaylistsService) { }

  ngOnInit(): void {
    this.playlists.getUserPlaylist$().subscribe(
      {
        next: (resp:any)=>{
          this.playlistMenu = resp.map({
            name: resp.name,
            router:['/playlist',resp.id]
          })
        }
      }
    )
  }

}
