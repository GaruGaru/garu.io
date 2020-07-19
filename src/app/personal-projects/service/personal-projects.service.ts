import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {Project} from '../models/project';


@Injectable({
  providedIn: 'root'
})
export class PersonalProjectsService {

  constructor(private readonly httpClient: HttpClient) {
  }

  getProjects(): Observable<Project[]> {
    return this.httpClient.get<Project[]>(environment.endpoint + '/personal/projects');
  }

}
