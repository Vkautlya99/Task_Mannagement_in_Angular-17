import { Routes } from '@angular/router';
import { AllTasksComponent } from './components/pages/all-tasks/all-tasks.component';
import { ImportantTasksComponent } from './components/pages/important-tasks/important-tasks.component';
import { CompletedTasksComponent } from './components/pages/completed-tasks/completed-tasks.component';

export const routes: Routes = [
  { path: "", component: AllTasksComponent, title: "Home" },
  { path: "important", component: ImportantTasksComponent, title: "Important-task" },
  { path: "completed", component: CompletedTasksComponent, title: "Completed-task" },


];
