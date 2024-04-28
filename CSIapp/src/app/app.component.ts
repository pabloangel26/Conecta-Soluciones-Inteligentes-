import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { RedesComponent } from './components/redes/redes.component';

import { ContactoComponent } from './pages/contacto/contacto.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { InicioComponent } from './pages/inicio/inicio.component';





@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HeaderComponent,FooterComponent,RedesComponent,ContactoComponent,NosotrosComponent,InicioComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'CSIapp';
}
