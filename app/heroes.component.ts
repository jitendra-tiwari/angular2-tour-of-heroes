import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router-deprecated';
import { Hero } from './hero';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroService } from './hero.service';

@Component({
  selector: 'my-heroes',
  templateUrl:'app/heroes.component.html' ,
  styleUrls:['app/heroes.component.css'],
  directives:[HeroDetailComponent],
})

export class HeroesComponent implements OnInit { 

	title = 'Tour of Heros';		
	heroes: Hero[];
	selectedHero : Hero;

	constructor(private heroService:HeroService, private router:Router){}
	
	onSelect(hero: Hero) { this.selectedHero = hero; }

	getHeroes(){		
		this.heroService.getHeroes().then(h => this.heroes = h);
	}

	getHeroesSlowly(){
		this.heroService.getHeroesSlowly().then(h => this.heroes = h);
	}

	getDefaulters(){
		this.heroService.getDefaulters().then(d => this.title = d.message);
	}

	ngOnInit(){
		this.getHeroes();
		//this.getHeroesSlowly();
		this.getDefaulters();
	}

  gotoDetail(){
    this.router.navigate(['HeroDetail', { id: this.selectedHero.id }]);
  }
}




