import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem, PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'ku-bookstore';
  items: MenuItem[] = [
    {
      label: 'Project Documents',
      icon: 'pi pi-fw pi-file',
      items: [
        {
          label: 'Part 1: Vision Statement and Team Portfolio',
          routerLink: '/project-def',
        },
        {
          label: 'Part 2: Stakeholder Registry & Communication Plan',
          routerLink: '/stakeholders',
        },
        {
          label: 'Part 3: Project Charter & Requirements',
          routerLink: '/project-charter',
        },

        {
          label: 'Part 4: Work Break Down Structure',
          routerLink: '/wbs',
        },
        {
          label: 'Part 5: Resources',
          routerLink: '/resources',
        },
        {
          label: 'Part 6: Quality',
          routerLink: '/quality',
        },
      ],
    },
    {
      label: 'Student Services',
      items: [
        {
          label: 'Left',
          icon: 'pi pi-fw pi-align-left',
        },
        {
          label: 'Right',
          icon: 'pi pi-fw pi-align-right',
        },
        {
          label: 'Center',
          icon: 'pi pi-fw pi-align-center',
        },
        {
          label: 'Justify',
          icon: 'pi pi-fw pi-align-justify',
        },
      ],
    },
    {
      label: 'Game Day Tickets',
      items: [
        {
          label: 'New',
        },
        {
          label: 'Delete',
        },
        {
          label: 'Search',
          items: [
            {
              label: 'Filter',
              items: [
                {
                  label: 'Print',
                },
              ],
            },
            {
              label: 'List',
            },
          ],
        },
      ],
    },
    {
      label: 'Community Events',
      items: [
        {
          label: 'Edit',
          items: [
            {
              label: 'Save',
              icon: 'pi pi-fw pi-calendar-plus',
            },
            {
              label: 'Delete',
              icon: 'pi pi-fw pi-calendar-minus',
            },
          ],
        },
        {
          label: 'Archieve',
          items: [
            {
              label: 'Remove',
              icon: 'pi pi-fw pi-calendar-minus',
            },
          ],
        },
      ],
    },
    {
      label: 'Feedback',
    },
  ];

  constructor(private primengConfig: PrimeNGConfig, public router: Router) {}

  ngOnInit() {
    this.primengConfig.ripple = true;
  }
}
