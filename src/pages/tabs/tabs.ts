import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { TerminadosPage } from '../terminados/terminados.component';
import { PendientesPage } from '../pendientes/pendientes.component';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = PendientesPage;
  tab3Root = TerminadosPage;

  constructor() {

  }
}
