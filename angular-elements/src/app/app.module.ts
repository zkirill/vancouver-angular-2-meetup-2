import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { ExperimentComponent } from './experiment/experiment.component';


@NgModule({
  declarations: [
    ExperimentComponent,
    /* We removed AppComponent here! */
  ],
  imports: [
    BrowserModule
  ],
  entryComponents: [
    ExperimentComponent,
  ],
  providers: [],
  bootstrap: [
    /* We removed AppCoponent here! */
  ]
})
export class AppModule {
  constructor(private injector: Injector) {
    const customElement = createCustomElement(ExperimentComponent, { injector });
    customElements.define('app-experiment', customElement);
  }
  ngDoBootstrap() {
  }
}
