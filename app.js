
async function loadContent(){
  try{
    const res = await fetch('/content.json');
    const data = await res.json();
    window.siteContent = data;
    renderHome();
    renderReels();
    renderPhotos();
  }catch(e){console.error(e);}
}
function el(sel){return document.querySelector(sel);}
function els(sel){return Array.from(document.querySelectorAll(sel));}

function renderHome(){
  const container = el('#home-feed');
  if(!container||!window.siteContent) return;
  const firstVideo = window.siteContent.find(i=>i.type==='video');
  if(firstVideo){
    container.innerHTML = `<div class="card feature">
      <video src="${firstVideo.url}" poster="${firstVideo.cover}" autoplay muted loop playsinline></video>
      <div class="overlays">
        <img class="flower tl" src="https://picsum.photos/seed/flower1/400/400" />
        <img class="flower br" src="https://picsum.photos/seed/flower2/300/300" />
      </div></div>`;
  }
  const photos = window.siteContent.filter(i=>i.type==='photo');
  const strip = el('#photo-strip');
  if(strip){
    strip.innerHTML = photos.map(p=>`<img src="${p.cover}" alt="${p.title}" data-id="${p.id}" />`).join('');
    strip.querySelectorAll('img').forEach(img=>img.addEventListener('click',()=>{location.href='/photos.html#'+img.dataset.id;}));
  }
}
function renderReels(){
  const list = el('#reels-list');
  if(!list||!window.siteContent) return;
  const reels = window.siteContent.filter(i=>i.type==='video');
  list.innerHTML = reels.map(r=>`<div class="card" style="height:60vh;">
    <video src="${r.url}" poster="${r.cover}" controls playsinline style="width:100%;height:100%;object-fit:cover;border-radius:12px;"></video>
    <div style="padding:8px"><h4>${r.title}</h4><p>${r.desc}</p></div></div>`).join('');
}
function renderPhotos(){
  const grid = el('#photos-grid');
  if(!grid||!window.siteContent) return;
  const photos = window.siteContent.filter(i=>i.type==='photo');
  grid.innerHTML = photos.map(p=>`<div><img src="${p.url}" alt="${p.title}" />
    <div style="padding:8px"><h4>${p.title}</h4><p>${p.desc}</p></div></div>`).join('');
}
window.addEventListener('DOMContentLoaded', loadContent);
