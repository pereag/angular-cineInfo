import { Component, Input, OnInit, inject } from '@angular/core';
import { PersonService } from '../person.service';
import { switchMap } from 'rxjs';
import { ActivatedRoute, Params } from '@angular/router';
import { PersonDetails } from './person-details';
import { MoviePosterComponent } from "../../movie/movie-poster/movie-poster.component";
import { Movie } from '../../movie/movie';
import { Title } from '@angular/platform-browser';
import { ScrollComponent } from "../../comment/scroll/scroll.component";


@Component({
    selector: 'imbd-person-details',
    standalone: true,
    templateUrl: './person-details.component.html',
    styleUrl: './person-details.component.css',
    imports: [MoviePosterComponent, ScrollComponent]
})
export class PersonDetailsComponent implements OnInit {
  @Input() personDetails?: PersonDetails;
  @Input() personMovies?: Movie[];
  private personService = inject(PersonService);
  constructor(private route: ActivatedRoute, private titleService: Title) {}

  ngOnInit(): void {
    this.route.params.pipe(
      switchMap((params: Params) => {
        return this.personService.personDetails(params['id'])
      })
      ).subscribe((value: any) => {
        this.personDetails = value;
        this.titleService.setTitle( this.personDetails ?  `Person details | ${this.personDetails?.name}` : `person details`)
      });

      this.route.params.pipe(
        switchMap((params: Params) => {
          return this.personService.personMovie(params['id'])
        })
        ).subscribe((value) => {this.personMovies = value});
  }
}
