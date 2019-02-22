import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, retry } from 'rxjs/operators';

import { environment } from '../../environments/environment';
import { getFromIndex as getTopologyFromIndex } from '../components/property/models/topology';
import { getFromIndex as getStatusFromIndex } from '../components/property/models/status';

import Property from '../components/property/models/property';

@Injectable({
  providedIn: 'root'
})
export class PropertyService {
  path: string = `${environment.api}/property`;

  constructor(private http: HttpClient) {
  }

  findAll(): Observable<Property[]> {
    const observable = this.http.get<Property[]>(this.path);
    const propMap = map((props: Property[]) => props.map(p => this.adapt(p)));

    return observable.pipe(propMap, retry(3));
  }

  private adapt(p): Property {
    return new Property(
      p._id,
      p.title,
      p.url,
      p.price,
      new Date(p.createAt),
      getTopologyFromIndex(p.topology),
      getStatusFromIndex(p.status)
    );
  }
}
