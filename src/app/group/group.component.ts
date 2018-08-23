import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.scss']
})
export class GroupComponent implements OnInit {
  groups = [
    { id: 1, nhom: 'be'  },
    { id: 2, nhom: 'm' },
  ];
  constructor() { }

  ngOnInit() {
  }

}
