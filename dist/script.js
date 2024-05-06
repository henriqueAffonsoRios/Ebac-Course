"use strict";

var alunos = [{
  nome: "João",
  nota: 8
}, {
  nome: "Maria",
  nota: 6
}, {
  nome: "Pedro",
  nota: 4
}, {
  nome: "Ana",
  nota: 7
}, {
  nome: "Carlos",
  nota: 9
}];
var alunosAprovados = function alunosAprovados(alunos) {
  return alunos.filter(function (aluno) {
    return aluno.nota >= 6;
  });
};
console.log(alunosAprovados(alunos));