import { Component, OnDestroy, OnInit } from '@angular/core';
import { AnimeInterface } from 'src/app/shared/models/Anime.interface';
import { AnimesService } from 'src/app/shared/services/animes.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit, OnDestroy {

  
  // products?: AnimeInterface[];

  // animesEmision?: AnimeInterface[];
  // animesWeek?: AnimeInterface[];
  // animesEsperados?: AnimeInterface[];
  // animesEvaluados?: AnimeInterface[];
  // animesPopulares?: AnimeInterface[];

  //new
  animes :any= {};
  constructor(private animesService: AnimesService) {}

  ngOnInit() {
    console.log('Me creo');
    this.getAnimes('trending/anime?limit=6', 'animesTrending');
    this.getAnimes(
      'anime?filter%5Bstatus%5D=current&page%5Blimit%5D=6&sort=-user_count',
      'animesPopEm'
    );
    this.getAnimes(
      'anime?filter%5Bstatus%5D=upcoming&page%5Blimit%5D=6&sort=-user_count',
      'animesMostWanted'
    );
    this.getAnimes('anime?page%5Blimit%5D=6&sort=-average_rating', 'animesAvg');
    this.getAnimes('anime?page%5Blimit%5D=6&sort=-user_count', 'animesPop');
  }

  getAnimes(filter: string, animesVarKey: any) {
    this.animesService.getAnimes(filter).subscribe((res: any) => {
      this.animes[animesVarKey] = res.data.map((anime: any) => ({
        attributes: {
          ...anime.attributes,
          averageRating: Number(anime.attributes.averageRating) / 10,
        },
      }));
    });
  }
  

  // ngOnInit() {
  //   console.log('Me creo');

  //   //new
  //   this.animesService. getProducts().subscribe((res: any) => {
  //     this.products = res.data;
  //     console.log(this.products)
  //   });

  //   this.animesService. getAnimesWeek().subscribe((res: any) => {
  //     this.animesWeek = res.data;
  //     console.log(this.animesWeek)
  //   });

  //   this.animesService.  getAnimesEmision().subscribe((res: any) => {
  //     this.animesEmision = res.data;
  //     console.log(this.animesEmision)
  //   });

  //   this.animesService.  getAnimesEsperados().subscribe((res: any) => {
  //     this.animesEsperados = res.data;
  //     console.log(this.animesEsperados)
  //   });

  //   this.animesService.  getAnimesEvaluados().subscribe((res: any) => {
  //     this.animesEvaluados = res.data;
  //     console.log(this.animesEvaluados)
  //   });

  //   this.animesService.  getAnimesPopulares().subscribe((res: any) => {
  //     this.animesPopulares = res.data;
  //     console.log(this.animesPopulares)
  //   });


  // }


  ngOnDestroy() {
    console.log('Me destruyo');
  }
}
