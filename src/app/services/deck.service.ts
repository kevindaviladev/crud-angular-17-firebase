import { Injectable, inject } from '@angular/core';
import {
  Firestore,
  addDoc,
  collection,
  collectionData,
  deleteDoc,
  doc,
  getDoc,
  updateDoc,
} from '@angular/fire/firestore';
import { Deck } from '../models/deck.interface';
import { Observable, from, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DeckService {
  private firestore = inject(Firestore);
  private deckCollection = collection(this.firestore, 'decks');

  addDeck(deck: Deck) {
    return of(addDoc(this.deckCollection, deck));
  }

  getDecks() {
    return collectionData(this.deckCollection, { idField: 'id' }) as Observable<
      Deck[]
    >;
  }

  getDeck(id: string) {
    return from(getDoc(doc(this.firestore, 'decks', id))).pipe(
      map((snapshot) => snapshot.data() as Deck)
    );
  }

  updateDeck(deck: Deck, id: string) {
    const docRef = doc(this.firestore, 'decks', id);
    updateDoc(docRef, { ...deck });
  }

  deleteDeck(id: string) {
    const docRef = doc(this.firestore, 'decks', id);
    deleteDoc(docRef);
  }
}
