import { Component } from '@angular/core';
import { FeaturesHeroComponent } from './components/features-hero.component';
import { FeaturesGridComponent } from './components/features-grid.component';

@Component({
  selector: 'app-features',
  standalone: true,
  imports: [FeaturesHeroComponent, FeaturesGridComponent],
  template: `
    <app-features-hero></app-features-hero>
    <app-features-grid></app-features-grid>
  `
})
export class FeaturesComponent {}