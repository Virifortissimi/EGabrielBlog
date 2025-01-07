import { Component } from '@angular/core';

@Component({
  selector: 'app-video-hero',
  standalone: true,
  template: `
    <section class="py-24 px-6 bg-gradient-to-br from-gray-50 to-white">
      <div class="container mx-auto mt-16">
        <div class="max-w-3xl">
          <h1 class="text-5xl font-bold mb-6">Videos & Appearances</h1>
          <p class="text-xl text-gray-600 leading-relaxed">
            Explore a collection of videos where I've hosted, co-hosted, or participated as a panelist. 
            From insightful discussions to technical deep-dives, this is where you can watch me share my 
            expertise and engage with thought leaders in the tech and development community.
          </p>
        </div>
      </div>
    </section>
  `
})
export class VideoHeroComponent {}