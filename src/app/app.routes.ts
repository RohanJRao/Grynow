import { Routes,RouterModule } from '@angular/router';
import { AppComponent } from '../app/app.component';
import { HeaderComponent } from './header/header.component';
export const routes: Routes = [
    { path: 'link1', component: AppComponent },
    { path: 'link2', component: HeaderComponent },
];
