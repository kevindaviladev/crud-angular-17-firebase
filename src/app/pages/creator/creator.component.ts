import { Component, inject } from '@angular/core';
import { CardService } from '../../services/card.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-creator',
  standalone: true,
  imports: [NgFor],
  templateUrl: './creator.component.html',
  styleUrl: './creator.component.scss',
})
export class CreatorComponent {
  private readonly cardService = inject(CardService);
  cards$ = this.cardService.getCards();
}
