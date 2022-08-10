"use strict";
class Estudante {
    constructor(matricula, nome, prova, trabalho) {
        this.notaProva = Array();
        this.notaTrabalho = Array();
        this.matricula = matricula;
        this.nome = nome;
        this.NotaProva = prova;
        this.NotaTrabalho = trabalho;
    }
    get Matricula() {
        return this.matricula;
    }
    set Matricula(value) {
        this.matricula = value;
    }
    get Nome() {
        return this.nome;
    }
    set Nome(value) {
        if (value.length < 3) {
            throw new Error("O nome deve conter no mínimo 3 caracteres.");
        }
        this.nome = value;
    }
    get NotaProva() {
        return this.notaProva;
    }
    set NotaProva(value) {
        if (value.length > 4) {
            throw new Error('A pessoa estudante só pode possuir 4 notas de provas.');
        }
        this.notaProva = value;
    }
    get NotaTrabalho() {
        return this.notaTrabalho;
    }
    set NotaTrabalho(value) {
        if (value.length > 2) {
            throw new Error('A pessoa estudante só pode possuir 2 notas de trabalhos.');
        }
        this.notaTrabalho = value;
    }
    somaNota() {
        return [...this.NotaProva, ...this.notaTrabalho]
            .reduce((notaAnterior, nota) => {
            nota += notaAnterior;
            return nota;
        }, 0);
    }
    mediaNota() {
        const quantidateNotas = this.notaProva.length + this.NotaTrabalho.length;
        return Math.round(this.somaNota() / quantidateNotas);
    }
}
const estudante01 = new Estudante("2233", "Andrey", [1, 2, 3, 4], [4, 6]);
console.log(estudante01);
console.log(`Soma das notas: ${estudante01.somaNota()}`);
console.log(`Média das notas: ${estudante01.mediaNota()}`);
const estudante02 = new Estudante("7777", "Cortaesai", [2, 4, 2, 3], [6, 5]);
console.log(estudante02);
console.log(`Soma das notas: ${estudante02.somaNota()}`);
console.log(`Média das notas: ${estudante02.mediaNota()}`);
