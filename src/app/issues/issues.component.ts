import { Component, OnInit } from '@angular/core';
import { Issue } from './issues';
import { IssueService } from '../services/issue.service';

@Component({
  selector: 'app-issues',
  templateUrl: './issues.component.html',
  styleUrls: ['./issues.component.css']
})

export class IssuesComponent implements OnInit {

  // issue: Issue = {
  //   id: 'MDMS-9512',
  //   owner: 'gmausshardt'
  // };

  issues: Issue[];
  constructor(private issueService: IssueService) { }

  getIssues(): void {
    this.issueService.getIssues().then(issues => this.issues = issues);
  }

  ngOnInit() {
    this.getIssues();
  }

}
