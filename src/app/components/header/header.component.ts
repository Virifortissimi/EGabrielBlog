import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavLinkComponent } from '../shared/nav-link/nav-link.component';
import { MenuToggleComponent } from '../shared/menu-toggle/menu-toggle.component';
import { SlideMenuComponent } from '../shared/slide-menu/slide-menu.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, NavLinkComponent, MenuToggleComponent, SlideMenuComponent],
  template: `
    <header class="fixed w-full bg-white/80 backdrop-blur-md py-6 px-6 z-50">
      <div class="container mx-auto flex justify-between items-center">
        <a routerLink="/" class="text-xl font-bold text-gray-900 hover:text-blue-600 transition-colors">
          eg.
        </a>
        
        <!-- Desktop Navigation -->
        <ul class="hidden lg:flex space-x-12">
        
          <li><a routerLink="/">HOME</a></li>
          <li><a routerLink="/about">ABOUT</a></li>
          <li><a routerLink="/features">FEATURES</a></li>
          <li><a routerLink="/projects">WORK</a></li>
          <li><a href="https://egabriel.hashnode.dev" target="_blank">WRITING</a></li>
          <li><a routerLink="/community">COMMUNITY</a></li>
          <li><a href="mailto:connect@egabriel.dev" target="_blank">CONTACT</a></li>
        </ul>

        <app-menu-toggle (toggle)="toggleMenu()"></app-menu-toggle>
      </div>

      <app-slide-menu 
        [isOpen]="isMenuOpen"
        (close)="closeMenu()"
      ></app-slide-menu>
    </header>
  `
})
export class HeaderComponent {
  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }
}