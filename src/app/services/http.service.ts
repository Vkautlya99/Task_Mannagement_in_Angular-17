import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  httpClient = inject(HttpClient)
  constructor() { }

  addtask(task: String) {
    return this.httpClient.post("http://localhost:3000/task", {
      title: task

    })
  }
  getAllTask() {
    return this.httpClient.get("http://localhost:3000/task");
  }
}
