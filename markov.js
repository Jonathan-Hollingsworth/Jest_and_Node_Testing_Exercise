/** Textual markov chain generator */


class MarkovMachine {

  /** build markov machine; read in text.*/

  constructor(text) {
    let words = text.split(/[ \r\n]+/);
    this.words = words.filter(c => c !== "");
    this.makeChains();
  }

  /** set markov chains:
   *
   *  for text of "the cat in the hat", chains will be
   *  {"the": ["cat", "hat"], "cat": ["in"], "in": ["the"], "hat": [null]} */

  makeChains() {
    this.chains = {}
    for (let i = 0; i < this.words.length; i++) {
      const word = this.words[i];
      if (i === this.words.length - 1) {
        if (this.chains[word]) {
          this.chains[word].push(null)
        } else {
          this.chains[word] = [null]
        }
      } else {
        if (this.chains[word]) {
          this.chains[word].push(this.words[i + 1])
        } else {
          this.chains[word] = [this.words[i + 1]]
        }
      }
    }
  }


  /** return random text from chains */

  makeText(numWords = 100) {
    let word = this.words[Math.floor(Math.random() * this.words.length)]
    let text = word
    for (let i = 1; i < numWords-1; i++) {
      word = this.chains[word][Math.floor(Math.random() * this.chains[word].length)]
      if (word === null) {
        return text
      } else {
        text += ` ${word}`
      }
    }
    return text
  }
}

module.exports = { MarkovMachine }