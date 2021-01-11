//Function replaceString to replace all instances of search parameter 
//with replaceWith parameter

const replaceString = (word, search, replaceWith) => {
    //using regex to look for all occurences of the search string
    const regex = new RegExp(search, 'g');

    //using the replace function to perform the replacement of the respective strings
    const newWord = word.replace(regex, replaceWith);
    console.log(newWord);
}


const changeCase = (sentence, Case) => {
    let newSentence = ''
    //using switch to run statement based on value of Case
    switch (true) {
        case Case === 'upper':
           newSentence = sentence.toUpperCase();
           break;
        default:
            newSentence = sentence.toLowerCase();
            break;
    }

    console.log(newSentence);
}



//Funtion trimEdges to remove all leading and trailing whitespaces in the sentence parameter
const trimEdges = (sentence) => {
    let newSentence = '';

    newSentence = sentence.trim();
    console.log(newSentence);
}



//substring does not change the original string. Also its swaps the values of the start and end if the former is greater than the later
//slice changes the original string
//substr doesn't change the original string
const extractString = (sentence, start, end) => {
    let extractedString = '';

    extractedString = sentence.slice(start, end);
    console.log(extractedString);
}



//return the initials of a name in uppercase
const getInitials = (name) => {
    let initials = [];

    let nameArray = name.split(' ');

    initials = nameArray.map(word => {
        return word.charAt(0).toUpperCase();
    });

    // console.log(nameArray);
    console.log(initials.join(''));
}
