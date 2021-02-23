export interface Usuario {
    id: number,
    cpf: string,
    nome: string,
    login: string,
    senha: string,
    senhaTemporaria: string,
    redefinirSenha: boolean,
}