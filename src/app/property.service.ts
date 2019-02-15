import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { retry, map } from 'rxjs/operators';

import Property from './my-first-component/models/property';
import { getFromIndex as getTopologyFromIndex } from './my-first-component/models/topology';
import { getFromIndex as getStatusFromIndex } from './my-first-component/models/status';

@Injectable({
  providedIn: 'root'
})
export class PropertyService {
  url: string = environment.api;
  path: string = 'property';

  constructor(private http: HttpClient) {}

  search(): Observable<Property[]> {
    const url = `${this.url}/${this.path}`;

    return this.http.get(url).pipe(
      map<any, any>(res => res.map((p: any) => this.adapt(p))),
      retry(3)
    );
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
