import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent  {
heores:string[]=['Spiderman','Ironman','Hulk','Thor','Capitán América'];
public heroeBorrado:string='';

borrarHeroe(){
  this.heroeBorrado = this.heores.shift()|| '';
}
}
