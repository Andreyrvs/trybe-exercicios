"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.units = void 0;
exports.units = ["km³", "hm³", "dam³", "m³", "dm³", "cm³", "mm³"];
function convert(value, fromUnit, toUnit) {
    const fromIndex = exports.units.indexOf(fromUnit);
    const toIndex = exports.units.indexOf(toUnit);
    const exponent = (toIndex - fromIndex);
    return value * Math.pow(1000, exponent);
}
console.log("🚀 ~ convert", convert(431, "km²", "dm²"));
