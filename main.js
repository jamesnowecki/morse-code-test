// const turnToLowerCase = (theInitialText) => {
//     return theInitialText.tolowerCase();
// }

const turnToLowerCase = (theInitialText) => { 
    return theInitialText.toLowerCase();
}



const getsTheMessage = () => {

    let message = document.getElementById("message").value;
    let lowerCaseMessage = turnToLowerCase(message);



let returnedMessage = document.getElementById("returnedMessage");
return returnedMessage.innerHTML = lowerCaseMessage;


}

