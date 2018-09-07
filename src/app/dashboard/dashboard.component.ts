import {AfterViewInit, Component, OnInit} from '@angular/core';
import {Issue} from '../issues/issues';
import {IssueService} from '../services/issue.service';
import {Chart} from 'chart.js';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit, AfterViewInit {
  issues: Issue[] = [];
  chart: Chart;
  data = [];

  constructor(private issueService: IssueService) { }

  public ngAfterViewInit(): void {
    this.data.push('mac', 'Microsoft');
    this.chart = new Chart('canvas', {
      type: 'bar',
      data: {
        labels: this.data,
        datasets: [
          {
            label: 'Ranking',
            data: [1, 2],
            borderColor: '#3cba9f'
          }
        ]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true;
            }
          }]
        }
      }
    });
  }

  ngOnInit() {
    this.getIssues();

  }

  getIssues(): void {
    this.issueService.getIssues()
      .then(issues => this.issues = issues);
  }
}
