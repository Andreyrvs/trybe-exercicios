class Estudante {
  private matricula: string;
  private nome: string;
  private notaProva: number[] = Array();
  private notaTrabalho: number[] = Array();


  constructor(matricula: string, nome: string, prova: number[], trabalho: number[]) {
    this.matricula = matricula
    this.nome = nome
    this.NotaProva = prova
    this.NotaTrabalho = trabalho
  }

  
  public get Matricula(): string {
    return this.matricula
  }
  
  
  public set Matricula(value : string) {
    this.matricula = value;
  }
  
  public get Nome(): string {
    return this.nome
  }
  
  
  public set Nome(value : string) {
    if (value.length < 3) {
      throw new Error("O nome deve conter no mínimo 3 caracteres.");
    }
    this.nome = value;
  }

  public get NotaProva(): number[] {
    return this.notaProva
  }
  
  
  public set NotaProva(value : number[]) {
    if( value.length > 4) {
      throw new Error('A pessoa estudante só pode possuir 4 notas de provas.');
    }
    this.notaProva = value;
  }

  public get NotaTrabalho(): number[] {
    return this.notaTrabalho
  }
  
  
  public set NotaTrabalho(value : number[]) {
    if (value.length > 2) {
      throw new Error(
        'A pessoa estudante só pode possuir 2 notas de trabalhos.',
      );
    }
    this.notaTrabalho = value;
  }

  public somaNota(): number{
    return [...this.NotaProva, ...this.notaTrabalho]
      .reduce((notaAnterior, nota) => {
        nota += notaAnterior

        return nota
      }, 0)
  }

  public mediaNota(): number {
    const quantidateNotas = this.notaProva.length + this.NotaTrabalho.length
    return Math.round(this.somaNota() / quantidateNotas)
  }
}

const estudante01 = new Estudante("2233", "Andrey", [1,2,3,4], [4,6])
console.log(estudante01);
console.log(`Soma das notas: ${estudante01.somaNota()}`);
console.log(`Média das notas: ${estudante01.mediaNota()}`);


const estudante02 = new Estudante("7777", "Cortaesai", [2,4,2,3], [6,5])

console.log(estudante02);
console.log(`Soma das notas: ${estudante02.somaNota()}`);
console.log(`Média das notas: ${estudante02.mediaNota()}`);