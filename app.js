let inputDiv = document.querySelector(".container-value--inputarea");
let buttonYoda = document.querySelector("#container-value--btn-yoda");
let outputDiv = document.querySelector(".container-value--output");
let YodaServerURL = "https://api.funtranslations.com/translate/yoda.json";


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