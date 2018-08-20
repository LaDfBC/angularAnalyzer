import { Component, OnInit } from '@angular/core';
import { Issue } from '../issues/issues';
import { IssueService } from '../services/issue.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {
  issues: Issue[] = [];

  constructor(private issueService: IssueService) { }

  ngOnInit() {
    this.getIssues();
  }

  getIssues(): void {
    this.issueService.getIssues()
      .subscribe(issues => this.issues = issues);
  }
}
