import {validationSearch} from './validationForm.js'

const form = document.getElementById('form');
const artist = document.getElementById('artist');
const music = document.getElementById('music');
const letter = document.getElementById('letter');
const title = document.getElementById('title');
const result = document.querySelector('.search__result');

const divSpinner = document.createElement('div');

addEventListeners();

function addEventListeners() {
    form.addEventListener('submit', search);
}

function search(e) {
    e.preventDefault();

    const artistValue = artist.value;
    const musicValue = music.value;

    validationSearch(artistValue, musicValue);
    consultAPI(artistValue.toLowerCase(), musicValue.toLowerCase());
    form.reset();
}

async function consultAPI(artist, music) {
    const url = `https://api.lyrics.ovh/v1/${artist}/${music}`

    title.textContent = '';
    letter.textContent = '';
    spinner();

    try {
        const reply = await fetch(url);
        const result = await reply.json();

        if (result.error) {
            title.classList.remove('d-none');
            title.textContent = `${result.error}`;
            divSpinner.style.display = 'none';
            return;
        }

        divSpinner.style.display = 'none'
        title.classList.remove('d-none')
        title.textContent = `Results for ${music} - ${artist}`;
        letter.textContent = result.lyrics;


    } catch (e) {
        divSpinner.style.display = 'none'
        title.textContent = 'Fill in the empty fields'
    }
}

function spinner() {
    divSpinner.innerHTML = `
    <div class="spinner">
        <div class="bounce1"></div>
        <div class="bounce2"></div>
        <div class="bounce3"></div>
    </div>
    `;

    divSpinner.style.display = 'block';
    result.appendChild(divSpinner);
}
