import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-component',
  templateUrl: './user-component.component.html',
  styleUrls: ['./user-component.component.css']
})
export class UserComponentComponent implements OnInit {

  constructor() { }
  @Input()
users!: any[];
  ngOnInit(): void {
  }

}
