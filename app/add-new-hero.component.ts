import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router-deprecated';
import { Hero } from './hero';
import { HeroService } from './hero.service';
import { AppComponent } from './app.component';

@Component({
	selector:'add-new-hero',
	templateUrl:'app/add-new-hero.component.html'
})

export class AddNewHeroComponent implements OnInit {			
	
	hero: Hero;
	totalHeroes: number;

	constructor(private heroService:HeroService){
		this.heroService.getHeroes().then(total => this.totalHeroes = total.length);
	}

	ngOnInit(){		
		this.hero = new Hero();
	}

	addNewHero() {		
		this.totalHeroes = this.heroService.addHero(this.hero);		
	}
} 