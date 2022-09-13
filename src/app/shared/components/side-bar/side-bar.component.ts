import { Component, OnInit } from '@angular/core';

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


  constructor() { }

  ngOnInit(): void {
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
    //TODO recuperar del be
    this.customOptions = [
      {
        name: 'Mi Lista',
        router: ['/']
      }
    ]
  }

}
