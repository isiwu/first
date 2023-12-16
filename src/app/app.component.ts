import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [CommonModule, RouterOutlet, RouterLink, HeaderComponent]
})
export class AppComponent {
  title = 'first';
  router = new Router();
  constructor() {
    this.router.navigateByUrl('auth/login');
    console.log(this.router.url);
  }
}
