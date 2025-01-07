import { Component } from '@angular/core';
import { CommunityHeroComponent } from './components/community-hero.component';
import { CommunityGridComponent } from './components/community-grid.component';

@Component({
  selector: 'app-community',
  standalone: true,
  imports: [CommunityHeroComponent, CommunityGridComponent],
  template: `
    <app-community-hero></app-community-hero>
    <app-community-grid></app-community-grid>
  `
})
export class CommunityComponent {}