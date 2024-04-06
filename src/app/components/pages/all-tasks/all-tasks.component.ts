import { Component, EventEmitter, Output, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpService } from '../../../services/http.service';
import { DatePipe } from '@angular/common';
import { PageTitleComponent } from "../page-title/page-title.component";



@Component({
    selector: 'app-all-tasks',
    standalone: true,
    templateUrl: './all-tasks.component.html',
    styleUrl: './all-tasks.component.css',
    imports: [FormsModule, DatePipe, PageTitleComponent]
})
export class AllTasksComponent {
  httpService = inject(HttpService)
  tasklist: any[] = []
  newdata: String[] | any;
  latestdate = new Date
  @Output() Important = new EventEmitter<any>();
  @Output() Complete = new EventEmitter<any>();


  ngOnInit() {
    this.getAlltask();
  }


  addtask() {
    // console.log(this.newdata)
    this.httpService.addtask(this.newdata).subscribe(() => {
      this.newdata = "";
      this.getAlltask();
    })
  }

  getAlltask() {
    this.httpService.getAllTask().subscribe((res: any) => {
      this.tasklist = res;
    })
  }

  markImportant(task: any) {

  }

  markComplete(task: any) {

  }

}
