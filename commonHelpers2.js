/* empty css                      */(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const u of s.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&a(u)}).observe(document,{childList:!0,subtree:!0});function i(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(e){if(e.ep)return;e.ep=!0;const s=i(e);fetch(e.href,s)}})();function g(){const n=document.querySelector(".about-list"),l=document.querySelectorAll(".about-dot"),i=280,a=60;let e=0;const s=l.length;function u(){n.style.transform=`translateX(-${e*(i+a)}px)`,l.forEach((o,r)=>o.classList.toggle("active",r===e))}l.forEach((o,r)=>{o.addEventListener("click",()=>{e=r,u()})});let c,t,h,f,d=!1;const m=30;n.addEventListener("touchstart",o=>{c=o.touches[0].clientX,h=o.touches[0].clientY,d=!1}),n.addEventListener("touchmove",o=>{t=o.touches[0].clientX,f=o.touches[0].clientY;const r=Math.abs(t-c),v=Math.abs(f-h);r>v&&r>m?(d=!0,o.preventDefault()):d=!1}),n.addEventListener("touchend",o=>{d&&(t<c?e=(e+1)%s:t>c&&(e=(e-1+s)%s),u())}),u()}const S=()=>{const n=document.querySelectorAll(".animation-title"),l=document.querySelectorAll(".animation-text"),i=document.querySelectorAll(".hero-images img"),a=document.querySelectorAll(".how-item"),e=document.querySelectorAll(".faq-item"),s=document.querySelectorAll(".animation-item"),u=document.querySelectorAll(".animation-button"),c=new IntersectionObserver((t,h)=>{t.forEach(f=>{f.isIntersecting&&(f.target.classList.add("visible"),h.unobserve(f.target))})},{threshold:.2});i.forEach(t=>c.observe(t)),u.forEach(t=>c.observe(t)),a.forEach(t=>c.observe(t)),e.forEach(t=>c.observe(t)),n.forEach(t=>c.observe(t)),l.forEach(t=>c.observe(t)),s.forEach(t=>c.observe(t))},L=()=>{const n=document.getElementById("menu__toggle");document.querySelectorAll(".menu__item a").forEach(i=>{i.addEventListener("click",()=>{n.checked=!1})})},b=()=>{const n=document.querySelector(".cookies"),l=document.getElementById("accept-cookies"),i=document.getElementById("decline-cookies"),a=document.querySelectorAll(".header-list"),e=document.querySelector(".hamburger-menu");if(!n)return;function s(){document.documentElement.style.overflow="auto",document.body.style.cursor="default",e.style.pointerEvents="auto",a.forEach(t=>{t.style.pointerEvents="auto"})}function u(){document.documentElement.style.overflow="hidden",document.body.style.cursor="not-allowed",n.style.display="block",e.style.pointerEvents="none",a.forEach(t=>{t.style.pointerEvents="none"})}localStorage.getItem("accepted")!=="true"?u():(n.style.display="none",s());function c(t){localStorage.setItem("accepted",t),n.style.display="none",s()}l&&l.addEventListener("click",()=>c("true")),i&&i.addEventListener("click",()=>c("true"))};function q(){const n=document.querySelectorAll(".faq-item");n.forEach(l=>{l.addEventListener("click",i=>{i.stopPropagation(),l.classList.toggle("open");let a=l.querySelector(".faq-text");l.classList.contains("open")?a.style.maxHeight=a.scrollHeight+"px":a.style.maxHeight="0"})}),document.addEventListener("click",l=>{n.forEach(i=>{if(i.classList.contains("open")){i.classList.remove("open");let a=i.querySelector(".faq-text");a.style.maxHeight="0"}})})}function w(){const n=document.querySelector(".features-slider-list"),l=document.querySelectorAll(".features-dot"),i=280,a=60;let e=0;const s=l.length;function u(){n.style.transform=`translateX(-${e*(i+a)}px)`,l.forEach((o,r)=>o.classList.toggle("active",r===e))}l.forEach((o,r)=>{o.addEventListener("click",()=>{e=r,u()})});let c,t,h,f,d=!1;const m=30;n.addEventListener("touchstart",o=>{c=o.touches[0].clientX,h=o.touches[0].clientY,d=!1}),n.addEventListener("touchmove",o=>{t=o.touches[0].clientX,f=o.touches[0].clientY;const r=Math.abs(t-c),v=Math.abs(f-h);r>v&&r>m?(d=!0,o.preventDefault()):d=!1}),n.addEventListener("touchend",o=>{d&&(t<c?e=(e+1)%s:t>c&&(e=(e-1+s)%s),u())}),u()}function x(){const n=document.querySelector(".gallery-slider"),l=document.querySelector(".prev-btn"),i=document.querySelector(".next-btn"),a=document.querySelectorAll(".gallery-slider img"),e=window.innerWidth>=1200?3:1,s=205,u=20,c=a.length;let t=0;function h(){n.style.transform=`translateX(-${t*(s+u)}px)`}l.addEventListener("click",()=>{t>0&&(t--,h())}),i.addEventListener("click",()=>{t<c-e&&(t++,h())});let f,d,m,o,r=!1;const v=30;n.addEventListener("touchstart",y=>{f=y.touches[0].clientX,m=y.touches[0].clientY,r=!1}),n.addEventListener("touchmove",y=>{d=y.touches[0].clientX,o=y.touches[0].clientY;const p=Math.abs(d-f),E=Math.abs(o-m);p>E&&p>v?(r=!0,y.preventDefault()):r=!1}),n.addEventListener("touchend",y=>{r&&(d<f?t=(t+1)%c:d>f&&(t=(t-1+c)%c),h())}),h()}function X(){const n=document.querySelector(".reviews-list"),l=document.querySelectorAll(".review-dot"),i=270,a=40;let e=0;const s=l.length;function u(){n.style.transform=`translateX(-${e*(i+a)}px)`,l.forEach((o,r)=>o.classList.toggle("active",r===e))}l.forEach((o,r)=>{o.addEventListener("click",()=>{e=r,u()})});let c,t,h,f,d=!1;const m=30;n.addEventListener("touchstart",o=>{c=o.touches[0].clientX,h=o.touches[0].clientY,d=!1}),n.addEventListener("touchmove",o=>{t=o.touches[0].clientX,f=o.touches[0].clientY;const r=Math.abs(t-c),v=Math.abs(f-h);r>v&&r>m?(d=!0,o.preventDefault()):d=!1}),n.addEventListener("touchend",o=>{d&&(t<c?e=(e+1)%s:t>c&&(e=(e-1+s)%s),u())}),u()}document.addEventListener("DOMContentLoaded",()=>{S(),L(),g(),w(),X(),x(),q(),b()});
//# sourceMappingURL=commonHelpers2.js.map
