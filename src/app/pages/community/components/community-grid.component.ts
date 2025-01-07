import { Component } from '@angular/core';
import { CommunityCardComponent } from './community-card.component';
import { Community } from '../models/community.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-community-grid',
  standalone: true,
  imports: [CommunityCardComponent, CommonModule],
  template: `
    <section class="py-16 px-6 bg-white">
      <div class="container mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <app-community-card 
            *ngFor="let community of communities"
            [community]="community"
          ></app-community-card>
        </div>
      </div>
    </section>
  `
})
export class CommunityGridComponent {
  communities: Community[] = [
    {
      name: 'ScaleFort',
      description: 'A community of backend developers sharing knowledge and best practices in system design and architecture.',
      members: 500,
      imageUrl: 'https://res.cloudinary.com/virifortissimi/image/upload/v1736242041/Goals/ea8qnojk7tp6b3epc9lu.jpg',
      link: 'https://scalefort.org'
    },
    {
      name: 'Dotnet Book Study',
      description: 'Focus on cloud technologies, containerization, and modern infrastructure practices.',
      members: 800,
      imageUrl: 'https://res.cloudinary.com/virifortissimi/image/upload/v1736239592/Goals/y6uowvr7dse2ypex3tj4.jpg',
      link: 'https://dotnetbookstudy.com'
    }
  ];
}