import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-communication-plan',
  templateUrl: './communication-plan.component.html',
  styleUrls: ['./communication-plan.component.scss'],
})
export class CommunicationPlanComponent {
  communicationPlanColumns = [
    { title: 'Type', field: 'type' },
    { title: 'Purpose', field: 'purpose', type: 'array' },
    { title: 'Medium', field: 'medium' },
    { title: 'Frequency', field: 'frequency' },
    { title: 'Audience', field: 'audience', type: 'array' },
  ];

  communicationPlans = [
    {
      type: 'Kickoff Meeting',
      purpose: [
        'Introduce the project.',
        'Confirm objectives, goals, and deliverables.',
      ],
      medium: 'Teams meeting',
      frequency: 'Once a project start.',
      audience: [
        'Project team',
        'Project sponsor',
        // 'Director of Project Management',
        // 'Director of Engineering',
        'Customer',
      ],
    },
    {
      type: 'Backlog Grooming',
      purpose: ['Review user stories and fill-in missing details.'],
      medium: 'Teams meeting',
      frequency: 'Every other Tuesday at 9 AM.',
      audience: ['Project team'],
    },
    {
      type: 'Sprint Planning',
      purpose: ['Plan the next iteration project.'],
      medium: 'Teams meeting',
      frequency: 'Every other Tuesday at 9 AM.',
      audience: ['Project team'],
    },
    {
      type: 'Daily Standup',
      purpose: ['Review the status of the project.'],
      medium: 'Teams meeting',
      frequency: 'Every weekday at 9 AM.',
      audience: ['Project team'],
    },
    {
      type: 'Sprint Retrospective',
      purpose: ['Review the effectiveness of the current development processes.'],
      medium: 'Teams meeting',
      frequency: 'Every other Tuesday at 1 PM.',
      audience: ['Project team'],
    },
    {
      type: 'Meeting recaps and project check-ins',
      purpose: [
        'Update stakeholders the status of the project based on notes from the team meeting.',
      ],
      medium: 'Email',
      frequency: 'Every Monday morning.',
      audience: ['Project sponsor', 'Stakeholders'],
    },
    {
      type: 'Sprint Review',
      purpose: ['Update all stakeholders on the status of the project and receive feedback.',],
      medium: 'Teams meeting',
      frequency: 'Monthly.',
      audience: ['Project manager', 'Project sponsor', 'Stakeholders'],
    },
    {
      type: 'Project Closing Meeting',
      purpose: [
        'Review the end product.',
        'Discuss the lessons learned.',
      ],
      medium: 'Teams meeting',
      frequency: 'Once a project end.',
      audience: [
        'Project team',
        'Project sponsor',
        // 'Director of Project Management',
        // 'Director of Engineering',
        'Customer',
      ],
    },
  ];
}
