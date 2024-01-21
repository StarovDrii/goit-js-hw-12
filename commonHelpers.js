import{a as m,i as d,S as p}from"./assets/vendor-89feecc5.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const i of e)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function l(e){const i={};return e.integrity&&(i.integrity=e.integrity),e.referrerpolicy&&(i.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?i.credentials="include":e.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(e){if(e.ep)return;e.ep=!0;const i=l(e);fetch(e.href,i)}})();const L=document.querySelector(".form"),u=document.querySelector(".search-input"),c=document.querySelector(".loader"),o=document.querySelector(".load-more-btn");L.addEventListener("submit",b);o.addEventListener("click",w);m.defaults.baseURL="https://pixabay.com";let n=1;const g=40;async function b(t){t.preventDefault(),q(),u.value,await f()}async function f(){await m.get("/api",{params:{key:"41798579-68ab5b2702b30822247f51cf8",q:u.value,orientation:"horizontal",image_type:"photo",safesearch:!0,page:n,per_page:g}}).then(t=>{if(t.data.hits.length===0)return d.warning({title:"Ooops",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});S(t.data.hits),M(t.data.totalHits)}).catch(d.error({title:"Error",message:"Something is wrong!",position:"topRight"})).finally(()=>{c.classList.add("is-hidden")})}const h=document.querySelector(".gallery");function S(t){n++;const s=t.map(({webformatURL:l,largeImageURL:r,tags:e,likes:i,views:a,comments:v,downloads:y})=>`
      <li class="gallery-item">
        <a href="${r}">
          <img src="${l}" alt="${e}" class="gallery-image"/>
        </a>
        <div class="image-desc">
          <div class="image-desc-item">
            <div class="image-desc-label">Likes</div>
            <div>${i}</div>
          </div>
          <div class="image-desc-item">
            <div class="image-desc-label">Views</div>
            <div>${a}</div>
          </div>
          <div class="image-desc-item">
            <div class="image-desc-label">Comments</div>
            <div>${v}</div>
          </div>
          <div class="image-desc-item">
            <div class="image-desc-label">Downloads</div>
            <div>${y}</div>
          </div>
        </div>
      </li>
      `).join("");h.insertAdjacentHTML("beforeend",s),new p(".gallery a").refresh()}async function w(){c.classList.remove("is-hidden"),o.classList.add("is-hidden"),await f()}function q(){n=1,h.innerHTML="",c.classList.remove("is-hidden"),o.classList.add("is-hidden")}function M(t){const s=Math.ceil(t/g);if(n>s)return d.warning({title:"Ooops",message:"We're sorry, but you've reached the end of search results.",position:"topRight"});o.classList.remove("is-hidden")}
//# sourceMappingURL=commonHelpers.js.map
