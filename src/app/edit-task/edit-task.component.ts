// edit-task.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TaskService } from '../task.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css'],
})
export class EditTaskComponent implements OnInit {
  taskId: string;
  task$!: Observable<any>;

  constructor(private route: ActivatedRoute, private taskService: TaskService) {
    this.taskId = this.route.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.task$ = this.taskService.getTask(this.taskId);
  }

  updateTask(task: any): void {
    this.taskService.updateTask(this.taskId, task).subscribe((response) => {
      console.log('Task updated successfully', response);
      // Optionally, you can navigate to the task list page
    });
  }
}
