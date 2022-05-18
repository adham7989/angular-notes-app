"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MainLayoutComponent = void 0;
const core_1 = require("@angular/core");
const rxjs_1 = require("rxjs");
let MainLayoutComponent = class MainLayoutComponent {
    constructor() {
        this.observable = new rxjs_1.Observable(subscriber => {
            subscriber.next(1);
            subscriber.next(2);
            subscriber.next(3);
            setTimeout(() => {
                subscriber.next(4);
                subscriber.complete();
            }, 1000);
        });
    }
    ngOnInit() {
        console.log('just before subscribe');
        this.observable.subscribe((x) => console.log(`got value  ${x}`), (err) => console.error(`something wrong occurred :   ${err}`), () => console.log(`done`));
        console.log('just after subscribe');
    }
};
MainLayoutComponent = __decorate([
    (0, core_1.Component)({
        selector: 'app-main-layout',
        templateUrl: './main-layout.component.html',
        styleUrls: ['./main-layout.component.css']
    })
], MainLayoutComponent);
exports.MainLayoutComponent = MainLayoutComponent;
