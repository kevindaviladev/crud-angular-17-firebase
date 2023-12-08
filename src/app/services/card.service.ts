import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CardService {
  private readonly http = inject(HttpClient);

  getCards(){
    return this.http.get("https://db.ygoprodeck.com/api/v7/cardinfo.php?num=5&offset=0")
  }
}
