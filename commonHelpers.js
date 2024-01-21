import{S as p,i as d,a as m}from"./assets/vendor-89feecc5.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const i of e)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function l(e){const i={};return e.integrity&&(i.integrity=e.integrity),e.referrerpolicy&&(i.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?i.credentials="include":e.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(e){if(e.ep)return;e.ep=!0;const i=l(e);fetch(e.href,i)}})();const u=document.querySelector(".gallery");function b(t){const s=t.map(({webformatURL:l,largeImageURL:o,tags:e,likes:i,views:a,comments:y,downloads:v})=>`
      <li class="gallery-item">
        <a href="${o}">
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
            <div>${y}</div>
          </div>
          <div class="image-desc-item">
            <div class="image-desc-label">Downloads</div>
            <div>${v}</div>
          </div>
        </div>
      </li>
      `).join("");u.insertAdjacentHTML("beforeend",s),new p(".gallery a").refresh()}function L(){u.innerHTML="",c.classList.remove("is-hidden"),n.classList.add("is-hidden")}function S(t){const s=Math.ceil(t/f);if(r>s)return d.show({message:"We're sorry, but you've reached the end of search results.",position:"topRight"});n.classList.remove("is-hidden")}async function w(){c.classList.remove("is-hidden"),n.classList.add("is-hidden"),await h()}function q(){let t=document.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollBy({top:t*2,behavior:"smooth"})}const M=document.querySelector(".form"),g=document.querySelector(".search-input"),c=document.querySelector(".loader"),n=document.querySelector(".load-more-btn");M.addEventListener("submit",$);n.addEventListener("click",w);m.defaults.baseURL="https://pixabay.com";let r=1;const f=40;async function $(t){t.preventDefault(),L(),r=1,g.value,await h()}async function h(){await m.get("/api/",{params:{key:"41798579-68ab5b2702b30822247f51cf8",q:g.value,orientation:"horizontal",image_type:"photo",safesearch:!0,page:r,per_page:f}}).then(t=>{if(t.data.hits.length===0)return d.warning({title:"Ooops",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});r++,b(t.data.hits),S(t.data.totalHits),q()}).catch(t=>{d.error({title:"Error",message:"Something is wrong!",position:"topRight"})}).finally(()=>{c.classList.add("is-hidden")})}
//# sourceMappingURL=commonHelpers.js.map
