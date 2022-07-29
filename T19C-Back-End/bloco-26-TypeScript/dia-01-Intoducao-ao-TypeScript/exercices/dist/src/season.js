"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_sync_1 = __importDefault(require("readline-sync"));
const Months_1 = __importDefault(require("./Months"));
const Seasons_1 = __importDefault(require("./Seasons"));
const monthsNames = Object.keys(Months_1.default);
const choiceMonth = readline_sync_1.default.keyInSelect(monthsNames, 'Escolha um mês?');
const seasonsSouth = {
    [Seasons_1.default.OUTONO]: [Months_1.default.MARCO, Months_1.default.ABRIL, Months_1.default.MAIO, Months_1.default.JUNHO],
    [Seasons_1.default.INVERNO]: [Months_1.default.JUNHO, Months_1.default.JULHO, Months_1.default.AGOSTO, Months_1.default.SETEMBRO],
    [Seasons_1.default.PRIMAVERA]: [Months_1.default.SETEMBRO, Months_1.default.OUTUBRO, Months_1.default.NOVEMBRO, Months_1.default.DEZEMBRO],
    [Seasons_1.default.VERAO]: [Months_1.default.DEZEMBRO, Months_1.default.JANEIRO, Months_1.default.FEVEREIRO, Months_1.default.MARCO],
};
const seasonsNorth = {
    [Seasons_1.default.PRIMAVERA]: seasonsSouth[Seasons_1.default.OUTONO],
    [Seasons_1.default.VERAO]: seasonsSouth[Seasons_1.default.INVERNO],
    [Seasons_1.default.OUTONO]: seasonsSouth[Seasons_1.default.PRIMAVERA],
    [Seasons_1.default.INVERNO]: seasonsSouth[Seasons_1.default.VERAO],
};
const hemispheres = {
    "Norte": seasonsNorth,
    "Sul": seasonsSouth,
};
const choiceHemispheres = readline_sync_1.default.keyInSelect(Object.keys(hemispheres), "Escolha em hemisfério");
const month = Object.values(Months_1.default)[choiceMonth];
const hemisphere = Object.keys(hemispheres)[choiceHemispheres];
console.log(`Mês: ${month}`);
console.log(`Hemisfério: ${hemisphere}`);
console.log(`Estações:`);
const chosenHemisphereSeasons = Object.values(hemispheres)[choiceHemispheres];
Object.entries(chosenHemisphereSeasons).map((entry) => {
    const seasons = entry[0];
    const months = entry[1];
    if (months.includes(month))
        console.log(seasons);
});
