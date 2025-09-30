import { Component } from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent {
  sections = {
    workExperience: false,
    certifications: false,
    skills: false,
    education: false
  };

  toggleSection(section: keyof typeof this.sections): void {
    this.sections[section] = !this.sections[section];
  }
}
