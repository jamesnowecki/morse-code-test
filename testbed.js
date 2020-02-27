const morseCode = {
    a: '._***',
    b: '_...***',
    c: '_._.***',
    d: '_..***',
    e: '.***',
    f: '.._.***',
    g: '__.***',
    h: '....***',
    i: '..***',
    j: '.___***',
    k: '_._***',
    l: '._..***',
    m: '__***',
    n: '_.***',
    o: '___***',
    p: '.__.***',
    q: '__._***',
    r: '._.***',
    s: '...***',
    t: '_***',
    u: '.._***',
    v: '..._***',
    w: '.__***',
    x: '_.._***',
    y: '_.__***',
    z: '__..***',
    0: '_____***',
    1: '.____***',
    2: '..___***',
    3: '...__***',
    4: '...._***',
    5: '.....***',
    6: '_....***',
    7: '__...***',
    8: '___..***',
    9: '____.***',
    ' ': '****',
};

const morseCodeNoStars = {
    a: "._",
    b: "_...",
    c: "_._.",
    d: "_..",
    e: ".",
    f: ".._.",
    g: "__.",
    h: "....",
    i: "..",
    j: ".___",
    k: "_._",
    l: "._..",
    m: "__",
    n: "_.",
    o: "___",
    p: ".__.",
    q: "__._",
    r: "._.",
    s: "...",
    t: "_",
    u: ".._",
    v: "..._",
    w: ".__",
    x: "_.._",
    y: "_.__",
    z: "__..",
    0: "_____",
    1: ".____",
    2: "..___",
    3: "...__",
    4: "...._",
    5: ".....",
    6: "_....",
    7: "__...",
    8: "___..",
    9: "____.",
    " ": " ",
    "&nbsp&nbsp&nbsp": "/"
};


// const lowerCaseIt = (theText) => {
//     return theText.toLowerCase();
// }

// let theWord = "james panter helped me loads";

// console.log(lowerCaseIt(frog))




// const splitString = (stringIn) => {
//     return stringIn.split('');
// }



// const translateToMorse = (arrayCharacter) => {
//     return morseCode[arrayCharacter];
// }

// let splitArray = splitString(theWord);

// console.log(splitArray.map(translateToMorse));

// let MorseArray = (splitArray.map(translateToMorse))


// const combineTheMorseArray = (theMorseArray) => {
//     return theMorseArray.toString();
// }

// console.log(combineTheMorseArray(MorseArray));



// const sillyString = ".___***,._***,__***,.***,...***,****,.__.***,._***,_.***,_***,.***,._.***,****,....***,.***,._..***,.__.***,.***,_..***,****,__***,.***,****,._..***,___***,._***,_..***,...***";

// const removeComma = (theLongString) => {
//     return theLongString.replace(/,/g, '');
// };

// console.log(removeComma(sillyString));

// let starredString = (removeComma(sillyString));

// const generateSpace = (theLongString) => {
//     return theLongString.replace(/\*/g, '&nbsp');
// };

// console.log(generateSpace(starredString));

const testString = ".___ . .. ___ / .. .. ___ / .__ .. . "

const splitMorseString = (morseString) => {
    return morseString.split(" ");
};

const testChar = "_._."

console.log(splitMorseString(testString))

const translateToText = (morseChar) => {
    return Object.keys(morseCodeNoStars).find(key => morseCodeNoStars[key] === morseChar);
}

console.log(translateToText(testChar));