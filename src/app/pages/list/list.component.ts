import { AsyncPipe, NgFor } from '@angular/common';
import { Component, inject } from '@angular/core';
import { DeckService } from '../../services/deck.service';
import { RouterLink } from '@angular/router';
import { tap } from 'rxjs';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [AsyncPipe, RouterLink],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
})
export class ListComponent {
  private readonly deckService = inject(DeckService);
  decks$ = this.deckService.getDecks().pipe(tap(console.log));
  deleteDeck(id: string) {
    this.deckService.deleteDeck(id);
  }
}
