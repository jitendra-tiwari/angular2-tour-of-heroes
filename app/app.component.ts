	import { Component } from '@angular/core';
	
	import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';
	import { HeroesComponent } from './heroes.component';
	import { HeroService } from './hero.service';
	import { DashboardComponent } from './dashboard.component';
	import { HeroDetailComponent } from './hero-detail.component';
	import { AddNewHeroComponent } from './add-new-hero.component';


	@Component({
		selector:"my-app",
		template:`
			<h1>{{title}}</h1>
			<nav>
				<a [routerLink]="['Dashboard']">Dashboard</a>						
				<a [routerLink]="['Heroes']">Heroes</a>	
				<a [routerLink]="['AddNewHero']">Add New Hero</a>			
			</nav>
			<router-outlet></router-outlet>
		`,
		styleUrls:['app/app.component.css'],
		directives: [ROUTER_DIRECTIVES],
		providers:[
			ROUTER_PROVIDERS,
			HeroService
		]
	})

	@RouteConfig([						
			{
				path: '/dashboard',
				name: 'Dashboard',
				component:DashboardComponent,
				useAsDefault:true
			},
			{
				path:'/heroes',
				name:'Heroes',
				component:HeroesComponent
			},
			{
				path: '/detail/:id',
				name: 'HeroDetail',
				component: HeroDetailComponent
			},
			{
				path: '/add',
				name: 'AddNewHero',
				component: AddNewHeroComponent
			}
	])

	export class AppComponent {			
		title = "Tour of Heroes";				
	}
