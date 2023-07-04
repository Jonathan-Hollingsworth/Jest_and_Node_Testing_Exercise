/** Command-line tool to generate Markov text. */

const { MarkovMachine } = require('./markov')
const fs = require('fs')
const axios = require('axios')

function processError(error, num) {
    console.error(error)
    process.exit(num)
}

function fileMarkov(file) {
    fs.readFile(file, 'utf8', function(error, data) {
        if (error) {
            processError(error, 1)
        }
        mm = new MarkovMachine(data)
        console.log(mm.makeText())
    })
}

function webMarkov(url) {
    try {
        axios.get(url).then(resp => {
            mm = new MarkovMachine(resp.data)
            console.log(mm.makeText())})
    } catch (error) {
        processError(error, 1)
    }
}

switch (process.argv[2]) {
    case 'file':
        fileMarkov(process.argv[3])
        break;
    case 'url':
        if (process.argv[3].includes('.txt')) {
            webMarkov(process.argv[3])
        } else {
            processError("URL must end in '.txt'", 3)
        }
        break
    default:
        processError("Argument type must be provided before argument", 2)
        break;
}