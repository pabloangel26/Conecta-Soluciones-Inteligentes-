import { Component } from '@angular/core';
import { RedesComponent } from '../redes/redes.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RedesComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {}
