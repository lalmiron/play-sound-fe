import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'psf-play-list-header',
  templateUrl: './play-list-header.component.html',
  styleUrls: ['./play-list-header.component.css']
})
export class PlayListHeaderComponent implements OnInit {
  @Input() title: string = '';

  constructor() { }

  ngOnInit(): void {
  }
}
