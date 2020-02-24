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

const textToMorseCode = {
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
    "/": " "
};

// Morse to text

const turnToLowerCase = theInitialText => {
    return theInitialText.toLowerCase();
};

const splitString = stringIn => {
    return stringIn.split("");
};

const translateToMorse = (arrayCharacter) => {
    return morseCode[arrayCharacter];
};

const combineTheMorseArray = theMorseArray => {
    return theMorseArray.toString();
};

const removeComma = theLongString => {
    return theLongString.replace(/,/g, "");
};

const convertToSpaces = theStarredString => {
    return theStarredString.replace(/\*/g, "&nbsp");
};

const chopTheLast3Spaces = (theStringWithSpaces) => {
    return theStringWithSpaces.substring(0, theStringWithSpaces.length - 15);
};

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
    return (returnedMessage.innerHTML = finalMorseString);
};

// Text to morse

const splitMorseString = (morseString) => {
    return morseString.split(" ", "/");
}

const translateToText = (arrayOfMorse) => {

}

const slashToSpaces = (longString) => {
    return longString.replace(/\//g, "&nbsp");
}


const getsMorseMessage = () => {
    const morseMessage = document.getElementById("morse-message").value;
    const arrayOfMorseChars = splitMorseString(morseMessage);
    const postTextArray = arrayOfMorseChars.map(translateToText);
    const combinedTextStringWithCommas = combineTheMorseArray(postTextArray);
    const longStringText = removeComma(combinedTextStringWithCommas);
    const finalTextString = slashToSpaces(longStringText);

    const returnedMorseMessage = document.getElementById("returnedMorseMessage");
    return (returnedMorseMessage.innerHTML = finalTextString);
  }