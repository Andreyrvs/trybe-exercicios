export const units = ["kg", "hg", "dag", "g", "dg", "cg", "mg"];

function convert(value: number, fromUnit: string, toUnit: string): number {
    const fromIndex = units.indexOf(fromUnit);
    const toIndex = units.indexOf(toUnit);
    const exponent = (toIndex - fromIndex);

    return value * Math.pow(10, exponent);
}

console.log("🚀 ~ convert", convert(10, "kg", "cg"))
