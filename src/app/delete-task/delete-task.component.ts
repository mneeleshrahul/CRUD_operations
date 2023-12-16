// delete-task.component.ts
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-delete-task',
  templateUrl: './delete-task.component.html',
  styleUrls: ['./delete-task.component.css'],
})
export class DeleteTaskComponent {
  taskId: string;

  constructor(private route: ActivatedRoute, private taskService: TaskService) {
    this.taskId = this.route.snapshot.params['id'];
  }

  deleteTask(): void {
    this.taskService.deleteTask(this.taskId).subscribe((response) => {
      console.log('Task deleted successfully', response);
      // Optionally, you can navigate to the task list page
    });
  }
}
