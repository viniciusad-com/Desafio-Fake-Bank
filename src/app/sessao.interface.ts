import { Conta } from './conta.interface';
import { Usuario } from './usuario.interface';

export interface Sessao {
    conta: Conta,
    contaCredito: Conta,
    dataFim: string,
    dataInicio: string,
    token: string,
    usuario: Usuario
}