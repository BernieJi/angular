import { Routes } from '@angular/router';
import { TaskComponent } from './components/task/task.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'todo', component: TaskComponent },
];
