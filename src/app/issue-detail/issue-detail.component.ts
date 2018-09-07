import { Component, OnInit, Input } from '@angular/core';
import { Issue } from '../issues/issues';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { IssueService } from '../services/issue.service';

@Component({
  selector: 'app-issue-detail',
  templateUrl: './issue-detail.component.html',
  styleUrls: ['./issue-detail.component.css']
})
export class IssueDetailComponent implements OnInit {
  @Input() issue: Issue;

  constructor(private route: ActivatedRoute,
              private issueService: IssueService,
              private location: Location) { }

  ngOnInit(): void {
    this.getIssue();
  }

  getIssue(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.issueService.getIssue(id)
      .then(issue => this.issue = issue);
  }

  goBack(): void {
    this.location.back();
  }
}
