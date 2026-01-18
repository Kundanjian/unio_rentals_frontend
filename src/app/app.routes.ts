import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home';
import { QuickRentComponent } from './components/quick-rent/quick-rent';
import { MyOrdersComponent } from './components/my-orders/my-orders';
import { UnioCoinsComponent } from './components/unio-coins/unio-coins';
import { SettingsComponent } from './components/settings/settings';
import { HelpComponent } from './components/help/help';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'quick-rent', component: QuickRentComponent },
  { path: 'orders', component: MyOrdersComponent },
  { path: 'coins', component: UnioCoinsComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'help', component: HelpComponent }
];
