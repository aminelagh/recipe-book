import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'rb-home',
  template: `
    <div class="row">
      <div class="col-lg-6">
        <h1>Welcome To my recipe Book</h1>
      </div>
    </div>
  `,
  styles: []
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
