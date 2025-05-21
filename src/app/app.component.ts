import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TaskComponent } from './components/task/task.component';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TaskComponent, CommonModule],
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'OneToDo';
  placeholder = 'What needs to be done??'
}
