import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-competitive-analysis',
  templateUrl: './competitive-analysis.component.html',
})
export class CompetitiveAnalysisComponent implements OnInit {
  columns = [
    { title: 'Criteria', field: 'criteria' },
    { title: 'WT', field: 'wt' },
    { title: 'K-State Bookstore', field: 'kState' },
    { title: 'UMKC Bookstore', field: 'umkc' },
    { title: 'Chiefs.com', field: 'chiefs' },
  ];

  features = [
    { criteria: 'Ease of Use', wt: 0.2, kState: 4, umkc: 3, chiefs: 5 },
    {
      criteria: 'Latency/Performance	',
      wt: 0.15,
      kState: 2,
      umkc: 3,
      chiefs: 5,
    },
    {
      criteria: 'Multiple Payment Methods',
      wt: 0.05,
      kState: 1,
      umkc: 1,
      chiefs: 5,
    },
    {
      criteria: 'Simulated Merchandise Previews',
      wt: 0.05,
      kState: 1,
      umkc: 1,
      chiefs: 1,
    },
    { criteria: 'Ticket Sales	', wt: 0.15, kState: 0, umkc: 0, chiefs: 5 },
    { criteria: 'Auto Price Match', wt: 0.1, kState: 0, umkc: 0, chiefs: 0 },
    { criteria: 'Community Hub', wt: 0.1, kState: 0, umkc: 0, chiefs: 0 },
    { criteria: 'Discount Hub	', wt: 0.05, kState: 3, umkc: 3, chiefs: 0 },
    {
      criteria: 'In-Text Book Search',
      wt: 0.025,
      kState: 0,
      umkc: 0,
      chiefs: 0,
    },
    {
      criteria: 'Outdoor Pick-up/Drop-off',
      wt: 0.025,
      kState: 1,
      umkc: 1,
      chiefs: 1,
    },
    {
      criteria: 'Online Course Signup',
      wt: 0.05,
      kState: 0,
      umkc: 0,
      chiefs: 1,
    },
    {
      criteria: 'Feedback Functionality',
      wt: 0.05,
      kState: 3,
      umkc: 3,
      chiefs: 5,
    },
  ];

  totals = {
    criteria: 'Analysis Score',
    wt: 0,
    kState: 0,
    umkc: 0,
    chiefs: 0,
  };

  ngOnInit(): void {
    this.features.forEach((feature) => {
      this.totals.wt += feature.wt;
      this.totals.kState += feature.kState * feature.wt;
      this.totals.umkc += feature.umkc * feature.wt;
      this.totals.chiefs += feature.chiefs * feature.wt;
    });
  }
}
