import { Injectable } from '@angular/core';
import { Issue } from '../issues/issues';

import { MessageService } from './message.service';

import { HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class IssueService {
  constructor(private http: HttpClient,
              private messageService: MessageService) { }

  private issuesUrl = 'localhost:5003';

  getIssues(): Promise<Issue[]> {
    this.messageService.add('HeroService: fetched Heroes');
    return this.http.get<Issue[]>(this.issuesUrl).toPromise();
  }

  getIssue(id: string): Promise<Issue> {
    this.messageService.add(`IssueService: fetched issue id=${id}`);
    return this.http.get<Issue>(this.issuesUrl).toPromise();
    // return of(ISSUES.find(issue => issue.id === id));
  }

  getIssueByTeam(team: string): Promise<Issue> {
    return this.http.get<Issue>(this.issuesUrl).toPromise();
  }

  getIssuesBySprint(sprint: string): Promise<Issue[]> {
    return this.http.get<Issue[]>(this.issuesUrl + 'sprint').toPromise();
  }

  getIssuesBySprints(sprints: string[]): Promise<Issue[]> {
    return this.http.get<Issue[]>(this.issuesUrl + 'sprints').toPromise();
  }
}
