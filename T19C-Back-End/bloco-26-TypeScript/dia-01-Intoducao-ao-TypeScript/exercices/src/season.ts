import readline from 'readline-sync'
import Months from './Months'
import Seasons from './Seasons'

const monthsNames = Object.keys(Months)

const choiceMonth = readline.keyInSelect(monthsNames, 'Escolha um mês?')

const seasonsSouth = {
  [Seasons.OUTONO]: [Months.MARCO, Months.ABRIL, Months.MAIO, Months.JUNHO],
  [Seasons.INVERNO]: [Months.JUNHO, Months.JULHO, Months.AGOSTO, Months.SETEMBRO],
  [Seasons.PRIMAVERA]: [Months.SETEMBRO, Months.OUTUBRO, Months.NOVEMBRO, Months.DEZEMBRO],
  [Seasons.VERAO]: [Months.DEZEMBRO, Months.JANEIRO, Months.FEVEREIRO, Months.MARCO],
}

const seasonsNorth = {
  [Seasons.PRIMAVERA]: seasonsSouth[Seasons.OUTONO],
  [Seasons.VERAO]: seasonsSouth[Seasons.INVERNO],
  [Seasons.OUTONO]: seasonsSouth[Seasons.PRIMAVERA],
  [Seasons.INVERNO]: seasonsSouth[Seasons.VERAO],
}

const hemispheres = {
  "Norte": seasonsNorth, 
  "Sul": seasonsSouth,
}

const choiceHemispheres = readline.keyInSelect(
  Object.keys(hemispheres), "Escolha em hemisfério")

const month = Object.values(Months)[choiceMonth]

const hemisphere = Object.keys(hemispheres)[choiceHemispheres]

console.log(`Mês: ${month}`);
console.log(`Hemisfério: ${hemisphere}`);
console.log(`Estações:`)
const chosenHemisphereSeasons = Object.values(hemispheres)[choiceHemispheres];
Object.entries(chosenHemisphereSeasons).map((entry)=> {
  const seasons = entry[0];
  const months = entry[1];
  
  if (months.includes(month)) console.log(seasons)
})
