import { Injectable } from '@angular/core';
import { Issue, ISSUES } from '../issues/issues';

import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})

export class IssueService {
  constructor(private messageService: MessageService) { }

  getIssues(): Observable<Issue[]> {
    this.messageService.add('HeroService: fetched Heroes');
    return of(ISSUES);
  }

  getIssue(id: string): Observable<Issue> {
    this.messageService.add(`IssueService: fetched issue id=${id}`);
    return of(ISSUES.find(issue => issue.id === id));
  }
}
