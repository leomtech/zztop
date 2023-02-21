import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html'
})
export class HomePage {
  constructor() {}

  entity = {
    decimal: 0,
    numeric: 0,
    prBR: 0,
    enUS: 0,
    decimal_pr_BR: 0,
    numeric_en_US: 0
  };

  onClick() {
    console.log(JSON.stringify(this.entity))
  }
}
