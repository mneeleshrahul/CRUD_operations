// create-task.component.ts
import { Component } from '@angular/core';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css'],
})
export class CreateTaskComponent {
  task = {
    title: '',
    description: '',
    dueDate: null,
  };

  constructor(private taskService: TaskService) {}

  // createTask(): void {
  //   this.taskService.createTask(this.task).subscribe((response) => {
  //     console.log('Task created successfully', response);
  //     // Optionally, you can navigate to the task list page
  //   });
  // }
  createTask(): void {
    this.taskService.createTask(this.task).subscribe((response) => {
      console.log('Task created successfully', response);
      
    });
  }
}
