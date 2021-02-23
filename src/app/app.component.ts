import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
<<<<<<< HEAD
  title = 'HelloWorld';
=======
  title = 'Seja Bem Vindo!';

  constructor() { 
    setTimeout(() => {
      this.title = 'Sinta-se à vontade';
    }, 5000);
  }

  onValorAtualizadoNoContador(novoValor){
    console.log('onValorAtualizadoNoContador', novoValor);
  }
  
>>>>>>> 9b92f9701c05f28fe5e8d2ecce23d924783b6a8c
}
