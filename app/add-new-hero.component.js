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
var hero_1 = require('./hero');
var hero_service_1 = require('./hero.service');
var AddNewHeroComponent = (function () {
    function AddNewHeroComponent(heroService) {
        var _this = this;
        this.heroService = heroService;
        this.heroService.getHeroes().then(function (total) { return _this.totalHeroes = total.length; });
    }
    AddNewHeroComponent.prototype.ngOnInit = function () {
        this.hero = new hero_1.Hero();
    };
    AddNewHeroComponent.prototype.addNewHero = function () {
        this.totalHeroes = this.heroService.addHero(this.hero);
    };
    AddNewHeroComponent = __decorate([
        core_1.Component({
            selector: 'add-new-hero',
            templateUrl: 'app/add-new-hero.component.html'
        }), 
        __metadata('design:paramtypes', [hero_service_1.HeroService])
    ], AddNewHeroComponent);
    return AddNewHeroComponent;
}());
exports.AddNewHeroComponent = AddNewHeroComponent;
//# sourceMappingURL=add-new-hero.component.js.map