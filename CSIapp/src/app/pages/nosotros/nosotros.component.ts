import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { TextosService } from '../../servicios/textos/textos.service';

@Component({
  selector: 'app-nosotros',
  standalone: true,
  imports: [HttpClientModule],
  providers:[TextosService],
  templateUrl: './nosotros.component.html',
  styleUrl: './nosotros.component.css'
})
export class NosotrosComponent {
  textos: any;
  constructor(
    private textosService:TextosService
  ){
    this.textosService.getTextos().subscribe(info => this.textos = info)
  }

}
