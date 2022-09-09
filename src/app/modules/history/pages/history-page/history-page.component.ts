import { Component, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { SearchService } from '@modules/history/services/search.service';

@Component({
  selector: 'psf-history-page',
  templateUrl: './history-page.component.html',
  styleUrls: ['./history-page.component.css']
})
export class HistoryPageComponent implements OnInit {
  listResult:Array<TrackModel> = [];

  constructor(private searchService:SearchService) { }

  ngOnInit(): void {
  }

  reciveData(event:string):void {
    this.searchService.searchTracks$(event).subscribe({
      next:({data})=>{
        this.listResult = data;
      },
      error:(err)=>{
        console.log(err);
      }
    })
  }
}
