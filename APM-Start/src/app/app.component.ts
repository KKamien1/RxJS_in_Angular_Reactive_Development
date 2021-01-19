import { Component, OnInit } from '@angular/core';
import {of, from} from 'rxjs'

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  name = 'Angular';

  ngOnInit() {
    of(2,4,6,8).subscribe(console.log)

    from([20,30,136]).subscribe(
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
