import { Component } from '@angular/core';
import { FeatureCardComponent } from './feature-card.component';
import { Feature } from '../models/feature.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-features-grid',
  standalone: true,
  imports: [FeatureCardComponent, CommonModule],
  template: `
    <section class="py-16 px-6 bg-white">
      <div class="container mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <app-feature-card 
            *ngFor="let feature of features"
            [feature]="feature"
          ></app-feature-card>
        </div>
      </div>
    </section>
  `
})
export class FeaturesGridComponent {
  features: Feature[] = [
    {
      title: 'API Development',
      description: 'RESTful and GraphQL APIs built with best practices for performance and scalability.',
      icon: 'code',
      technologies: ['Node.js', 'Express', 'GraphQL']
    },
    {
      title: 'System Architecture',
      description: 'Designing scalable distributed systems and microservices architectures.',
      icon: 'architecture',
      technologies: ['Docker', 'Kubernetes', 'AWS']
    },
    {
      title: 'Database Design',
      description: 'Optimized database schemas and query performance for high-traffic applications.',
      icon: 'database',
      technologies: ['PostgreSQL', 'MongoDB', 'Redis']
    },
    {
      title: 'Cloud Infrastructure',
      description: 'Cloud-native solutions with focus on scalability and reliability.',
      icon: 'cloud',
      technologies: ['AWS', 'GCP', 'Azure']
    },
    {
      title: 'Security Implementation',
      description: 'Robust security measures and authentication systems for enterprise applications.',
      icon: 'security',
      technologies: ['OAuth', 'JWT', 'SSL/TLS']
    },
    {
      title: 'Performance Optimization',
      description: 'System optimization for high throughput and low latency operations.',
      icon: 'performance',
      technologies: ['Caching', 'Load Balancing', 'CDN']
    }
  ];
}