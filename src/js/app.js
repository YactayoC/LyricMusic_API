import {validation} from './validationForm.js'

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
    validation(artist.value, music.value);
    consultAPI(artist.value.toLowerCase(), music.value.toLowerCase());
    form.reset();
}

async function consultAPI(artist, music) {
    const url = `https://api.lyrics.ovh/v1/${artist}/${music}`

    divSpinner.style.display = 'block'
    spinner();

    title.classList.add('d-none');
    letter.textContent = '';

    try {
        const reply = await fetch(url);
        const result = await reply.json();

        if (result.error === "No lyrics found") {
            title.classList.remove('d-none');
            title.textContent = `${result.error}`;
            divSpinner.style.display = 'none';
            return;
        }

        divSpinner.style.display = 'none'
        letter.textContent = result.lyrics;
        title.classList.remove('d-none')
        title.textContent = `Results for ${music} - ${artist}`;

    } catch (e) {
        divSpinner.style.display = 'none'
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

    result.appendChild(divSpinner);
}
