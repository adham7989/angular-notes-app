import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Note } from 'src/app/models/note.model';
import { NotesService } from 'src/app/services/notes.service';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.css'],
  
  animations : [
    trigger('itemAnim', [
      transition('void => *' ,[
        style({
          height : 0,
          opacity : 0 ,
          transform : 'scale(0.85)',
          'margin-bottom':0,

          paddingTop : 0 ,
          paddingBottom : 0 ,
          paddingRight : 0 ,
          paddingLeft : 0 ,
        }),

        animate('50ms' , style({
          height : '*' ,
          'margin-bottom' : '*',
          paddingTop : '*' ,
          paddingBottom : '*' ,
          paddingleft : '*' ,
          paddingRight : '*' ,
        })),
        animate(68)
      ])
    ])
  ]
})
export class NoteListComponent implements OnInit {

  constructor( private notesService : NotesService) { }

  notes : Array<Note> = [] ;
  filterdNotes : Array<Note> = new Array<Note>();
  

   title : string | undefined ;
   body : string | undefined  ;
   link : string | undefined ;


  ngOnInit(): void {

    this.displayAllNotes();
    this.filterdNotes = this.notes ;

  }


  displayAllNotes(){
    this.notes = this.notesService.getAll();
  }

  
  deleteNote( id : number){
    this.notesService.deleteNote(id);

  }

  filter( query : string ){

    let allResults : Note[] = new Array<Note>() ;
    
    // 1- remove spaces and any string as a one pattern 
    query = query.toLowerCase().trim();
    
    // 2- split line into words 
    let terms : string[] = query.split(' '); // split with spaces 
    
    
    // 3- call remove duplication method 
    terms = this.removeDuplicates(terms);
    
    
    // 4- compile all relevant search query into all results 
    terms.forEach( term => {
      let results : Note[] = this.relevantNotes(term);
      
      // append results to allresults array 
      allResults = [...allResults , ...results];
    } );

    let uniqueResults = this.removeDuplicates(allResults);
    this.filterdNotes = uniqueResults;

  }


  removeDuplicates( arr : Array<any> ) : Array<any>{

    // using set as it doesn't store duplicated valus 
    let uniqueResults : Set<any> = new Set<any>();

    // loop through the array To adding items to the set 
    arr.forEach( elem => uniqueResults.add(elem));

    // return array from the  set
    return Array.from(uniqueResults);

  }


  relevantNotes( query : string) : Array<Note>{
    query = query.toLowerCase().trim();
    let relevantNotes = this.notes.filter( note=> {
      if( note.title && note.title.toLowerCase().includes(query) || 
          note.body && note.body.toLowerCase().includes(query))
      {
        return true ;
      }
      else {
        return false ;
      }
    })

    return relevantNotes ;
  }



}
