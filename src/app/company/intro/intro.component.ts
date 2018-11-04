import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit {

  brandImgs = [];

  constructor() { }

  ngOnInit() {
    for (let i = 1; i < 13; i++) {
      this.brandImgs.push(`../../../assets/31-logo${i}.png`);
    }
  }

}
