import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TextosService {
private textosUrl = 'assets/textos/textos.json'

  constructor(private http:HttpClient) { }
  getTextos(){
    return this.http.get(this.textosUrl)
  }
}
