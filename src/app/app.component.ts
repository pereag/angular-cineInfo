import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PopularPageComponent } from './movie/popular-page/popular-page.component';

@Component({
  selector: 'imbd-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [RouterOutlet, PopularPageComponent],
})
export class AppComponent {}
