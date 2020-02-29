const morseCode = {
    a: "._***",
    b: "_...***",
    c: "_._.***",
    d: "_..***",
    e: ".***",
    f: ".._.***",
    g: "__.***",
    h: "....***",
    i: "..***",
    j: ".___***",
    k: "_._***",
    l: "._..***",
    m: "__***",
    n: "_.***",
    o: "___***",
    p: ".__.***",
    q: "__._***",
    r: "._.***",
    s: "...***",
    t: "_***",
    u: ".._***",
    v: "..._***",
    w: ".__***",
    x: "_.._***",
    y: "_.__***",
    z: "__..***",
    0: "_____***",
    1: ".____***",
    2: "..___***",
    3: "...__***",
    4: "...._***",
    5: ".....***",
    6: "_....***",
    7: "__...***",
    8: "___..***",
    9: "____.***",
    " ": "****"
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
    "&nbsp": "/"
};

// Morse to text

const turnToLowerCase = theInitialText => theInitialText.toLowerCase();

const splitString = stringIn => stringIn.split("");

const translateToMorse = arrayCharacter => morseCode[arrayCharacter];

const combineTheMorseArray = theMorseArray => theMorseArray.toString();

const removeComma = theLongString => theLongString.replace(/,/g, "");

const convertToSpaces = theStarredString => theStarredString.replace(/\*/g, "&nbsp");

const chopTheLast3Spaces = theStringWithSpaces => theStringWithSpaces.substring(0, theStringWithSpaces.length - 15);

const getsTheMessage = () => {
    const message = document.getElementById("message").value;
    const lowerCaseMessage = turnToLowerCase(message);
    const preMorseArray = splitString(lowerCaseMessage);
    const postMorseArray = preMorseArray.map(translateToMorse);
    const combinedStringWithCommas = combineTheMorseArray(postMorseArray);
    const combinedStringWithoutCommas = removeComma(combinedStringWithCommas);
    const stringWithSpaces = convertToSpaces(combinedStringWithoutCommas);
    const finalMorseString = chopTheLast3Spaces(stringWithSpaces);
    const returnedMessage = document.getElementById("returnedMessage");
    return returnedMessage.innerHTML = finalMorseString;
};

// Text to morse

const splitMorseString = morseString => morseString.split(" ");

const getListOfLetters = morseChar => translateToText(morseChar)

const translateToText = (morseChar) => {
    return Object.keys(morseCodeNoStars).find(key => morseCodeNoStars[key] === morseChar);
}

const getsMorseMessage = () => {
    const morseMessage = document.getElementById("morse-message").value;
    const arrayOfMorseChars = splitMorseString(morseMessage);
    const postTextArray = arrayOfMorseChars.map(getListOfLetters);
    const combinedTextStringWithCommas = combineTheMorseArray(postTextArray);
    const longStringText = removeComma(combinedTextStringWithCommas);
    const returnedMorseMessage = document.getElementById("returnedMorseMessage");
    return returnedMorseMessage.innerHTML = longStringText;
}