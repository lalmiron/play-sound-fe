import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumTracksPageComponent } from './album-tracks-page.component';

describe('AlbumTracksPageComponent', () => {
  let component: AlbumTracksPageComponent;
  let fixture: ComponentFixture<AlbumTracksPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlbumTracksPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlbumTracksPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
