import Teacher from './Teacher'

export default class Evaluation {
  private _teacher: Teacher

  constructor(teacher: Teacher, private _score: number, private _type: string) {
    this._teacher = teacher
    this.score = _score
    this.type = _type
  }

  public get teacher() : Teacher {
    return this._teacher
  }

  public set teacher(value : Teacher) {
    this._teacher = value;
  }

  public get score() : number {
    return this._score
  }

  public set score(value : number) {
    const positiveValue = 0
    if (value < positiveValue) {
      throw new Error("A pontuação não pode ser negativa");
    } 
    
    if (this.type === 'prova' && value > 25) {
      throw new Error('A pontuação deve ser menor que 25 pontos.');
    }

    if (this.type === 'trabalho' && value > 50) {
      throw new Error('A pontuação deve ser menor que 50 pontos.');
    }

    this._score = value;
  }
  
  public get type() : string {
    return this._type
  }

  
  public set type(value : string) {
    if (!['prova', 'trabalho'].includes(value)) {
      throw new Error('O tipo de avaliação não é válido.');
    }
    this._type = value;
  }
}