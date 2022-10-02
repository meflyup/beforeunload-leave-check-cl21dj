import { Component, OnInit } from '@angular/core';
import { BEFORE_UNLOAD_FN } from '../../beforeunload';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {

  save = localStorage.getItem('hello') || '';

  formData;

  constructor() { }

  ngOnInit() {
  }


  beforeunload = () => {
    if (this.formData) {
      localStorage.setItem('hello', this.formData);
      return 'Hello Page: some data not complete yet, continue?'
    }
    return false;
  }


}