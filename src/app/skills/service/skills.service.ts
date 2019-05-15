import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Skill} from '../models/skill';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {

  constructor(private readonly httpClient: HttpClient) { }

  getSkills(): Observable<Skill[]>{
    return this.httpClient.get<Skill[]>('assets/data/skills.json')
  }

}
