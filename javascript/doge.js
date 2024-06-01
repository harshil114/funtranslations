let inputDiv = document.querySelector(".container-value--inputarea");
let buttonDoge = document.querySelector("#container-value--btn-doge");
let outputDiv = document.querySelector(".container-value--output");
let dogeServerURL = "https://api.funtranslations.com/translate/doge.json";


function getURL(input){
    return dogeServerURL + "?" + "text=" + input;
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
buttonDoge.addEventListener("click",clickHandler);