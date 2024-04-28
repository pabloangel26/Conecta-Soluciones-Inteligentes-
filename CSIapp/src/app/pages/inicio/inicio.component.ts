import { Component} from '@angular/core';
import { TextosService } from '../../servicios/textos/textos.service';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [HttpClientModule],
  providers:[TextosService],
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
  textos: any;
  constructor(
    private textosService:TextosService
  ){
    this.textosService.getTextos().subscribe(info => this.textos = info)
  }
}
