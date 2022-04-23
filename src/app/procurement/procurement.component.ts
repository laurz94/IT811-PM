import { Component } from '@angular/core';

@Component({
  selector: 'app-procurement',
  templateUrl: './procurement.component.html',
  styleUrls: ['./procurement.component.scss']
})
export class ProcurementComponent {
  makeOrBuyColumns = [
    { header: 'Item', field: 'item' },
    { header: 'In-House Cost', field: 'inHouse' },
    { header: 'Outsourced Cost', field: 'outsourced' },
  ];

  makeOrBuyData = [
    {item:'Payment Processing', inHouse: '$50,000', outsourced: '2.9% + 30¢'},
    {item:'UI Development', inHouse: '$4,500', outsourced: '$0'},
    {item:'Backend Development', inHouse: '$25,000', outsourced: '$0'},
    {item:'Hosting', inHouse: '$6,500/year', outsourced: '$960/year'},
    {item:'Maintenance', inHouse: '$6,500/year', outsourced: '$0'},
    {item:'Project Management', inHouse: '$8,000', outsourced: '$2,000'},
  ]
}
