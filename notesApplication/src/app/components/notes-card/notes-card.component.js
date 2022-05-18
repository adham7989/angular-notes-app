"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotesCardComponent = void 0;
const core_1 = require("@angular/core");
let NotesCardComponent = class NotesCardComponent {
    constructor(notesService) {
        this.notesService = notesService;
        // @Input() link : string | undefined ;
        // we want to inform the parent component(note List) that x button is clicked 
        this.deleteEvent = new core_1.EventEmitter();
    }
    // notes : Array<Note> = [] ;
    ngOnInit() {
        // this.notes = this.notesService.getAll();
    }
    onXButtonClick() {
        this.deleteEvent.emit();
    }
};
__decorate([
    (0, core_1.Input)()
], NotesCardComponent.prototype, "title", void 0);
__decorate([
    (0, core_1.Input)()
], NotesCardComponent.prototype, "body", void 0);
__decorate([
    (0, core_1.Output)('delete')
], NotesCardComponent.prototype, "deleteEvent", void 0);
NotesCardComponent = __decorate([
    (0, core_1.Component)({
        selector: 'app-notes-card',
        templateUrl: './notes-card.component.html',
        styleUrls: ['./notes-card.component.css']
    })
], NotesCardComponent);
exports.NotesCardComponent = NotesCardComponent;
