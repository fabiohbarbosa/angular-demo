import { Component, OnInit } from '@angular/core';
import Property from './models/property';
import { PropertyService } from '../property.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-my-first-component',
  templateUrl: './my-first-component.component.html',
  styleUrls: ['./my-first-component.component.scss']
})
export class MyFirstComponentComponent implements OnInit {
  properties: Property[];
  properties$: Observable<Property[]>;
  tableStyle: string = 'table table-striped';
  isDisabled: boolean = false;
  username: string;

  constructor(private propertyService: PropertyService) {
  }

  ngOnInit() {
    this.propertyService.search().subscribe(props => {
      this.properties = props;
    })
  }

  clickMe() {
    alert('I\'m event bind');
  }

  disableMe() {
    this.isDisabled = true;
  }

  usernameChange(value) {
    console.log(`You are typing '${value}'...`);
  }

  goToLink(url) {
    window.open(url, '_blank');
  }

}
