import { Component } from '@angular/core';

@Component({
  selector: 'app-project-charter',
  templateUrl: './project-charter.component.html'
})
export class ProjectCharterComponent {
  stakeholderColumns = [
    { title: 'Stakeholder', field: 'name' },
    { title: 'Contact', field: 'contactInformation' },
    { title: 'Role', field: 'projectRole' },
    { title: 'Responsibility', field: 'influence' },
  ];

  stakeholders = [
    {
      name: 'Dr. Saiedian',
      contactInformation: 'saiedian@ku.edu',
      projectRole: 'Project Sponsor',
      influence: 'Go/No Go',
    },
    {
      name: 'Project Team',
      contactInformation: 'cherdoiza@ku.edu',
      projectRole: 'Project Team',
      influence: 'Technology Stack',
    },
    {
      name:  `Jen O'Conner - Director of KU Bookstore`,
      contactInformation: 'jen.oconnor@ku.edu',
      projectRole: 'Customer - Bookstore',
      influence: 'Bookstore features',
    },
    {
      name:  `Travis Goff- Director of Athletics`,
      contactInformation: 'kuathletics@ku.edu',
      projectRole: 'Customer - Ticket Sales',
      influence: 'Ticket sales features',
    },
    {
      name:  `Jason Coleman - Technology Manager`,
      contactInformation: 'jasonac@ku.edu',
      projectRole: 'Customer - Information Technology',
      influence: 'Security management',
    },
    {
      name:  `Bita Porubsky - Social Content Manager`,
      contactInformation: 'bita@ku.edu',
      projectRole: 'Customer - Social Media',
      influence: 'Social media exposure',
    },
  ];

}
