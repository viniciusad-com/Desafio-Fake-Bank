import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'HelloWorld';

  constructor() { 
    setTimeout(() => {
      this.title = 'Sinta-se à vontade';
    }, 5000);
  }

  onValorAtualizadoNoContador(novoValor){
    console.log('onValorAtualizadoNoContador', novoValor);
  }
  
}
