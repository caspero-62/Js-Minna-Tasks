const input = 'maDam aYO Who Stays In oYo Was in a Bus to Lagos whEn Her Son Sold the rAceCar';

const returnExpectedOutput = (input) => {
    //function to convert input string to Array of words
    const stringToArray = (input) => {
        return input.trim().split(' ')
    };
    
    //function to convert to lowercase
    const toLower = (string) => {
        return string.toLowerCase();
    }
    
    //function to convert to Uppercase
    const toUpper = (string) => {
        return string.toUpperCase();
    }
    
    const sentence = stringToArray(input);
    
    console.log(sentence);
    
    let output = {};
    
    //Get the opposite case for letters in the words of the array and filter
    //such that the first letter of each word is uppercased
    const upperCaseArray = sentence
    .map(word => {
        return word.replace(/([a-z]+)|([A-Z]+)/g, (match, chr) => {
            return chr ? toUpper(match) : toLower(match)
        });
    }).filter(word => word[0] === toUpper(word[0]));
    
    console.log(upperCaseArray);
    
    //Get words out of the uppercased array ending with 'ing
    const ing  = upperCaseArray.map(word => toLower(word)).filter(word => {
        return /ing$/.test(word);
    })
    
    //Get words out of the uppercased array that are palindromes
    const palindrome = upperCaseArray.map(word => toLower(word)).filter(word => {
       return  word === word.split('').reverse().join('');
    })
    
    output.uppercased = upperCaseArray;
    output.ing = ing;
    output.palindrome = palindrome;
    
    console.log(output);
}

returnExpectedOutput(input);

