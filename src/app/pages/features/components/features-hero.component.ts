import { Component } from '@angular/core';

@Component({
  selector: 'app-features-hero',
  standalone: true,
  template: `
    <section class="py-24 px-6 bg-gradient-to-br from-gray-50 to-white">
      <div class="container mx-auto mt-16">
        <div class="max-w-3xl">
          <h1 class="text-5xl font-bold mb-6">Features & Services</h1>
          <p class="text-xl text-gray-600 leading-relaxed">
            Specialized in building robust backend systems and scalable architectures. 
            Here are the key services and features I provide.
          </p>
        </div>
      </div>
    </section>
  `
})
export class FeaturesHeroComponent {}