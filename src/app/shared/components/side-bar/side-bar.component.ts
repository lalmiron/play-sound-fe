import { Component, Input, OnInit } from '@angular/core';
import { PlaylistService } from '@modules/playlist/services/playlist.service';
import { PlaylistsService } from '@modules/depository/services/playlists.service';

@Component({
  selector: 'psf-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

  linksMenu : Array<any> = [
    {
      name:'Home',
      icon:'uil-estate'
    },
    {
      name:'Buscar',
      icon:'uil-estate'
    },
  ]

  mainMenu: {
    defaultOptions: Array<any>,
    accessLink: Array<any>
  } = { defaultOptions: [], accessLink:[] }

  customOptions: Array<any> = []


  constructor(private playlistService: PlaylistService, private playlistUser:PlaylistsService) { }

  ngOnInit(): void {
    this.playlistService.newPlaylist$.subscribe({
      next: (resp) => {
        this.playlistUser.getUserPlaylist$().subscribe({
          next:(resp) => { 
            this.customOptions = resp.map( (r:any) => {
              return {
                name: r.name,
                router: ['/playlist', r.id]
              }
            })
           }
        })
      }
    })
    this.mainMenu.defaultOptions = [
      {
        name: 'Home',
        icon: 'uil uil-estate',
        router: ['/']
      },
      {
        name: 'Buscar',
        icon: 'uil uil-search',
        router: ['/', 'history']
      },
      {
        name: 'Tu Biblioteca',
        icon: 'uil uil-chart',
        router: ['/','depository']
      },
    ]
    this.mainMenu.accessLink = [
      {
        name: 'Crear Lista',
        icon: 'uil-plus-square',
        router:['/','data']
      },
      {
        name: 'Canciones que te gustan',
        icon: 'uil-heart-medical',
        router:['/','favorites']
      }
    ]
  }

}
