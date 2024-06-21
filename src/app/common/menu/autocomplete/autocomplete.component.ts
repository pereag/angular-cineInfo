import { Component, HostListener, inject, ElementRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SearchService } from '../../search.service';
import { Movie } from '../../../movie/movie';
import { MoviePosterComponent } from "../../../movie/movie-poster/movie-poster.component";
import { ScrollComponent } from "../../../comment/scroll/scroll.component";
import { Subject, debounceTime } from 'rxjs';

@Component({
    selector: 'imbd-autocomplete',
    standalone: true,
    templateUrl: './autocomplete.component.html',
    styleUrl: './autocomplete.component.css',
    imports: [FormsModule, MoviePosterComponent, ScrollComponent]
})
export class AutocompleteComponent {
  public inputValue: string = '';
  private searchService = inject(SearchService);
  public movies?: Movie[];
  public focus = false;
  private subject = new Subject<string>();
  
  constructor(private elementRef: ElementRef){
    this.subject.pipe(debounceTime(400)).subscribe((value) => {
      this.searchService.movies(value).subscribe((movies: Movie[]) => {
        this.movies = movies;
      }, () => { 
        this.movies = []
      });
    });
  }

  @HostListener('document:click', ['$event.target'])


  onClickOutside(target: EventTarget): void {
    if(!this.elementRef.nativeElement.contains(target)) {
      this.focus = false;
    }
  }

  onKeyUp() {
    this.subject.next(this.inputValue)
  }

  onGetData() {
  }

  switchFocus() {
    this.focus = true;
  }
}
