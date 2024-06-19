import { Component, Input } from '@angular/core';

@Component({
  selector: 'imbd-article',
  standalone: true,
  imports: [],
  templateUrl: './article.component.html',
  styleUrl: './article.component.css',
})
export class ArticleComponent {
  @Input() title = '';
  @Input() content = '';
}
