let inputDiv = document.querySelector(".container-value--inputarea");
let buttonYoda = document.querySelector("#container-value--btn-yoda");
// let buttonMinion = document.querySelector("#container-value--btn-minion");
let outputDiv = document.querySelector(".container-value--output");
let YodaServerURL = "https://api.funtranslations.com/translate/yoda.json";
// let MinionServerURL = "https://api.funtranslations.com/translate/minion.json";
 
// function getURL(serverURL , input){
//     return serverURL + "?"+ "text="+input;
// }
// function clickHandler(serverURL){
//     return function(){
//         let inputText = inputDiv.value; 
//         fetch(getURL(serverURL,inputText))
//         .then(response => response.json())
//         then(json =>{
//                 let translatedText = json.contents.translated;
//                 console.log(translatedText);
//         })
//     }    
// }
// buttonYoda.addEventListener("click",clickHandler(YodaServerURL));
// buttonMinion.addEventListener("click",clickHandler(MinionServerURL));

function getURL(input){
    return YodaServerURL + "?" + "text=" + input;
}
function clickHandler(){
    let inputText = inputDiv.value;
    fetch(getURL(inputText))
    .then(response => response.json())
    .then(json =>{
        let translatedText = json.contents.translated;
        outputDiv.innerText = translatedText;
    })
}
buttonYoda.addEventListener("click",clickHandler);