"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.units = void 0;
exports.units = ["kg", "hg", "dag", "g", "dg", "cg", "mg"];
function convert(value, fromUnit, toUnit) {
    const fromIndex = exports.units.indexOf(fromUnit);
    const toIndex = exports.units.indexOf(toUnit);
    const exponent = (toIndex - fromIndex);
    return value * Math.pow(10, exponent);
}
console.log("🚀 ~ convert", convert(10, "kg", "cg"));
