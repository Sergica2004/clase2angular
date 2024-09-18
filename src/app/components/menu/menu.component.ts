import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import path from 'path';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']  // Corregido: 'styleUrl' -> 'styleUrls'
})
export class MenuComponent {
    menu = [
      { name: "Home", path: "/home" },
      { name: "About", path: "/about" },
      { name: "Contact", path: "/contact" },
      { name: "Publicaciones", path: "/post" },
      { name: "Personas", path: "/form"}
    ];
}
