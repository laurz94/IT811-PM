import { Component } from '@angular/core';

@Component({
  selector: 'app-execution',
  templateUrl: './execution.component.html',
})
export class ExecutionComponent {
  progressColumns = [
    { header: 'Task', field: 'task' },
    { header: '% Complete', field: 'complete' },
    { header: 'Due Date', field: 'date' },
  ];

  progressData = [
    {
      task: 'Assign Project Manager',
      complete: 100,
      date: 'January 18, 2022',
    },
    { task: 'Assign Project Team', complete: 100, date: 'January 18, 2022' },
    {
      task: 'Define Project Scope',
      complete: 100,
      date: 'January 26, 2022',
    },
    {
      task: 'Requirements Definition',
      complete: 100,
      date: 'February 24, 2022',
    },
    { task: 'Architecture Design', complete: 100, date: 'March 11, 2022' },
    { task: 'Risk Analysis', complete: 100, date: 'March 11, 2022' },
    { task: 'Scheduling', complete: 100, date: 'March 21, 2022' },
    { task: 'Define Project Plan', complete: 100, date: 'April 5, 2022' },
    { task: 'Develop SQL DB', complete: 100, date: 'April 20, 2022' },
    {
      task: 'Integrate with KU ADID',
      complete: 100,
      date: 'April 13, 2022',
    },
    { task: 'Integrate with TRIBE', complete: 75, date: 'April 28, 2022' },
    { task: 'Integrate with STRIPE', complete: 75, date: 'April 28, 2022' },
    { task: 'GUI Development', complete: 50, date: 'May 4, 2022' },
    { task: 'Chatbot Integration', complete: 50, date: 'May 4, 2022' },
    { task: 'Email Mailbox Creation', complete: 100, date: 'May 4, 2022' },
    { task: 'Develop Search Engine', complete: 35, date: 'May 18, 2022' },
    {
      task: 'Develop Automatic Price Matching',
      complete: 0,
      date: 'June 2, 2022',
    },
    { task: 'Write Documentation', complete: 100, date: 'March 11, 2022' },
    { task: 'Unit Testing', complete: 0, date: 'June 2, 2022' },
    { task: 'Regression Testing', complete: 0, date: 'June 9, 2022' },
    { task: 'UAT Testing', complete: 0, date: 'June 17, 2022' },
    { task: 'Documentation Review', complete: 0, date: 'June 17, 2022' },
    { task: 'Release Notes', complete: 0, date: 'June 10, 2022' },
    { task: 'Packaging & Deployment', complete: 0, date: 'June 27, 2022' },
    {
      task: 'Documentation Acceptance',
      complete: 0,
      date: 'June 30, 2022',
    },
    {
      task: 'Product Support Agreement',
      complete: 0,
      date: 'July 5, 2022',
    },
  ];
}
