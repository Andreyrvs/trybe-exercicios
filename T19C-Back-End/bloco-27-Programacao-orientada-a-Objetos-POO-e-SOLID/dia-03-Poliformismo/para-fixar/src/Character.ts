interface Character {
  name: string;
  specialMove: string;
}

interface DbCharacter extends Character {
  id: number;
}

interface IModel {
  create: (character: Character) => Promise<DbCharacter>;
  update: (id: number, character: Character) => Promise<DbCharacter>;
  delete: (id: number) => Promise<Boolean>
  getAll: () => Promise<DbCharacter[]>
  getById: (id: number) => Promise<DbCharacter>
}

const db: DbCharacter[] = [];

class LocalDbModel implements IModel {
  create: (character: Character) => Promise<DbCharacter>;
  update: (id: number, character: Character) => Promise<DbCharacter>;
  delete: (id: number) => Promise<Boolean>;
  getAll: () => Promise<DbCharacter[]>;
  getById: (id: number) => Promise<DbCharacter>;


  constructor(parameters) {
    
  }
}

class CharacterService {
  constructor(parameters) {
    
  }
}

class MockedDbModel implements IModel {
  create: void;
  read: void;
  update: void;
  delete: void;
  constructor(parameters) {
    
  }
}