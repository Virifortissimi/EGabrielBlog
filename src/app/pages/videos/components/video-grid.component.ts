import { Component } from '@angular/core';
import { VideoCardComponent } from './video-card.component';
import { Video } from '../models/video.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-video-grid',
  standalone: true,
  imports: [VideoCardComponent, CommonModule],
  template: `
    <section class="py-16 px-6 bg-white">
      <div class="container mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <app-video-card 
            *ngFor="let video of videos"
            [video]="video"
          ></app-video-card>
        </div>
      </div>
    </section>
  `
})
export class VideoGridComponent {
  videos: Video[] = [
    {
      name: 'Microservices Using gRPC and Dapr',
      description: 'In this episode of Inside .NET, we explored microservices using gRPC and Dapr.',
      tag: "Panelist",
      link: 'https://www.youtube.com/watch?v=HfoO56yIrKg&list=PL1QoqKQg7_kakAPRaaCQ6Tny8N46jGgv1&index=3'
    },
    {
      name: 'Dotnet Book Study',
      description: 'A playlist of discussions surrounding dotnet and other technologies.',
      tag: "Co host",
      link: 'https://www.youtube.com/watch?v=pFY1UqgJl3g&list=PL1QoqKQg7_kZkZHg8oJJoACNeFonEzksB'
    },
    {
      name: 'ScaleFort Youtube Series',
      description: 'A playlist of discussions surrounding scaling, growth and technologies.',
      tag: "Host",
      link: 'https://www.youtube.com/@scalefort'
    },
    {
      name: '.NET Foundation Campaign',
      description: 'Volunteered for the position of Board member for the dotnet foundation',
      tag: "Volunteer",
      link: 'https://old.dotnetfoundation.org/about/election/campaign-2022/gabriel-emmanuel'
    },
    {
      name: 'Azure Nigeria Community Conference \'22 - Day 2 (Part 2)',
      description: 'Discussing Opensource and how to make changes as a developer',
      tag: "Panelist",
      link: 'https://www.youtube.com/watch?v=X7Ilo6xQnBc&t=7381s'
    }
  ];
}