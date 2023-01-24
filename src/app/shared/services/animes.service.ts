import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AnimesService {
  constructor(private http: HttpClient) {}

  // getProducts() {
  //   return this.http.get("https://my-json-server.typicode.com/franlindebl/shopeame-api-v2/products")
  // }

  //probando con sólo un get
  getAnimes(filter = "trending/anime?limit=6") {
    return this.http.get("https://kitsu.io/api/edge/" + filter)
  }

  // getAnimesWeek() {
  //   return this.http.get("https://kitsu.io/api/edge/trending/anime?limit=6")
  // }

  // getAnimesEmision() {
  //   return this.http.get("https://kitsu.io/api/edge/anime?filter%5Bstatus%5D=current&page%5Blimit%5D=6&sort=-user_count")
  // }

  // getAnimesEsperados() {
  //   return this.http.get("https://kitsu.io/api/edge/anime?filter%5Bstatus%5D=upcoming&page%5Blimit%5D=6&sort=-user_count")
  // }
 
  // getAnimesEvaluados() {
  //   return this.http.get("https://kitsu.io/api/edge/anime?page%5Blimit%5D=6&sort=-average_rating")
  // }

  // getAnimesPopulares() {
  //   return this.http.get("https://kitsu.io/api/edge/anime?page%5Blimit%5D=6&sort=-user_count")
  // }

  // getAnimesPage(filter:any){
  //   return this.http.get("https://kitsu.io/api/edge/anime?fields%5Banime%5D=slug%2CcanonicalTitle%2Ctitles%2CposterImage%2Cdescription%2CaverageRating%2CstartDate%2CpopularityRank%2CratingRank%2CyoutubeVideoId&page%5Boffset%5D=0&page%5Blimit%5D=20&sort=-user_count")
  // }

 
}
