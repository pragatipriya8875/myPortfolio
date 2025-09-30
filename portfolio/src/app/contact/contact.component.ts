import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  constructor(private titleService: Title) {
    this.titleService.setTitle('Pragati Priya - Contact');
  }

  contactDetails = {
    
    email: 'pragatipriya8875@gmail.com',
    linkedin: 'https://in.linkedin.com/in/pragati-priya73',
    instagram: 'https://www.instagram.com/pragatipriya73/',
    mobile: '73670*****',
  };

  copyToClipboard(value: string, label: string) {
    navigator.clipboard.writeText(value).then(() => {
      alert(`${label} copied to clipboard!`);
    });
  }
}
