import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-exercicio-contador',
  templateUrl: './exercicio-contador.component.html',
  styleUrls: ['./exercicio-contador.component.scss']
})
export class ExercicioContadorComponent {

  @Input() valor = 0;
  @Output() valorMudou = new EventEmitter();

  incrementar() {
    this.valor++;
    this.valorMudou.emit(this.valor);
  }

  decrementar() {
    this.valor--;
    this.valorMudou.emit(this.valor);
  }

}
