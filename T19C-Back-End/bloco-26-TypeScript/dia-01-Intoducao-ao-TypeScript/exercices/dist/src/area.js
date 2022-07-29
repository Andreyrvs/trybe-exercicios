"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.units = void 0;
exports.units = ["km²", "hm²", "dam²", "m²", "dm²", "cm²", "mm²"];
function convert(value, fromUnit, toUnit) {
    const fromIndex = exports.units.indexOf(fromUnit);
    const toIndex = exports.units.indexOf(toUnit);
    const exponent = (toIndex - fromIndex);
    return value * Math.pow(100, exponent);
}
console.log("🚀 ~ convert", convert(12, "mm²", "cm²"));
