import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Skill} from '../models/skill';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {

  constructor(private readonly httpClient: HttpClient) { }

  getSkills(): Observable<Array<Skill>>{
    return this.httpClient.get<Array<Skill>>('assets/data/skills.json')
  }

}
