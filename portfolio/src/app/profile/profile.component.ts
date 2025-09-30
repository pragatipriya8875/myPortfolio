import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Project } from '../_models/Project';
import { ProjectsService } from '../projects.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})

export class ProfileComponent implements OnInit {
  projects: Project[] = [];

  constructor(private titleService: Title, private projectService: ProjectsService) {
    this.titleService.setTitle('Pragati Priya - Profile');
  }

  ngOnInit(): void {
    this.projects = this.projectService.GetProjects();
  }
}
