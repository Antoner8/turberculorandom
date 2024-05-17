
const url="https://random-word-api.herokuapp.com/word?lang=es&length=6";

let text = document.getElementsByTagName("h2");

let finalWord = document.getElementById("span");

let word1 = "PULSA";

function ChangeName(index){
    if(text[index].classList.contains("change"))return;

    ChangeClass(index);

    fetch(url,{
        method:'GET',
    })
    .then(res => res.json())
    .then(data => {word1=data[0];});

    text[index].innerHTML=word1;
    finalWord.innerHTML = (text[0].innerHTML + " " + text[1].innerHTML + " " +text[2].innerHTML).toUpperCase();
}

function ChangeClass(index){
    text[index].classList.add("change");
    setTimeout(() => {
        text[index].classList.remove("change");
    }, 1100);
}