import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-world',
  templateUrl: './world.component.html',
  styleUrls: ['./world.component.css']
})
export class WorldComponent implements OnInit {

  save = localStorage.getItem('world') || '';

  formData;

  constructor() { }

  ngOnInit() {
  }


  beforeunload = () => {
    if (this.formData) {
      localStorage.setItem('world', this.formData);
      return 'World Page: some data not complete yet, continue?'
    }
    return false;
  }

}