import { Component, OnInit } from '@angular/core';
import { Observable, observable } from 'rxjs';
@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.css']
})
export class MainLayoutComponent implements OnInit {

  constructor() { }


  observable = new Observable(subscriber => {
    subscriber.next(1);
    subscriber.next(2);
    subscriber.next(3);
    setTimeout(() => {
      subscriber.next(4);
      subscriber.complete();
    }, 1000);
  });
   
  ngOnInit(): void {


    
  console.log('just before subscribe');
  this.observable.subscribe(
    (x ) =>  console.log(`got value  ${x}`) ,
    (err) =>  console.error(`something wrong occurred :   ${err}`),
    () =>  console.log(`done`)
  );
  console.log('just after subscribe');
  }


  }

