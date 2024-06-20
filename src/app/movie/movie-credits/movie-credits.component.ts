import { Component, Input } from '@angular/core';
import { Credits } from './credits';
import { PersonComponent } from "../../person/person.component";

@Component({
    selector: 'imbd-movie-credits',
    standalone: true,
    templateUrl: './movie-credits.component.html',
    styleUrl: './movie-credits.component.css',
    imports: [PersonComponent]
})
export class MovieCreditsComponent {
  @Input() credits: Credits | undefined;
}
