import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  template: `
    <section class="min-h-screen bg-gray-100 py-16">
      <div class="container mx-auto px-4 mt-16">
        <h1 class="text-4xl font-bold mb-8">Projects</h1>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div class="bg-white rounded-lg shadow-md p-6">
            <h2 class="text-2xl font-bold mb-2">E-commerce Platform Backend</h2>
            <p class="text-gray-600 mb-4">
              A scalable microservices architecture handling product management, 
              order processing, and inventory tracking.
            </p>
            <div class="mb-4">
              <h3 class="font-semibold">Technologies:</h3>
              <p>Node.js, Express, MongoDB, Redis, Docker</p>
            </div>
            <a href="#" class="text-blue-500 hover:text-blue-700">View Details →</a>
          </div>

          <div class="bg-white rounded-lg shadow-md p-6">
            <h2 class="text-2xl font-bold mb-2">Real-time Analytics API</h2>
            <p class="text-gray-600 mb-4">
              High-performance API processing millions of events daily with 
              sub-second latency for real-time analytics.
            </p>
            <div class="mb-4">
              <h3 class="font-semibold">Technologies:</h3>
              <p>Python, FastAPI, PostgreSQL, Apache Kafka</p>
            </div>
            <a href="#" class="text-blue-500 hover:text-blue-700">View Details →</a>
          </div>
        </div>
      </div>
    </section>
  `
})


export class ProjectsComponent {
  // Component logic
}