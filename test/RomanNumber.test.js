import { it } from '@jest/globals'
import RomanNumber from '../src/RomanNumber'


//mandatory test cases
it("should throw 'value required' for null", () => {
    expect(() => { new RomanNumber(null) }).throw('value required')
})

it("should throw 'value required' for ''", () => {

})

it("should throw 'invalid range' for 0", () => {

})

it("should return 'I' for 1", () => {

})

it("should return 'III' for 3", () => {

})

it("should return 'IV' for 4", () => {

})

it("should return 'V' for 5", () => {

})

it("should return 1 for 'I' ", () => {

})

it("should return 3 for 'III' ", () => {

})

it("should throw 'invalid value' for 'IIII' ", () => {

})

it("should return 4 for 'IV' ", () => {

})
it("should return 5 for 'V' ", () => {

})

it("should return 'MCMLXVIII' for 1968 ", () => {

})

it("should return 'MCDLXXIII' for 1473 ", () => {

})

it("should return 'MMIM' for 2999 ", () => {

})

it("should return 'MMM' for 3000 ", () => {

})

it("should throw 'invalid range' for 10000 ", () => {

})

it("should return 429 for 'CDXXIX'  ", () => {

})

it("should throw 'invalid value' for 'CD1X'  ", () => {

})

it("should throw 'invalid value' for 'error'  ", () => {

})

it("should return 1473 for 'MCDLXXXII'  ", () => {

})

it("should return 1980 for 'MCMLXXX'  ", () => {

})

it("should throw 'invalid range' for 'MMMMCMXCIX'  ", () => {

})

it("should throw 'invalid range' for 'MMMMDMXCIX'  ", () => {

})



// null, ‘’, 0, 1, 3, 4, 5, ‘I’, ‘III’, ‘IIII’, ‘IV’, ‘V’, 1968, ‘1473’, 2999, 3000, 10000, ‘CDXXIX’, ‘CD1X’,
//‘error’, ‘MCDLXXXII’, ‘MCMLXXX’, ‘MMMMCMXCIX’, ‘MMMMDMXCIX’