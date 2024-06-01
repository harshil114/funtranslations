let inputDiv = document.querySelector(".container-value--inputarea");
let buttonMinion = document.querySelector("#container-value--btn-minion");
let outputDiv = document.querySelector(".container-value--output");
let minionServerURL = "https://api.funtranslations.com/translate/minion.json";


function getURL(input){
    return minionServerURL + "?" + "text=" + input;
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
buttonMinion.addEventListener("click",clickHandler);