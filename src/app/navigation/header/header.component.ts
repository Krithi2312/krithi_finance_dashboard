import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  hide: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  close(){
    this.hide = true;
  }

}
