let inputDiv = document.querySelector(".container-value--inputarea");
let buttonEnderman = document.querySelector("#container-value--btn-enderman");
let outputDiv = document.querySelector(".container-value--output");
let YodaServerURL = "https://api.funtranslations.com/translate/enderman.json";


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
buttonEnderman.addEventListener("click",clickHandler);