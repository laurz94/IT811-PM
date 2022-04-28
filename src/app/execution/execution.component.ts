import { Component } from '@angular/core';

@Component({
  selector: 'app-execution',
  templateUrl: './execution.component.html',
  styles: [
    `
      .card-body {
        display: flex;
        flex-direction: row;
        gap: 30%;
      }
      .column {
        flex-direction: column;
      }
    `,
  ],
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
      date: 'February 18, 2022',
    },
    { task: 'Assign Project Team', complete: 100, date: 'February 18, 2022' },
    {
      task: 'Define Project Scope',
      complete: 100,
      date: 'March 7, 2022',
    },
    {
      task: 'Requirements Definition',
      complete: 100,
      date: 'March 22, 2022',
    },
    { task: 'Architecture Design', complete: 100, date: 'April 6, 2022' },
    { task: 'Risk Analysis', complete: 100, date: 'April 6, 2022' },
    { task: 'Scheduling', complete: 100, date: 'April 14, 2022' },
    { task: 'Define Project Plan', complete: 100, date: 'April 29, 2022' },
    { task: 'Develop SQL DB', complete: 0, date: 'May 16, 2022' },
    {
      task: 'Integrate with KU ADID',
      complete: 0,
      date: 'May 9, 2022',
    },
    { task: 'Integrate with TRIBE', complete: 0, date: 'May 24, 2022' },
    { task: 'Integrate with STRIPE', complete: 0, date: 'May 24, 2022' },
    { task: 'GUI Development', complete: 0, date: 'May 30, 2022' },
    { task: 'Chatbot Integration', complete: 0, date: 'May 30, 2022' },
    { task: 'Email Mailbox Creation', complete: 0, date: 'May 30, 2022' },
    { task: 'Develop Search Engine', complete: 0, date: 'June 13, 2022' },
    {
      task: 'Develop Automatic Price Matching',
      complete: 0,
      date: 'June 28, 2022',
    },
    { task: 'Write Documentation', complete: 50, date: 'April 6, 2022' },
    { task: 'Unit Testing', complete: 0, date: 'June 28, 2022' },
    { task: 'Regression Testing', complete: 0, date: 'July 5, 2022' },
    { task: 'UAT Testing', complete: 0, date: 'June 13, 2022' },
    { task: 'Documentation Review', complete: 0, date: 'June 13, 2022' },
    { task: 'Release Notes', complete: 0, date: 'July 6, 2022' },
    { task: 'Packaging & Deployment', complete: 0, date: 'July 21, 2022' },
    {
      task: 'Documentation Acceptance',
      complete: 0,
      date: 'July 26, 2022',
    },
    {
      task: 'Product Support Agreement',
      complete: 0,
      date: 'July 29, 2022',
    },
  ];
}
