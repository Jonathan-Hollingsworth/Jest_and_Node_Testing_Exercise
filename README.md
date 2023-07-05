# Jest_and_Node_Testing_Exercise

This system creates psudeo-randomly generated text using a 'Markov Machine' and the text you put in.  

## Using The Machine:

In order to use the machine you will need to open the terminal and use one to the following commands:  
1. `node makeText.js file path/to/file`
2. `node makeText.js url http://url.txt` (Url must end in '.txt')

## markov.test.js

The `markov.test.js` contains two simple test for seeing if the Markov Machine works properly  
- The machine should return a string of text when calling `instance.makeText()`
- The machine should limit the length of text by how many words are used when performing `instance.makeText()` (default is 100)
