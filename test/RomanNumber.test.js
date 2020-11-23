import { it } from '@jest/globals'
import RomanNumber from '../src/RomanNumber'

const valueRequiredMessage = 'value required'
const invalidRangeMessage = 'invalid range'
const invalidValueMessage = 'invalid value'

/*
//mandatory test cases
it("should throw 'value required' for null", () => {
    expect(() => { new RomanNumber(null) }).toThrow(valueRequiredMessage)
})

it("should throw 'value required' for ''", () => {
    expect(() => { new RomanNumber('') }).toThrow(valueRequiredMessage)
})

it("should throw 'invalid range' for 0", () => {
    expect(() => { new RomanNumber(0) }).toThrow(invalidRangeMessage)
})

it("should return 'I' for 1", () => {
    expect(new RomanNumber(1).toString()).toBe('I')
})


it("should return 'III' for 3", () => {
    expect(new RomanNumber(3).toString()).toBe('III')

})

it("should return 'IV' for 4", () => {
    expect(new RomanNumber(4).toInt()).toBe('IV')
})

it("should return 'V' for 5", () => {
    expect(new RomanNumber(5).toInt()).toBe('V')

})
*/

it("should return 1 for 'I' ", () => {
        expect(new RomanNumber('I').toString()).toBe(1)
    })
    /*

    it("should return 3 for 'III' ", () => {
        expect(new RomanNumber('III').toString()).toBe(3)
    })

    it("should throw 'invalid value' for 'IIII' ", () => {
        expect(() => { new RomanNumber('IIII') }).toThrow(invalidValueMessage)
    })

    it("should return 4 for 'IV' ", () => {
        expect(new RomanNumber('IV').toString()).toBe(4)

    })
    it("should return 5 for 'V' ", () => {
        expect(new RomanNumber('V').toString()).toBe(5)
    })

    it("should return 'MCMLXVIII' for 1968 ", () => {
        expect(new RomanNumber(1968).toString()).toBe('MCMLXVIII')

    })

    it("should return 'MCDLXXIII' for 1473 ", () => {
        expect(new RomanNumber(1473).toString()).toBe('MCDLXXIII')
    })

    it("should return 'MMIM' for 2999 ", () => {
        expect(new RomanNumber(2999).toString()).toBe('MIM')
    })

    it("should return 'MMM' for 3000 ", () => {
        expect(new RomanNumber(3000).toString()).toBe('MMM')

    })

    it("should throw 'invalid range' for 10000 ", () => {
        expect(() => { new RomanNumber(10000) }).toThrow(invalidRangeMessage)
    })

    it("should return 429 for 'CDXXIX'  ", () => {
        expect(new RomanNumber('CDXXIX').toString()).toBe(429)
    })

    it("should throw 'invalid value' for 'CD1X'  ", () => {
        expect(() => { new RomanNumber('CD1X') }).toThrow(invalidValueMessage)

    })

    it("should throw 'invalid value' for 'error'  ", () => {
        expect(() => { new RomanNumber('error') }).toThrow(invalidValueMessage)
    })

    it("should return 1473 for 'MCDLXXXII'  ", () => {
        expect(new RomanNumber('MCDLXXXII').toString()).toBe(1473)
    })


    it("should return 1980 for 'MCMLXXX'  ", () => {
        expect(new RomanNumber('MCMLXXX').toString()).toBe(1980)
    })

    it("should throw 'invalid value' for 'MMMMCMXCIX'  ", () => {
        expect(() => { new RomanNumber('MMMMCMXCIX') }).toThrow(invalidValueMessage)
    })

    it("should throw 'invalid value' for 'MMMMDMXCIX'  ", () => {
        expect(() => { new RomanNumber('MMMMCMXCIX') }).toThrow(invalidValueMessage)
    })

    */

// null, ‘’, 0, 1, 3, 4, 5, ‘I’, ‘III’, ‘IIII’, ‘IV’, ‘V’, 1968, ‘1473’, 2999, 3000, 10000, ‘CDXXIX’, ‘CD1X’,
//‘error’, ‘MCDLXXXII’, ‘MCMLXXX’, ‘MMMMCMXCIX’, ‘MMMMDMXCIX’