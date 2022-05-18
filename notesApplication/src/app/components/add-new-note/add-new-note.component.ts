import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { from } from 'rxjs';
import { Note } from 'src/app/models/note.model';
import { NotesService } from 'src/app/services/notes.service';

@Component({
  selector: 'app-add-new-note',
  templateUrl: './add-new-note.component.html',
  styleUrls: ['./add-new-note.component.css']
})
export class AddNewNoteComponent implements OnInit {

  constructor(private notesService : NotesService , private router : Router , private route : ActivatedRoute) { }
  
  // instance of note Model
  note: Note = new Note();

  //  to hold the id of note
  noteId! : number ;

  // to check add or updating
  new!: boolean ;
  
  
  ngOnInit(): void {

    // we want to find out if we create new note or updating existing one .


    this.route.params.subscribe( (params : Params) => {
      this.note = new Note();  
      if(params['title'] | params['body']  ){
        this.note = this.notesService.getNotes(params['id']);
        this.noteId =  params['id'];
        this.new = false ;
      }
      else{
        this.new = true ;
      }
    })

}

  onSubmit(form : NgForm){
    
    
    if(this.note){
      this.notesService.addNote(form.value);
      this.router.navigateByUrl('/');
    }
    else {
      this.notesService.updateNote(this.noteId , form.value.title , form.value.body )
    }
    
}

  cancel(){
    this.router.navigateByUrl('/');

  }
  
}
