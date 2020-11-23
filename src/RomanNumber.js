import { romanIntValues, romanNumbersTokens } from './constants'

export default class RomanNumber {
    constructor(value) {
        if (value === null || value.length === 0) {
            throw new Error("value required");
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
            throw new Error("invalid range");
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
    let res = 0;
    let successiveTokenCount = 0;
    let lastTokenValue = value.charAt(0);
    for (let i = 0; i < value.length; i++) {
        let token = value.charAt(i);
        let tokenValue = romanNumbersTokens.get(token);
        if (!tokenValue) {
            throw new Error("invalid value");
        }
        lastTokenValue === token ? successiveTokenCount++ : (successiveTokenCount = 0);
        if (successiveTokenCount > 3) {
            throw new Error("invalid value");
        }
        if (i === value.length - 1) {
            res += tokenValue;
            continue;
        }
        let nextToken = value.charAt(i + 1);
        let nextTokenValue = romanNumbersTokens.get(nextToken);
        if (nextTokenValue > tokenValue) {
            res += nextTokenValue - tokenValue;
            i++;
            continue;
        }
        res += tokenValue;
    }
    return res;
};

const convertToString = (value) => {
    if (!Number.isInteger(value) || !Number.isFinite(value) || isNaN(value)) {
        throw new Error("invalid value");
    }
    let res = "";
    let reminder = value;
    let intValues = Array.from(romanIntValues.keys());

    while (reminder > 0) {
        let i = 0;
        while (reminder - intValues[i] < 0 && i < intValues.length) {
            i++;
        }

        res += romanIntValues.get(intValues[i]);
        reminder -= intValues[i];
    }
    return res;
};