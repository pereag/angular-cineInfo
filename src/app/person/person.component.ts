import { Component,Input } from '@angular/core';
import { Crew } from '../movie/movie-credits/crew';
import { Cast } from '../movie/movie-credits/cast';
import { Person } from './person';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'imbd-person',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './person.component.html',
  styleUrl: './person.component.css'
})
export class PersonComponent  {
  @Input()
  person?: Person;

  getRole(): string | void {
  if(this.person instanceof Crew) {
    return this.person.job
  } else if (this.person instanceof Cast) {
    return this.person.character;
  }
  }
}

