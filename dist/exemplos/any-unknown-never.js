"use strict";
// let anyEstaDeVolta = any;
// anyEstaDeVolta = 5;
// let stringTest: string = 'verificar';
// stringTest = anyEstaDeVolta;
// let unknownValor: unknown;
// unknownValor = 3;
// unknownValor = 'opa';
// unknownValor = true;
// unknownValor = 'vai sim';
// let stringTest2: string = 'agora vai';
// stringTest2 = unknownValor;
// if (typeof unknownValor === 'string') {
//     stringTest2 = unknownValor;
// }
function jogaErro(erro, codigo) {
    throw { error: erro, code: codigo };
}
jogaErro('deu erro', 500);
