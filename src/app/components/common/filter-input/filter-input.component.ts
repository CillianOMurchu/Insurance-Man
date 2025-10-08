import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'filter-app-input',
  templateUrl: './filter-input.component.html',
  styleUrls: ['./filter-input.component.scss']
})
export class FilterInputComponent implements OnInit {
  @Input() name = '';
  @Input()
  control: FormControl;
  @Output() applyFilter = new EventEmitter();

  constructor() {}

  ngOnInit() {}
}
