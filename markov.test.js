const { MarkovMachine } = require('./markov')
const fs = require('fs')

describe('Markov Tests', () => {
    test('should return string', () => {
        mm = new MarkovMachine('the end is never the end is loading the end')
        expect(mm.makeText()).toEqual(expect.any(String))
    })

    test('should have character limit', () => {
        fs.readFile('./eggs.txt', 'utf8', function(error, data) {
            if (error) {
                processError(error, 1)
            }
            mm = new MarkovMachine(data)
            text1 = mm.makeText()
            let words1 = text1.split(/[ \r\n]+/);
            expect(words1.length).toBeLessThanOrEqual(100)
            text2 = mm.makeText(50)
            let words2 = text2.split(/[ \r\n]+/);
            expect(words2.length).toBeLessThanOrEqual(50)
            
        })
    })
})