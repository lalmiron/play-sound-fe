import { Component, OnInit } from '@angular/core';
import { DashboardService } from '@modules/dashboard/services/dashboard.service';
import { AlbumModel } from '@core/models/album.model';

@Component({
  selector: 'psf-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.css']
})
export class DashboardPageComponent implements OnInit {
  albums: Array<AlbumModel> = [];

  constructor(private dashboarService: DashboardService) { }

  ngOnInit(): void {
    this.dashboarService.getAlbums$().subscribe({
      next: (data:Array<AlbumModel>) => this.albums = data,
      error: (resp) => console.log(resp)
    })
  }

}
