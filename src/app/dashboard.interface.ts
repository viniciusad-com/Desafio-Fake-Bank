import { Lancamento } from './lancamento.interface';

export interface Dashboard {
    contaBanco: {
        id: number,
        lancamentos: Lancamento[],
        saldo: number
    },
    contaCredito: {
        id: number,
        lancamentos: Lancamento[],
        saldo: number
    },
}