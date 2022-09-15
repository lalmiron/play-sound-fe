import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumBodyComponent } from './album-body.component';

describe('AlbumBodyComponent', () => {
  let component: AlbumBodyComponent;
  let fixture: ComponentFixture<AlbumBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlbumBodyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlbumBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
