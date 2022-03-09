import{validationSearch}from"./validationForm.js";const form=document.getElementById("form"),artist=document.getElementById("artist"),music=document.getElementById("music"),letter=document.getElementById("letter"),title=document.getElementById("title"),result=document.querySelector(".search__result"),divSpinner=document.createElement("div");function addEventListeners(){form.addEventListener("submit",search)}function search(e){e.preventDefault();const t=artist.value,n=music.value;validationSearch(t,n),consultAPI(t.toLowerCase(),n.toLowerCase()),form.reset()}async function consultAPI(e,t){const n=`https://api.lyrics.ovh/v1/${e}/${t}`;spinner();try{const i=await fetch(n),s=await i.json();if(s.error)return title.classList.remove("d-none"),title.textContent=`${s.error}`,void(divSpinner.style.display="none");divSpinner.style.display="none",title.classList.remove("d-none"),title.textContent=`Results for ${t} - ${e}`,letter.textContent=s.lyrics}catch(e){divSpinner.style.display="none",title.textContent="Fill in the empty fields"}}function spinner(){divSpinner.innerHTML='\n    <div class="spinner">\n        <div class="bounce1"></div>\n        <div class="bounce2"></div>\n        <div class="bounce3"></div>\n    </div>\n    ',divSpinner.style.display="block",result.appendChild(divSpinner)}addEventListeners();