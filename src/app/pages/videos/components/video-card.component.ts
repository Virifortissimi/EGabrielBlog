import { Component, Input } from '@angular/core';
import { Video } from '../models/video.model';

@Component({
  selector: 'app-video-card',
  standalone: true,
  template: `
    <div class="group bg-white rounded-lg overflow-hidden border border-gray-100 hover:border-blue-100 transition-colors duration-300">
      <div class="p-6">
        <h3 class="text-xl font-semibold mb-2 group-hover:text-blue-600 transition-colors">
          {{ video.name }}
        </h3>
        <p class="text-gray-600 mb-4">
          {{ video.description }}
        </p>
        <div class="flex justify-between items-center">
          <span class="text-sm text-gray-500">{{ video.tag }}</span>
          <a 
            [href]="video.link" 
            target="_blank"
            class="text-blue-600 hover:text-blue-700 text-sm font-medium"
          >
            See more →
          </a>
        </div>
      </div>
    </div>
  `
})
export class VideoCardComponent {
  @Input() video!: Video;
}