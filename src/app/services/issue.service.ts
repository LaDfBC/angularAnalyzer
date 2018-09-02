import { Injectable } from '@angular/core';
import { Issue, ISSUES } from '../issues/issues';

import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

import { HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class IssueService {
  constructor(private http: HttpClient,
              private messageService: MessageService) { }

  private issuesUrl = 'localhost:5003';

  getIssues(): Observable<Issue[]> {
    this.messageService.add('HeroService: fetched Heroes');
    issuesJson this.http.get<Issue[]>(this.issuesUrl);
  }

  getIssue(id: string): Observable<Issue> {
    this.messageService.add(`IssueService: fetched issue id=${id}`);
    return of(ISSUES.find(issue => issue.id === id));
  }
}
