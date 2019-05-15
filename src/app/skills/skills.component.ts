import {Component, OnInit} from '@angular/core';
import {SkillsService} from './service/skills.service';
import {Skill} from './models/skill';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  skills: Observable<Array<Skill>>;

  constructor(private readonly skillService: SkillsService) {
  }

  ngOnInit() {
    this.skills = this.skillService.getSkills();
  }

}
