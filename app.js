let inputDiv = document.querySelector(".container-value--inputarea");
let button = document.querySelector(".container-value--btn");
let outputDiv = document.querySelector(".container-value--output");
let serverURL = "https://api.funtranslations.com/translate/yoda.json";
 
function getURL(input){
    return serverURL + "?" + "text=" + input;
}

button.addEventListener("click",function clickHandler(){
   let inputText = inputDiv.value;
   fetch(getURL(inputText))
   .then(response => response.json())
   .then(json=>{
    let translatedText = json.contents.translated;
    console.log(translatedText);
   })
});