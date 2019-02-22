import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import Property from './models/property';
import { PropertyService } from '@providers/property.service';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.scss']
})
export class PropertyListComponent implements OnInit {
  isLoaded: boolean = false;
  properties$: Observable<Property[]>;
  tableStyle: string = 'table table-striped';
  isDisabled: boolean = false;
  username: string;

  constructor(private propertyService: PropertyService) {}

  ngOnInit() {
    this.properties$ = this.propertyService.findAll();

    const loadSubscriber = this.properties$.subscribe(() => {
      this.isLoaded = true;
      loadSubscriber.unsubscribe();
    });
  }

  goToLink(url) {
    window.open(url, '_blank');
  }

}
