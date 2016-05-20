import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
//import { Observable } from 'rxjs/observable';
import 'rxjs/RX';


@Injectable()
export class HeroService {

	private endpoint_url: string = "http://www.pactscheme.com/apiCustom/Defaulter/GetDefaulter?search=h";	

	constructor(private http:Http){	
		this.http = http;	
	}

	getDefaulters(){						
		return this.http.get(this.endpoint_url).toPromise().then(res => res.json(), err => console.log(err));		
	}	

	getHeroes() {				
		return Promise.resolve(HEROES);
	}

	getHero(id: number) {
		return Promise.resolve(HEROES).then(heroes => heroes.filter(hero => hero.id === id)[0]);
	}

	// See the "Take it slow" appendix
	getHeroesSlowly() {
		return new Promise<Hero[]>(resolve =>
			setTimeout(() => resolve(HEROES), 3000) // 3 seconds
		);
	}

	addHero(hero:Hero){
		return HEROES.push(hero);
	}
}