import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MessageService } from '../services/message.service';

import { Hero } from '../model/hero';
import { Github } from '../model/github';

import { HEROES } from '../constant/mock-heroes';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService, private http: HttpClient) { }

  getHeroes(): Observable<Hero[]> {
    // TODO: send the message _after_ fetching the heroes
    this.messageService.add('HeroService: fetched heroes');
    return of(HEROES);
  }

  getDataFromCis() : Observable<Github> {
    return this.http.get<Github>('https://api.github.com/users/bikashkumars');
  }

}
