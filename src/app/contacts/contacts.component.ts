import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {
  nhom2='';
  constructor(private route: ActivatedRoute) { }
  characters = [
    'Finn the human',
    'Jake the dog',
    'Princess bubblegum',
    'Lumpy Space Princess',
    'Beemo1',
    'Beemo2'
  ]

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      
      this.nhom2 = params.get('nhom');
      
    });
  }


  }


