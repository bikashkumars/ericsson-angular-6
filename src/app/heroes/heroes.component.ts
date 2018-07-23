import { Component, OnInit } from '@angular/core';
import { Hero } from '../model/hero';
import {HEROES } from '../constant/mock-heroes'

import { HeroService } from '../services/hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];
  selectedHero: Hero;
  githubData: any;

  constructor(private heroService: HeroService) { }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }

  getCis(): any {
    this.heroService.getDataFromCis()
      .subscribe(data => this.githubData = data);
  }

  ngOnInit() {
    this.getHeroes();
    this.getCis();
  }

  onSelect(hero: Hero) {
    this.selectedHero = hero;
  }



}
