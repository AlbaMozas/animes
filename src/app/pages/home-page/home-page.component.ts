import { Component, OnDestroy, OnInit } from '@angular/core';
import { AnimeInterface } from 'src/app/shared/models/Anime.interface';
import { AnimesService } from 'src/app/shared/services/animes.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit, OnDestroy {

  //new
  products?: AnimeInterface[];

  animesEmision?: AnimeInterface[];
  animesWeek?: AnimeInterface[];
  animesEsperados?: AnimeInterface[];
  animesEvaluados?: AnimeInterface[];
  animesPopulares?: AnimeInterface[];
  
  
  constructor(private animesService: AnimesService) {}

  ngOnInit() {
    console.log('Me creo');

    //new
    this.animesService. getProducts().subscribe((res: any) => {
      this.products = res.data;
      console.log(this.products)
    });

    this.animesService. getAnimesWeek().subscribe((res: any) => {
      this.animesWeek = res.data;
      console.log(this.animesWeek)
    });

    this.animesService.  getAnimesEmision().subscribe((res: any) => {
      this.animesEmision = res.data;
      console.log(this.animesEmision)
    });

    this.animesService.  getAnimesEsperados().subscribe((res: any) => {
      this.animesEsperados = res.data;
      console.log(this.animesEsperados)
    });

    this.animesService.  getAnimesEvaluados().subscribe((res: any) => {
      this.animesEvaluados = res.data;
      console.log(this.animesEvaluados)
    });

    this.animesService.  getAnimesPopulares().subscribe((res: any) => {
      this.animesPopulares = res.data;
      console.log(this.animesPopulares)
    });


  }


  ngOnDestroy() {
    console.log('Me destruyo');
  }
}
