import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieCreditsComponent } from './movie-credits.component';
import { ScrollComponent } from '../../comment/scroll/scroll.component';

describe('MovieCreditsComponent', () => {
  let component: MovieCreditsComponent;
  let fixture: ComponentFixture<MovieCreditsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MovieCreditsComponent, ScrollComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MovieCreditsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
