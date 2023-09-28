import { Injectable } from '@angular/core';

export interface Skill {
  name: string;
  image: string;
}

export const SKILLS: Skill[] = [
  {
    name: 'HTML',
    image: 'assets/skills/html.svg'
  },
  {
    name: 'CSS',
    image: 'assets/skills/css.svg'
  },
  {
    name: 'SASS',
    image: 'assets/skills/sass.svg'
  },
  {
    name: 'JavaScript / Typescript',
    image: 'assets/skills/javascript.svg'
  },
  {
    name: 'GIT',
    image: 'assets/skills/git.svg'
  },
  {
    name: 'Github',
    image: 'assets/skills/github.svg'
  },
  {
    name: 'Responsive Design',
    image: 'assets/skills/responsive.svg'
  },
  {
    name: 'Python',
    image: 'assets/skills/python.svg'
  },
  {
    name: 'C / C++ / C#',
    image: 'assets/skills/c.svg'
  },
  {
    name: 'Angular',
    image: 'assets/skills/angular.svg'
  },
  {
    name: 'React',
    image: 'assets/skills/react.svg'
  },
  {
    name: 'Flutter',
    image: 'assets/skills/flutter.svg'
  },
]

@Injectable({
  providedIn: 'root'
})
export class SkillsService {

  constructor() { }

  getSkills(): Skill[] {
    return SKILLS;
  }
}
