import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { CardAPIResponse } from '../models/card.interface';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CardService {
  private readonly http = inject(HttpClient);

  getCards(cardName: string) {
    const params = new HttpParams().set('fname', cardName);
    return this.http
      .get<CardAPIResponse>(
        'https://db.ygoprodeck.com/api/v7/cardinfo.php?num=5&offset=5',
        { params }
      )
      .pipe(map((res) => res.data));
  }
}
