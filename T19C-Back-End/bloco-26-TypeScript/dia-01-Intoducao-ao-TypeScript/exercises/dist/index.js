"use strict";
// ./index.ts
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const Exercise = __importStar(require("./exercises"));
console.log(Exercise.greeter('Maria'));
console.log(Exercise.personAge('Maria', 40));
console.log(`A soma do array é igual a ${Exercise.sumArray([3, 6, 9])}`);
console.log(`Triângulo de base 10cm e altura 25cm: ${Exercise.triangle(10, 25)}cm²`);
console.log(`Triângulo de base 5cm e altura 30cm: ${Exercise.triangle(5, 30)}cm²`);
console.log(`Triângulo de base 100cm e altura 200cm: ${Exercise.triangle(100, 200)}cm²`);
console.log(`Quadrado de lado 10cm: ${Exercise.square(10)}cm²`);
console.log(`Quadrado de lado 5cm: ${Exercise.square(5)}cm²`);
console.log(`Quadrado de lado 100cm: ${Exercise.square(100)}cm²`);
console.log(`Retângulo de base 10cm e altura 25cm: ${Exercise.rectangle(10, 25)}cm²`);
console.log(`Retângulo de base 5cm e altura 30cm: ${Exercise.rectangle(5, 30)}cm²`);
console.log(`Retângulo de base 100cm e altura 200cm: ${Exercise.rectangle(100, 200)}cm²`);
console.log(`🚀 Losango com Diagonal Maior(D) = 32cm e Diagonal menor(d) = 18cm; Área: ${Exercise.rhombus(32, 18)}cm²`);
console.log(`🚀 Losango com Diagonal Maior(D) = 200cm e Diagonal menor(d) = 50cm; Área: ${Exercise.rhombus(200, 50)}cm²`);
console.log(`🚀 Losango com Diagonal Maior(D) = 75cm e Diagonal menor(d) = 25cm; Área: ${Exercise.rhombus(75, 18)}cm²`);
console.log(`⌛ Trapezio área com Base maior(B) = 100cm e Base menor(b) = 70cm Altura = 50; Área: ${Exercise.trapezoid(100, 70, 50)}cm²`);
console.log(`⌛ Trapezio área com Base maior(B) = 75cm e Base menor(b) = 50cm Altura = 35; Área: ${Exercise.trapezoid(75, 50, 35)}cm²`);
console.log(`⌛ Trapezio área com Base maior(B) = 150cm e Base menor(b) = 120cm Altura = 80; Área: ${Exercise.trapezoid(150, 120, 80)}cm²`);
