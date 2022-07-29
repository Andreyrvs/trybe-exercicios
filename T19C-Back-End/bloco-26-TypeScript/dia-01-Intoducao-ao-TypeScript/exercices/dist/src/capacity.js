"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.units = void 0;
exports.units = ["kl", "hl", "dal", "l", "dl", "cl", "ml"];
function convert(value, fromUnit, toUnit) {
    const fromIndex = exports.units.indexOf(fromUnit);
    const toIndex = exports.units.indexOf(toUnit);
    const exponent = (toIndex - fromIndex);
    return value * Math.pow(10, exponent);
}
console.log("🚀 ~ convert", convert(99, "hl", "ml"));
