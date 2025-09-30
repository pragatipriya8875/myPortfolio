import { Injectable } from '@angular/core';
import { Project } from './_models/Project';
import { Tag } from './_models/tag';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  projects: Project[] = [
    {
      id: 0,
      name: 'Supplier Platform Sustainability',
      summary: 'Core features for Supplier Platform using MEAN stack.',
      description: 'Developed and maintained features leading to 20% increase in supplier satisfaction; integrated email templates with Amazon S3 and built a custom Angular People Picker.',
      projectLink: 'https://github.com/yourname/supplier-platform', // update with real link if exists
      pictures: ["../../assets/mean_stack.png", "../../assets/email_templates.png", "../../assets/angular_people_picker.png"],
      tags: [Tag.Angular, Tag.NodeJS, Tag.MongoDB, Tag.AWS]
    },

    {
      id: 1,
      name: 'Fertilizer Use Optimization',
      summary: 'Machine learning model for agriculture fertilizer optimization.',
      description: 'Led a team to build a 95% accurate GUI-based ML model optimizing fertilizer use, enhancing crop yields and reducing environmental impact.',
      projectLink: 'https://github.com/yourname/fertilizer-optimization', // update if available
      pictures: ["../../assets/ml_model.png", "../../assets/agriculture.png", "../../assets/gui.png"],
      tags: [Tag.Python, Tag.MachineLearning]
    },

    {
      id: 2,
      name: 'Grievance Redressal System',
      summary: 'Responsive web app for grievance management using MEAN stack.',
      description: 'Developed a full-stack MEAN application featuring user authentication, dynamic forms, role-based access, and real-time interaction.',
      projectLink: 'https://github.com/yourname/grievance-system', // update if available
      pictures: ["../../assets/mean_stack.png", "../../assets/grievance_form.png", "../../assets/real_time_chat.png"],
      tags: [Tag.Angular, Tag.NodeJS, Tag.MongoDB]
    },

    {
      id: 3,
      name: 'Protrainy Responsive Website',
      summary: 'Database-driven, fully responsive site with user registration.',
      description: 'Designed SQL database and implemented a 100% responsive user registration page with MEAN technology.',
      projectLink: 'https://github.com/yourname/protrainy-website', // update if available
      pictures: ["../../assets/sql_db.png", "../../assets/responsive_design.png", "../../assets/user_registration.png"],
      tags: [Tag.Angular, Tag.MongoDB, Tag.SQL]
    },

    {
      id: 4,
      name: 'Certification Tracker',
      summary: 'Web app to track professional certifications and training.',
      description: 'Built a simple tracker for certifications like Google Cloud, Accenture Tech Expressway, and Python programming.',
      projectLink: 'https://github.com/yourname/certification-tracker', // hypothetical link
      pictures: ["../../assets/certification.png", "../../assets/cloud_cert.png", "../../assets/python_cert.png"],
      tags: [Tag.Angular, Tag.HTML, Tag.CSS]
    }
  ];

  constructor() { }

  GetProjects() {
    return this.projects;
  }

  GetProjectsById(id: number): Project {
    const project = this.projects.find(project => project.id === id);
    if (!project) {
      throw new TypeError('There is no project that matches the id: ' + id);
    }
    return project;
  }
}
