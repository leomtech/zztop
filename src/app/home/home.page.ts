import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html'
})
export class HomePage implements OnInit {
  constructor() {}
  ngOnInit(): void {
    this.onChange();
  }
  
  lang = 'fr-FR';

  entity = { prop1: 0, prop2: 0, prop3: 1.234};

  jsonEntity = "";

  onChange() {
    this.jsonEntity = JSON.stringify(this.entity)
  }
}
