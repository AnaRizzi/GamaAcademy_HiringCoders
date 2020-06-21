"use strict";
//Boolean:
var contaPaga = false;
//Number:
var idade = 20;
//String:
var nome = 'Ana';
//Array:
var idades = [0, 1, 2];
var idades2 = [2, 4, 6];
//Tuple:
var jogadores;
jogadores = ['Fulano', 'Ciclano', 'Beltrano'];
//Enum:
var StatusAprovacao;
(function (StatusAprovacao) {
    StatusAprovacao["Aprovado"] = "001";
    StatusAprovacao["Pendente"] = "002";
    StatusAprovacao["Rejeitado"] = "003";
})(StatusAprovacao || (StatusAprovacao = {}));
var estado = StatusAprovacao.Aprovado;
//Any:
var retorno = [123, 'Fulano', false];
//Void:
function printar(msg) {
    console.log(msg);
}
//null e undefined:
var n = null;
var u = undefined;
//Object:
function criar(objeto) {
    //...
}
criar({
    propriedade: 1
});
//Never:
function loopInfinito() {
    while (true) {
        //...
    }
}
function erro(msg) {
    throw new Error(msg);
}
//Union types:
function exibirNota(nota) {
    console.log('nota: ' + nota);
}
//Alias:
var funcionarios = ['ana', 'bia', 'fulano'];
var funcionarios2 = ['ana', 'bia', 'fulano'];
var funcs = [
    {
        nome: 'ana',
        sobrenome: 'silva',
        dataNasc: new Date()
    },
    {
        nome: 'fulano',
        sobrenome: 'silva',
        dataNasc: new Date()
    }
];
for (var _i = 0, funcs_1 = funcs; _i < funcs_1.length; _i++) {
    var funcionario = funcs_1[_i];
    console.log('Nome:', funcionario.nome);
}
var pessoa = {
    nome: 'Ana',
    tel1: '1223242'
};
//Type Assertion:
var novaIdade = 20;
idade.toString();
var input = document.getElementById('numero1');
var input2 = document.getElementById('numero1');
console.log(input.value);
