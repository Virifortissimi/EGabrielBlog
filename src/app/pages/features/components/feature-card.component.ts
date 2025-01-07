import { Component, Input } from '@angular/core';
import { Feature } from '../models/feature.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-feature-card',
  imports: [CommonModule],
  standalone: true,
  template: `
    <div class="group p-6 bg-white rounded-lg border border-gray-100 hover:border-blue-100 transition-all duration-300">
      <div class="mb-4">
        <span class="text-blue-600 text-2xl">
          <!-- Icon placeholder - replace with actual icons -->
          <i class="fas fa-{{feature.icon}}"></i>
        </span>
      </div>
      <h3 class="text-xl font-semibold mb-3 group-hover:text-blue-600 transition-colors">
        {{ feature.title }}
      </h3>
      <p class="text-gray-600 mb-4">
        {{ feature.description }}
      </p>
      <div class="flex flex-wrap gap-2">
        <span 
          *ngFor="let tech of feature.technologies"
          class="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded"
        >
          {{ tech }}
        </span>
      </div>
    </div>
  `
})
export class FeatureCardComponent {
  @Input() feature!: Feature;
}