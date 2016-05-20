"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_deprecated_1 = require('@angular/router-deprecated');
var heroes_component_1 = require('./heroes.component');
var hero_service_1 = require('./hero.service');
var dashboard_component_1 = require('./dashboard.component');
var hero_detail_component_1 = require('./hero-detail.component');
var add_new_hero_component_1 = require('./add-new-hero.component');
var AppComponent = (function () {
    function AppComponent() {
        this.title = "Tour of Heroes";
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: "my-app",
            template: "\n\t\t\t<h1>{{title}}</h1>\n\t\t\t<nav>\n\t\t\t\t<a [routerLink]=\"['Dashboard']\">Dashboard</a>\t\t\t\t\t\t\n\t\t\t\t<a [routerLink]=\"['Heroes']\">Heroes</a>\t\n\t\t\t\t<a [routerLink]=\"['AddNewHero']\">Add New Hero</a>\t\t\t\n\t\t\t</nav>\n\t\t\t<router-outlet></router-outlet>\n\t\t",
            styleUrls: ['app/app.component.css'],
            directives: [router_deprecated_1.ROUTER_DIRECTIVES],
            providers: [
                router_deprecated_1.ROUTER_PROVIDERS,
                hero_service_1.HeroService
            ]
        }),
        router_deprecated_1.RouteConfig([
            {
                path: '/dashboard',
                name: 'Dashboard',
                component: dashboard_component_1.DashboardComponent,
                useAsDefault: true
            },
            {
                path: '/heroes',
                name: 'Heroes',
                component: heroes_component_1.HeroesComponent
            },
            {
                path: '/detail/:id',
                name: 'HeroDetail',
                component: hero_detail_component_1.HeroDetailComponent
            },
            {
                path: '/add',
                name: 'AddNewHero',
                component: add_new_hero_component_1.AddNewHeroComponent
            }
        ]), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map