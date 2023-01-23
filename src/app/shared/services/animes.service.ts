import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AnimesService {
  constructor(private http: HttpClient) {}

  getProducts() {
    return this.http.get("https://my-json-server.typicode.com/franlindebl/shopeame-api-v2/products")
  }

  getAnimesWeek() {
    return this.http.get("https://kitsu.io/api/edge/trending/anime?limit=6")
  }

  getAnimesEmision() {
    return this.http.get("https://kitsu.io/api/edge/anime?filter%5Bstatus%5D=current&page%5Blimit%5D=6&sort=-user_count")
  }

  getAnimesEsperados() {
    return this.http.get("https://kitsu.io/api/edge/anime?filter%5Bstatus%5D=upcoming&page%5Blimit%5D=6&sort=-user_count")
  }
 
  getAnimesEvaluados() {
    return this.http.get("https://kitsu.io/api/edge/anime?page%5Blimit%5D=6&sort=-average_rating")
  }

  getAnimesPopulares() {
    return this.http.get("https://kitsu.io/api/edge/anime?page%5Blimit%5D=6&sort=-user_count")
  }

  // postAnime() {}
  // putAnime() {}
}
