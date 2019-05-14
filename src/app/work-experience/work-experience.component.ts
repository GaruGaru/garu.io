import {Component, OnInit} from '@angular/core';
import {WorkExperienceService} from './service/work-experience.service';
import {WorkExperience} from './models/work-experience';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css']
})
export class WorkExperienceComponent implements OnInit {


  workExperiences: Observable<WorkExperience[]>;

  constructor(private readonly workExperienceService: WorkExperienceService) {
  }

  ngOnInit() {
    this.workExperiences = this.workExperienceService.workExperiences();
  }

}
