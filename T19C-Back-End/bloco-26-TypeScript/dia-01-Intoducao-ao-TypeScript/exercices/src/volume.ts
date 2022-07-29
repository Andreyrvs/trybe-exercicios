export const units = ["km³", "hm³", "dam³", "m³", "dm³", "cm³", "mm³"];

function convert(value: number, fromUnit: string, toUnit: string): number {
    const fromIndex = units.indexOf(fromUnit);
    const toIndex = units.indexOf(toUnit);
    const exponent = (toIndex - fromIndex);

    return value * Math.pow(1000, exponent);
}
console.log("🚀 ~ convert", convert(431, "km²", "dm²"))