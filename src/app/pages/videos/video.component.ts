    import { Component } from '@angular/core';
    import { VideoHeroComponent } from './components/video-hero.component';
    import { VideoGridComponent } from './components/video-grid.component';
    
    @Component({
      selector: 'app-video',
      standalone: true,
      imports: [VideoHeroComponent, VideoGridComponent],
      template: `
        <app-video-hero></app-video-hero>
        <app-video-grid></app-video-grid>
      `
    })
    export class VideoComponent {}