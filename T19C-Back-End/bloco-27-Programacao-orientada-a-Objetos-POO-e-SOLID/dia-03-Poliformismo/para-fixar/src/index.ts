abstract class Character {
  abstract talk(): void;
  abstract specialMove(): void;
 
}

class MelleCharacter extends Character {
  constructor(private _name: string, private _specialMove: string) {
    super();
  }
  talk(): void {
    console.log(`Hi, I'm ${this._name}`);
  }
  specialMove(): void {
    console.log(this._specialMove);
  }
}

class LongRangeCharacter extends Character {
  constructor(private _name: string, private _specialMove: string) {
    super();
  }
  talk(): void {
    console.log(`Hallo ${this._name}`);
  }
  specialMove(): void {
    console.log(this._specialMove);
  }
}

const characterPresentation = (character: Character) => {
  character.talk()
  character.specialMove()
}


const yoshi = new MelleCharacter('yoshi', 'Super Dragon');
const samus = new LongRangeCharacter('samus', 'Zero Lazer');

characterPresentation(yoshi)
characterPresentation(samus)