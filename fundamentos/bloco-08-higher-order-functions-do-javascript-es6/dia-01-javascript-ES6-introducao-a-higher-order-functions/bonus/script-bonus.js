const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 13,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

const dragonDano = () => {
  const danoGerado = Math.floor(
    Math.random() * (dragon.strength - 15 + 1) + 15
  );
  return danoGerado;
};
// console.log(dragonDano());

const warriorDano = () => {
  const danoGerado = Math.floor(
    Math.random() *
      (warrior.strength * warrior.weaponDmg - warrior.strength + 1) +
      warrior.strength
  );
  return danoGerado;
};
// console.log(warriorDano());

const mageDano = () => {
  let danoGerado = Math.floor(
    Math.random() * (mage.intelligence * 2 - mage.intelligence + 1) +
      mage.intelligence
  );

  let manaTurno = 15;
  let manaGasta = mage.mana - manaTurno;

  if (mage.mana < 15) {
    danoGerado = 0
    manaGasta = 'Não possui mana suficiente';
    return { danoGerado, manaGasta: mage.mana };
  }

  return { danoGerado, manaGasta, };
};
// console.log(mageDano());

// ------ Parte 2 ------

const gameActions = {
  turnoWarrior: (callback) => {
    const salvaDano = dragon.healthPoints - callback();
    // Não esta atualizando a Vida do dragão
    // dragon.healthPoints = salvaDano;
    // warrior.damage = callback()
    return {
      vidaDragao: dragon.healthPoints = salvaDano,
      danoWarrior: warrior.damage = callback(),
    };
  },
  turnoMage: (callback) => {
    // const salvaDano = dragon.healthPoints - callback();
    // Não está salvando os atributos
    // dragon.healthPoints = salvaDano
    // mage.damage = callback()
    // mage.mana = callback() - manaTurno
    // const manaTurno = 15;
    return {
      vidaDragao: dragon.healthPoints - callback().danoGerado,
      danoMago: mage.damage = callback().danoGerado,
      mana: mage.mana = callback().manaGasta,
    };
  },
  turnoDragon: (callback) => {
    const vidaWarrior = warrior.healthPoints - callback();
    const vidaMage = mage.healthPoints - callback();
    dragon.damage = callback();

    return {
      vidaWarrior: vidaWarrior,
      vidaMage: vidaMage,
      danoDragon: dragon.damage = callback(),
    };
  },
  turnoFinal: () => {
    battleMembers.mage = gameActions.turnoMage(mageDano);
    battleMembers.warrior = gameActions.turnoWarrior(warriorDano);
    battleMembers.dragon = gameActions.turnoDragon(dragonDano);
    return battleMembers;
  },
};

// console.log(gameActions.turnoWarrior(warriorDano));
// console.log(gameActions.turnoMage(mageDano));
// console.log(gameActions.turnoDragon(dragonDano));
console.log(gameActions.turnoFinal());
