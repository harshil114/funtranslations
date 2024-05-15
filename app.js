let inputDiv = document.querySelector(".container-value--inputarea");
let button = document.querySelector(".container-value--btn-yoda");
let outputDiv = document.querySelector(".container-value--output");
let serverURL = "https://apifuntranslations.com/translate/yoda.json";
 
function getURL(input){
    return serverURL + "?" + "text=" + input;
}
function errorHandler(error){
    alert("Try again later");
}

button.addEventListener("click",function clickHandler(){
   let inputText = inputDiv.value;
   fetch(getURL(inputText))
   .then(response => response.json())
   .then(json=>{
    let translatedText = json.contents.translated;
    outputDiv.innerText=translatedText;
   })
   .catch(errorHandler);
});