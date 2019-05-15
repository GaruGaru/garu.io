import {Injectable} from '@angular/core';
import {WorkExperience} from '../models/work-experience';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WorkExperienceService {

  constructor(private readonly http: HttpClient) {
  }

  public workExperiences(): Observable<WorkExperience[]> {
    return this.http.get<WorkExperience[]>('assets/data/work_experience.json');
  }

}
