import { Component, OnInit } from '@angular/core';
import {of, from} from 'rxjs'
import {map, tap, take} from 'rxjs/operators'

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  name = 'Angular';

  ngOnInit() {
    of(2,4,6,8).subscribe(console.log)

    from([20,30,136,5]).pipe(
      tap(item => console.log(`emitted item ... ${item}`)),
      map(item => item * 2),
      map(item => item - 10),
      map(item => {
        if (item === 0) {
          throw new Error('zero detected')
        }
        return item
      }), 
      take(3) // 5 will be not taken
    ).subscribe(
      item => console.log(`resulting item... ${item}`),
      err => console.log(`error occured ${err}`),
      ()=> console.log('complete')
    )
    of(['Apple1', 'Apple2', 'Apple3']).subscribe(
      apple => console.log(`Apple was emitted ${apple}`),
      err => console.log(`error occured ${err}`),
      ()=> console.log('No more apples: completed')
    )

  }
}
