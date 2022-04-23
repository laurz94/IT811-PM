import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quality',
  templateUrl: './quality.component.html'
})
export class QualityComponent {
  costsColumns = [
    { header: 'Task', field: 'task' },
    { header: 'Hours Estimate', field: 'hours' },
    { header: 'Role', field: 'role' },
    { header: 'Hourly Rate', field: 'rate' },
    { header: 'Task Cost', field: 'cost' },
  ];

  hardwareColumns = [
    { header: 'Product', field: 'product' },
    { header: 'Monthly Cost', field: 'monthlyCost' },
    { header: 'Cost for Project Timeline', field: 'projectCost' },
  ];

  costs = [
    {
      task: 'Assign Project Manager',
      hours: '1',
      role: 'Director of PM',
      rate: '$192 ',
      cost: '$192',
    },
    {
      task: 'Assign Project Team',
      hours: '1',
      role: 'Director of SE',
      rate: '$192 ',
      cost: '$192',
    },
    {
      task: 'Define Project Scope',
      hours: '16',
      role: 'PM',
      rate: '$65 ',
      cost: '$1,040',
    },
    {
      task: 'Requirements Definition',
      hours: '40',
      role: 'BA',
      rate: '$55 ',
      cost: '$2,200',
    },
    {
      task: 'Architecture Design',
      hours: '40',
      role: 'Architect',
      rate: '$75 ',
      cost: '$3,000',
    },
    {
      task: 'Risk Analysis',
      hours: '16',
      role: 'BA',
      rate: '$55 ',
      cost: '$880',
    },
    {
      task: 'Scheduling',
      hours: '16',
      role: 'PM',
      rate: '$65 ',
      cost: '$1,040',
    },
    {
      task: 'Define Project Plan',
      hours: '24',
      role: 'PM',
      rate: '$65 ',
      cost: '$1,560',
    },
    {
      task: 'Develop SQL DB',
      hours: '16',
      role: 'Developer',
      rate: '$50 ',
      cost: '$800',
    },
    {
      task: 'Integrate with KU ADID',
      hours: '8',
      role: 'Developer',
      rate: '$50 ',
      cost: '$400',
    },
    {
      task: 'Integrate with TRIBE',
      hours: '8',
      role: 'Developer',
      rate: '$50 ',
      cost: '$400',
    },
    {
      task: 'Integrate with STRIPE',
      hours: '8',
      role: 'Developer',
      rate: '$50 ',
      cost: '$400',
    },
    {
      task: 'GUI Development',
      hours: '40',
      role: 'Developer',
      rate: '$50 ',
      cost: '$2,000',
    },
    {
      task: 'Chatbot Integration',
      hours: '8',
      role: 'Developer',
      rate: '$50 ',
      cost: '$400',
    },
    {
      task: 'Email Mailbox Creation',
      hours: '2',
      role: 'Developer',
      rate: '$50 ',
      cost: '$100',
    },
    {
      task: 'Develop Search Engine',
      hours: '40',
      role: 'Developer',
      rate: '$50 ',
      cost: '$2,000',
    },
    {
      task: 'Develop Automatic Price Matching',
      hours: '32',
      role: 'Developer',
      rate: '$50 ',
      cost: '$1,600',
    },
    {
      task: 'Status Updates',
      hours: '8',
      role: 'PM',
      rate: '$65 ',
      cost: '$520',
    },
    {
      task: 'Write Documentation',
      hours: '24',
      role: 'BA',
      rate: '$55 ',
      cost: '$1,320',
    },
    {
      task: 'Unit Testing',
      hours: '36',
      role: 'QA',
      rate: '$30 ',
      cost: '$1,080',
    },
    {
      task: 'Regression Testing',
      hours: '36',
      role: 'QA',
      rate: '$30 ',
      cost: '$1,080',
    },
    {
      task: 'UAT Testing',
      hours: '16',
      role: 'PM',
      rate: '$65 ',
      cost: '$1,040',
    },
    {
      task: 'Documentation Review',
      hours: '8',
      role: 'PM',
      rate: '$65 ',
      cost: '$520',
    },
    {
      task: 'Release Notes',
      hours: '8',
      role: 'PM',
      rate: '$65 ',
      cost: '$520',
    },
    {
      task: 'Packaging & Deployment',
      hours: '4',
      role: 'Developer',
      rate: '$50 ',
      cost: '$200',
    },
    {
      task: 'Documentation Acceptance',
      hours: '2',
      role: 'PM',
      rate: '$65 ',
      cost: '$130',
    },
    {
      task: 'Product Support Agreement',
      hours: '4',
      role: 'PM',
      rate: '$65 ',
      cost: '$260',
    },
  ];

  hardware = [
    {
      product: 'Microsoft Azure Cloud',
      monthlyCost: '$300',
      projectCost: '$1,800',
    },
    {
      product: 'SQL Database',
      monthlyCost: '$1,000',
      projectCost: '$12,000',
    },
  ];
}
