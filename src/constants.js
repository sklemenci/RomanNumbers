const romanNumbersTokens = new Map();
romanNumbersTokens.set("M", 1000);
romanNumbersTokens.set("D", 500);
romanNumbersTokens.set("C", 100);
romanNumbersTokens.set("L", 50);
romanNumbersTokens.set("X", 10);
romanNumbersTokens.set("V", 5);
romanNumbersTokens.set("I", 1);

const romanIntValues = new Map();

romanIntValues.set(1000, "M");
romanIntValues.set(900, "CM");
romanIntValues.set(500, "D");
romanIntValues.set(400, "CD");
romanIntValues.set(100, "C");
romanIntValues.set(90, "XC");
romanIntValues.set(50, "L");
romanIntValues.set(40, "XL");
romanIntValues.set(10, "X");
romanIntValues.set(9, "IX");
romanIntValues.set(5, "V");
romanIntValues.set(4, "IV");
romanIntValues.set(1, "I");

export {
    romanIntValues,
    romanNumbersTokens
}