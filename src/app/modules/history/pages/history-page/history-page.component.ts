import { Component, OnInit } from '@angular/core';
import { SearchService } from '@modules/history/services/search.service';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'psf-history-page',
  templateUrl: './history-page.component.html',
  styleUrls: ['./history-page.component.css']
})
export class HistoryPageComponent implements OnInit {
  listResult$: Observable<any> = of([]);

  constructor(private searchService:SearchService) { }

  ngOnInit(): void {
  }

  reciveData(event:string):void {
    this.listResult$ = this.searchService.searchTracks$(event)
  }
}
