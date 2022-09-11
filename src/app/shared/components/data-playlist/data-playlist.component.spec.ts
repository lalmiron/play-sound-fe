import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataPlaylistComponent } from './data-playlist.component';

describe('DataPlaylistComponent', () => {
  let component: DataPlaylistComponent;
  let fixture: ComponentFixture<DataPlaylistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataPlaylistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataPlaylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
