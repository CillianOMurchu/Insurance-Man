import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavouritesModalComponent } from './favourites-modal.component';

describe('FavouritesModalComponent', () => {
  let component: FavouritesModalComponent;
  let fixture: ComponentFixture<FavouritesModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavouritesModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavouritesModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
