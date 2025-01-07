import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  template: `
    <section class="min-h-screen flex items-center px-6 bg-gradient-to-br from-gray-50 to-white">
      <div class="container mx-auto">
        <div class="flex flex-col md:flex-row items-center gap-12">
          <!-- Profile Image -->
          <div class="w-48 h-48 rounded-full overflow-hidden border-4 border-white shadow-lg">
            <img 
              src="https://res.cloudinary.com/virifortissimi/image/upload/c_crop,g_auto,h_1500,w_1024/Goals/ip1vzkxsuegxxgzzgkcr" 
              alt="Emmanuel Gabriel"
              class="w-full h-full object-cover"
            />
          </div>

          <!-- Content -->
          <div class="max-w-2xl">
            <h1 class="text-6xl font-bold mb-6 leading-tight">
              Hi, I'm <span class="text-blue-600">Emmanuel Gabriel</span>
              <br />Backend Developer
            </h1>
            <p class="text-xl text-gray-600 mb-8 leading-relaxed">
              I build scalable backend systems and APIs that power modern applications. 
              Currently focused on distributed systems and cloud architecture.
            </p>
            
            <!-- Social Links -->
            <div class="flex space-x-6">
              <a 
                href="https://github.com/virifortissimi" 
                target="_blank"
                class="text-gray-600 hover:text-blue-600 transition-colors text-xl"
                title="GitHub"
              >
                <i class="fab fa-github"></i>
              </a>
              <a 
                href="https://www.linkedin.com/in/emmanuel-eghosa-gabriel/" 
                target="_blank"
                class="text-gray-600 hover:text-blue-600 transition-colors text-xl"
                title="LinkedIn"
              >
                <i class="fab fa-linkedin"></i>
              </a>
              <a 
                href="https://x.com/_ctordev" 
                target="_blank"
                class="text-gray-600 hover:text-blue-600 transition-colors text-xl"
                title="Twitter"
              >
                <i class="fab fa-twitter"></i>
              </a>
              <a 
                href="https://instagram.com/_ctordev" 
                target="_blank"
                class="text-gray-600 hover:text-blue-600 transition-colors text-xl"
                title="Instagram"
              >
                <i class="fab fa-instagram"></i>
              </a>
              <a 
                href="https://www.youtube.com/@scalefort" 
                target="_blank"
                class="text-gray-600 hover:text-blue-600 transition-colors text-xl"
                title="YouTube"
              >
                <i class="fab fa-youtube"></i>
              </a>
              <a 
                href="https://codease.hashnode.dev" 
                target="_blank"
                class="text-gray-600 hover:text-blue-600 transition-colors text-xl"
                title="Hashnode"
              >
                <i class="fab fa-hashnode"></i>
              </a>
              <a 
                href="https://medium.com/@eghosagabriel" 
                target="_blank"
                class="text-gray-600 hover:text-blue-600 transition-colors text-xl"
                title="Medium"
              >
                <i class="fab fa-medium"></i>
              </a>
              <a 
                href="mailto:connect@egabriel.dev" 
                class="text-gray-600 hover:text-blue-600 transition-colors text-xl"
                title="Email"
              >
                <i class="fas fa-envelope"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class HeroComponent {}