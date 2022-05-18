import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddNewNoteComponent } from './components/add-new-note/add-new-note.component';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { NoteListComponent } from './components/note-list/note-list.component';
import { NotesCardComponent } from './components/notes-card/notes-card.component';
// import { NotesCardComponent } from './components/notes-card/notes-card.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(
    [
      {path : '' , component : MainLayoutComponent , children :[
        {path : '' , component : NoteListComponent},
        {path : '' , component : NotesCardComponent},
        {path : 'new' , component : AddNewNoteComponent},
        {path : ':id' , component : AddNewNoteComponent},
   

      ]
    },
    ]
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
