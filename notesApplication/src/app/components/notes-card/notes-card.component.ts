import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NotesService } from 'src/app/services/notes.service';

@Component({
  selector: 'app-notes-card',
  templateUrl: './notes-card.component.html',
  styleUrls: ['./notes-card.component.css']
})
export class NotesCardComponent implements OnInit {

  constructor(private notesService : NotesService) { }


  @Input() title : string | undefined ;
  @Input() body : string | undefined  ;
  // @Input() link : string | undefined ;

  // we want to inform the parent component(note List) that x button is clicked 
  @Output('delete') deleteEvent : EventEmitter<void> = new EventEmitter<void>();
  

  // notes : Array<Note> = [] ;

  ngOnInit(): void {
    // this.notes = this.notesService.getAll();
    
  

  }


  onXButtonClick(){

    this.deleteEvent.emit();
  }

}



