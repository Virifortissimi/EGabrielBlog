import { Component } from '@angular/core';

@Component({
  selector: 'app-community-hero',
  standalone: true,
  template: `
    <section class="py-24 px-6 bg-gradient-to-br from-gray-50 to-white">
      <div class="container mx-auto mt-16">
        <div class="max-w-3xl">
          <h1 class="text-5xl font-bold mb-6">Communities</h1>
          <p class="text-xl text-gray-600 leading-relaxed">
            Building and nurturing tech communities is my passion. Here are some of the 
            communities I've founded and actively contribute to.
          </p>
        </div>
      </div>
    </section>
  `
})
export class CommunityHeroComponent {}