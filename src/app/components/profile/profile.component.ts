import { Component } from '@angular/core';
import { SkillsComponent } from '../skills/skills.component';

interface mySkills {
  name: string;
  fill: number;
}

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [SkillsComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
})
export class ProfileComponent {
  skills: mySkills[];

  constructor() {
    this.skills = [
      {
        name: 'Java',
        fill: 60,
      },
      {
        name: 'Spring',
        fill: 50,
      },
      {
        name: 'Angular',
        fill: 40,
      },
      {
        name: 'TypeScript',
        fill: 40,
      },
      {
        name: 'PostgreSql',
        fill: 25,
      },
      {
        name: 'Docker',
        fill: 10,
      },
    ];
  }
}
