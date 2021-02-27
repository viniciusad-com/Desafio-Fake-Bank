import { Lancamento } from './lancamento.interface';

export interface ContaDto {
    id: number,
    lancamentos: Lancamento[],
    saldo: number
}