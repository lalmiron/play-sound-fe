import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TrackModel } from '@core/models/tracks.model';
import { DashboardService } from '@modules/dashboard/services/dashboard.service';

@Component({
  selector: 'psf-album-tracks-page',
  templateUrl: './album-tracks-page.component.html',
  styleUrls: ['./album-tracks-page.component.css']
})
export class AlbumTracksPageComponent implements OnInit {
  addTrack:boolean = false;
  albumId:string = '';
  tracks: Array<TrackModel> = [];

  constructor(private router: ActivatedRoute, private _dashboard:DashboardService) { }

  ngOnInit(): void {
    this.router.paramMap.subscribe((resp:any)=>{
      this.albumId = resp.params.albumId;
      this.loadTracksFromAlbum(this.albumId);
    })
  }

  reciveData(data:boolean):void {
    this.addTrack = data;
  }

  loadTracksFromAlbum(albumid:string):void {
    this._dashboard.getTracksFromAlbum$(albumid).subscribe({
      next: (resp:any) => { 
        console.log(resp);
        
        this.tracks = resp.Tracks 
      }
    })
  }
}
