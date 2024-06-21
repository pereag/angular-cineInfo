import { Component, Input } from '@angular/core';
import { Credits } from './credits';
import { PersonComponent } from "../../person/person.component";
import { ScrollComponent } from "../../comment/scroll/scroll.component";

@Component({
    selector: 'imbd-movie-credits',
    standalone: true,
    templateUrl: './movie-credits.component.html',
    styleUrl: './movie-credits.component.css',
    imports: [PersonComponent, ScrollComponent]
})
export class MovieCreditsComponent {
  @Input() credits: Credits | undefined;
}
