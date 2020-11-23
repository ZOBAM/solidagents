import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-check-name',
  templateUrl: './check-name.component.html',
  styleUrls: ['./check-name.component.scss']
})
export class CheckNameComponent implements OnInit {
  @Input() studentName;
  @Output() notify = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
}
