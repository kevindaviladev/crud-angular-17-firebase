import { Component, inject } from '@angular/core';
import { AsyncPipe, JsonPipe, NgFor } from '@angular/common';
import { CardService } from '../../services/card.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Observable, debounceTime } from 'rxjs';
import { Card } from '../../models/card.interface';
import { DeckService } from '../../services/deck.service';
import { Deck } from '../../models/deck.interface';

@Component({
  selector: 'app-creator',
  standalone: true,
  imports: [AsyncPipe, ReactiveFormsModule, JsonPipe],
  templateUrl: './creator.component.html',
  styleUrl: './creator.component.scss',
})
export class CreatorComponent {
  private readonly cardService = inject(CardService);
  private readonly deckService = inject(DeckService);

  form = new FormGroup({
    name: new FormControl(''),
    description: new FormControl(''),
    author: new FormControl(''),
    deck: new FormControl<string[]>([], { nonNullable: true }),
  });

  search = new FormControl('');
  cards$!: Observable<Card[]>;

  ngOnInit() {
    this.search.valueChanges.pipe(debounceTime(1000)).subscribe((res) => {
      if (res) {
        this.cards$ = this.cardService.getCards(res);
      }
    });

    this.cardService.getCards('frog').subscribe((res) => {
      console.log(res);
    });
  }

  addCard(card: Card) {
    this.form.controls.deck.setValue([
      ...this.form.controls.deck.value,
      card.card_images[0].image_url,
    ]);
  }

  saveDeck() {
    this.deckService
      .addDeck(this.form.value as Deck)
      .subscribe((res) => console.log(res));
  }
}
