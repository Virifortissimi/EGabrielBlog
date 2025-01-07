import { Component } from '@angular/core';

@Component({
  selector: 'app-projects-grid',
  standalone: true,
  template: `
    <section class="py-24 px-6 bg-white">
      <div class="container mx-auto">
        <h2 class="text-3xl font-bold mb-12">Selected Work</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div class="group cursor-pointer">
            <h3 class="text-xl font-semibold mb-2 group-hover:text-blue-600 transition-colors">
              Foodbot
            </h3>
            <p class="text-gray-600">
              AI-Powered Web API with Dynamic Angular UI
            </p>
          </div>

          <div class="group cursor-pointer">
            <h3 class="text-xl font-semibold mb-2 group-hover:text-blue-600 transition-colors">
              Analytics API
            </h3>
            <p class="text-gray-600">
              Real-time event processing with sub-second latency
            </p>
          </div>
        </div>
      </div>
    </section>
  `
})
export class ProjectsGridComponent {}