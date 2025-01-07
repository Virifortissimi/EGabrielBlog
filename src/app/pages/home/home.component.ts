import { Component } from '@angular/core';
import { HeroComponent } from '../../components/hero/hero.component';
import { ProjectsGridComponent } from '../../components/projects-grid/projects-grid.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroComponent, ProjectsGridComponent],
  template: `
    <app-hero></app-hero>
    <app-projects-grid></app-projects-grid>
  `
})
export class HomeComponent {}