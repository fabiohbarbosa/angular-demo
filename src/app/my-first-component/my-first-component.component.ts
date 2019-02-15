import { Component, OnInit } from '@angular/core';
import Status from './models/status';
import Topology from './models/topology';
import Property from './models/property';

@Component({
  selector: 'app-my-first-component',
  templateUrl: './my-first-component.component.html',
  styleUrls: ['./my-first-component.component.scss']
})
export class MyFirstComponentComponent implements OnInit {
  properties: Property[];
  tableStyle: string = 'table table-striped';
  isDisabled: boolean = false;
  username: string;

  ngOnInit() {
    this.properties = [
      { title: 'Property 1', topology: Topology.T2, price: 650, createAt: new Date(), status: Status.PENDING },
      { title: 'Property 1.1', topology: Topology.T2, price: 650, createAt: new Date(), status: Status.PENDING },
      { title: 'Property 2', topology: Topology.T3, price: 650, createAt: new Date(), status: Status.PENDING },
      { title: 'Property 3', topology: Topology.T4, price: 650, createAt: new Date(), status: Status.PENDING },
    ]
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

}
