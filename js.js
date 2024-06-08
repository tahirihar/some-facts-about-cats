
"use strict";

let img;
let descrText;

//генерируем изображения
function generationImages() {
    fetch(`https://api.thecatapi.com/v1/images/search`)
        .then(res => res.json())
        .then(data => {
            img = data[0].url;
            generationText();
        });
}

//генерируем текст
function generationText() {
    fetch(`https://meowfacts.herokuapp.com/`)
        .then(res => res.json())
        .then(data => {
            descrText = data.data;
            renderCards();
        });
}

//генерируем карточки
function renderCards() {
    document.querySelector('.cards').insertAdjacentHTML('beforeend',
        `<div class="card"> 
            <img class="card__img" src='${img}'>
            <div class="card__descr" >${descrText}</div> 
        </div>
       `
    );
}

document.querySelector('.btn').addEventListener('click', function () {
    document.querySelector('.card').classList.remove('.hidden');
    generationImages();

});
