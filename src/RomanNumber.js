const romanNumbersTokens = new Map();
romanNumbersTokens.set("M", 1000);
romanNumbersTokens.set("D", 500);
romanNumbersTokens.set("C", 100);
romanNumbersTokens.set("L", 50);
romanNumbersTokens.set("X", 10);
romanNumbersTokens.set("V", 5);
romanNumbersTokens.set("I", 1);

export default class RomanNumber {
    constructor(value) {
        if (value === null || value.length === 0) {
            throw new Error('value required')
        }
        if (typeof value === "string") {
            this.stringValue = value;
            this.intValue = convertToInt(value);
        }
        if (typeof value === "number") {
            this.intValue = value;
            this.stringValue = convertToString(value);
        }
        if (this.intValue < 1 || this.intValue > 3999) {
            throw new Error('invalid range')
        }
    }
    toString() {
        return this.stringValue;
    }
    toInt() {
        return this.intValue;
    }
}


const convertToInt = (value) => {
    let res = 0
    let successiveTokenCount = 0
    let lastTokenValue = value.charAt(0)
    for (let i = 0; i < value.length; i++) {
        let token = value.charAt(i)
        let tokenValue = romanNumbersTokens.get(token)
        if (!tokenValue) {
            throw new Error('invalid value')
        }
        lastTokenValue === token ? successiveTokenCount++ : successiveTokenCount = 0
        if (successiveTokenCount > 3) {
            throw new Error('invalid value')
        }
        if (i === value.length - 1) {
            res += tokenValue;
            continue;
        }
        let nextToken = value.charAt(i + 1)
        let nextTokenValue = romanNumbersTokens.get(nextToken)
        if (nextTokenValue > tokenValue) {
            res += nextTokenValue - tokenValue
            i++
            continue
        }
        res += tokenValue
    }
    return res
}

const convertToString = (value) => {
    let res = ""
    return res
}