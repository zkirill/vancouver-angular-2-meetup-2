import { Component } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  dataSource = new ExampleDataSource();
}

export class ExampleDataSource extends DataSource<any> {
  constructor() {
    super();
  }

  connect(): Observable<ExampleData[]> {
    const obs = new Observable<ExampleData[]>((observer) => {
      // observable execution
      observer.next([
        {
          id: '1',
          name: 'First Vancouver Angular 2+ Meetup (April 6, 2018)',
        },
        {
          id: '2',
          name: 'Second Vancouver Angular 2+ Meetup (April 13, 2018)',
        },
      ]);
      observer.complete();
    });
    return obs;
  }

  disconnect() {
  }
}

export interface ExampleData {
  id: string;
  name: string;
}
