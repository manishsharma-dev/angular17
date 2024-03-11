import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular17';
  @HostListener('window:mousedown', ['$event'])
  handle(evt: MouseEvent) {
    switch (evt.button) {
      case 0:          
          break;
      case 1:      
          break;
      case 2:      
        evt.preventDefault();
        evt.stopImmediatePropagation();
          break;
  }
  }
}
