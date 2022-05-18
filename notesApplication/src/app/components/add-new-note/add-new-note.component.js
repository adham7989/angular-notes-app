"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddNewNoteComponent = void 0;
const core_1 = require("@angular/core");
const note_model_1 = require("src/app/models/note.model");
let AddNewNoteComponent = class AddNewNoteComponent {
    constructor(notesService, router, route) {
        this.notesService = notesService;
        this.router = router;
        this.route = route;
        // instance of note Model
        this.note = new note_model_1.Note();
    }
    ngOnInit() {
        // we want to find out if we create new note or updating existing one .
        this.route.params.subscribe((params) => {
            this.note = new note_model_1.Note();
            if (params['title'] | params['body']) {
                this.note = this.notesService.getNotes(params['id']);
                this.noteId = params['id'];
                this.new = false;
            }
            else {
                this.new = true;
            }
        });
    }
    onSubmit(form) {
        if (this.note) {
            this.notesService.addNote(form.value);
            this.router.navigateByUrl('/');
        }
        else {
            this.notesService.updateNote(this.noteId, form.value.title, form.value.body);
        }
    }
    cancel() {
        this.router.navigateByUrl('/');
    }
};
AddNewNoteComponent = __decorate([
    (0, core_1.Component)({
        selector: 'app-add-new-note',
        templateUrl: './add-new-note.component.html',
        styleUrls: ['./add-new-note.component.css']
    })
], AddNewNoteComponent);
exports.AddNewNoteComponent = AddNewNoteComponent;
