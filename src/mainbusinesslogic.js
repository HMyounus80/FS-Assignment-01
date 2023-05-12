

// Create a new for a Random number generator
 const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}



const countCharacters = (str) => {
    const charactersObj = {
        lettersCount: 0,
        numbersCount: 0,
        symbolsCount: 0
        
    };

    for (let i = 0; i < str.length; i++) {
        if (str[i].match(/[a-z]/i)) {
            charactersObj.lettersCount++;
        } else if (str[i].match(/[0-9]/)) {
            charactersObj.numbersCount++;
        } else {
            charactersObj.symbolsCount++;
        }
    }

    return charactersObj;
}

module.exports = {getRandomNumber,countCharacters}