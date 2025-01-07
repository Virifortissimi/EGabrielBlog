import { Component, Input } from '@angular/core';
import { Community } from '../models/community.model';

@Component({
  selector: 'app-community-card',
  standalone: true,
  template: `
    <div class="group bg-white rounded-lg overflow-hidden border border-gray-100 hover:border-blue-100 transition-colors duration-300">
      <div class="aspect-video bg-gray-100 overflow-hidden">
        <img 
          [src]="community.imageUrl" 
          [alt]="community.name"
          class="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div class="p-6">
        <h3 class="text-xl font-semibold mb-2 group-hover:text-blue-600 transition-colors">
          {{ community.name }}
        </h3>
        <p class="text-gray-600 mb-4">
          {{ community.description }}
        </p>
        <div class="flex justify-between items-center">
          <span class="text-sm text-gray-500">{{ community.members }}+ members</span>
          <a 
            [href]="community.link" 
            target="_blank"
            class="text-blue-600 hover:text-blue-700 text-sm font-medium"
          >
            Join Community →
          </a>
        </div>
      </div>
    </div>
  `
})
export class CommunityCardComponent {
  @Input() community!: Community;
}