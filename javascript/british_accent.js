let inputDiv = document.querySelector(".container-value--inputarea");
let buttonBritish = document.querySelector("#container-value--btn-british");
let outputDiv = document.querySelector(".container-value--output");
let britishServerURL = "https://api.funtranslations.com/translate/british.json";


function getURL(input){
    return britishServerURL + "?" + "text=" + input;
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