import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-board-component',
  templateUrl: './display-board-component.component.html',
  styleUrls: ['./display-board-component.component.css']
})
export class DisplayBoardComponentComponent implements OnInit {

  constructor() { }
  @Input() userCount = 0;
  @Output() getUsersEvent = new EventEmitter();
  ngOnInit(): void {
  }
  getAllUsers() {
  this.getUsersEvent.emit('get all users');
  }

}
