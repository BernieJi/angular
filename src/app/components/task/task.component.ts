import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { task } from '../../models/task';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task',
  imports: [ CommonModule, FormsModule ],
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss'
})
export class TaskComponent {

  //代辦事項的靜態資料
  tasks:task[] = [
    { id: 1, title: '學習 Angular', completed: false },
    { id: 2, title: '完成專案', completed: false },
    { id: 3, title: '安裝vscode', completed: true } 
  ];
  
  newTask: string = '';

  // 新增新的待辦事項
 addTask(){
  // enmpty string
  if(!this.newTask.trim()) return;

  // newTask Object
  const newTask: task = {
    id: this.tasks.length + 1,
    title: this.newTask,
    completed: false,
  };

  this.tasks.push(newTask);
  // refresh the input value
  this.newTask = '';
 }

 // 將待辦事項完成
 toggleTask(task:task){
  task.completed = !task.completed;   
 }

 // 刪除待辦事項
 deleteTask(id: number){
  this.tasks = this.tasks.filter(task => task.id != id);
 }

}
