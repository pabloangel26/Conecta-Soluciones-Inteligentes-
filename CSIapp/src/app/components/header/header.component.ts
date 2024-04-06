import { Component } from '@angular/core';
import { RedesComponent } from '../redes/redes.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RedesComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {}
