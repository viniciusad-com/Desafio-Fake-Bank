import { Conta } from "./conta.interface";
import { ContaCredito } from "./contaCredito.interface";
import { Usuario } from "./usuario.interface";

export interface LoginResponse {
    usuario: Usuario,
    conta: Conta,
    contaCredito: ContaCredito,
    token: string,
    dataInicio: string,
    dataFim: string,
}