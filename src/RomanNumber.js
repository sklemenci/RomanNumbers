export default class RomanNumber {
    constructor(value) {
        if (typeof value === "string") {
            this.stringValue = value;
            this.intValue = convertToInt(value);
        }
        if (typeof value === "number") {
            this.intValue = value;
            this.stringValue = convertToString(value);
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
    return 0
}

const convertToString = (value) => {
    return ""
}