let inputDiv = document.querySelector(".container-value--inputarea");
let buttonBritish = document.querySelector("#container-value--btn-british");
let outputDiv = document.querySelector(".container-value--output");
let YodaServerURL = "https://api.funtranslations.com/translate/british.json";


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
buttonBritish.addEventListener("click",clickHandler);