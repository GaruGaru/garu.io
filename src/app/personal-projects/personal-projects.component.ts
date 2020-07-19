import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Project} from './models/project';
import {PersonalProjectsService} from './service/personal-projects.service';

@Component({
  selector: 'app-personal-projects',
  templateUrl: './personal-projects.component.html',
  styleUrls: ['./personal-projects.component.css']
})
export class PersonalProjectsComponent implements OnInit {

  projects: Observable<Project[]>;

  constructor(private readonly projectsService: PersonalProjectsService) {
  }

  ngOnInit() {
    this.projects = this.projectsService.getProjects();
  }

}
