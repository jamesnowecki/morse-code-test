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
    ' ': '****'
};

const turnToLowerCase = (theInitialText) => {
    return theInitialText.toLowerCase();
}

const splitString = (stringIn) => {
    return stringIn.split('');
}

const translateToMorse = (arrayCharacter) => {
    return morseCode[arrayCharacter];
}

const combineTheMorseArray = (theMorseArray) => {
    return theMorseArray.toString();
}


const getsTheMessage = () => {

    let message = document.getElementById("message").value;
    let lowerCaseMessage = turnToLowerCase(message);
    let preMorseArray = splitString(lowerCaseMessage);
    let postMorseArray = translateToMorse(preMorseArray);
    let combinedStringWithCommas = comebineTheMorseArray(postMorseArray);



    let returnedMessage = document.getElementById("returnedMessage");
    return returnedMessage.innerHTML = lowerCaseMessage;


}