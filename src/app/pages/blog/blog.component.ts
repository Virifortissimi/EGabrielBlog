import { Component } from '@angular/core';

@Component({
  selector: 'app-blog',
  standalone: true,
  template: `
    <section class="min-h-screen bg-gray-100 py-16">
      <div class="container mx-auto px-4">
        <h1 class="text-4xl font-bold mb-8">Blog</h1>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <article class="bg-white rounded-lg shadow-md p-6">
            <h2 class="text-2xl font-bold mb-2">
              Building Scalable Backend Systems
            </h2>
            <p class="text-gray-600 mb-4">
              Learn about the best practices for designing and implementing 
              scalable backend systems that can handle millions of requests.
            </p>
            <div class="flex justify-between items-center">
              <span class="text-gray-500">June 15, 2024</span>
              <a href="#" class="text-blue-500 hover:text-blue-700">Read More →</a>
            </div>
          </article>

          <article class="bg-white rounded-lg shadow-md p-6">
            <h2 class="text-2xl font-bold mb-2">
              Optimizing Database Performance
            </h2>
            <p class="text-gray-600 mb-4">
              Tips and techniques for improving database performance in 
              high-traffic applications.
            </p>
            <div class="flex justify-between items-center">
              <span class="text-gray-500">June 1, 2024</span>
              <a href="#" class="text-blue-500 hover:text-blue-700">Read More →</a>
            </div>
          </article>
        </div>
      </div>
    </section>
  `
})


export class BlogComponent {
  // Component logic
}