(()=>{"use strict";(class{static activateUi(){this.activateDarkmodeToggle(),this.activateNavBar(),this.loadSections()}static activateDarkmodeToggle(){const t=document.querySelector("#dark-mode"),e=document.querySelector("body"),c=document.querySelector(".content"),o=document.querySelector("nav"),s=document.querySelectorAll("#github-icon"),a=document.querySelector("#linkedin-icon"),r=document.querySelectorAll(".svg-icons");t.checked&&(e.classList.toggle("dark"),c.classList.toggle("dark"),o.classList.toggle("dark"),s.forEach((t=>{t.classList.toggle("dark")})),r.forEach((t=>{t.classList.toggle("dark")})),a.classList.toggle("dark")),t.addEventListener("click",(()=>{e.classList.toggle("dark"),c.classList.toggle("dark"),o.classList.toggle("dark"),s.forEach((t=>{t.classList.toggle("dark")})),r.forEach((t=>{t.classList.toggle("dark")})),a.classList.toggle("dark")}))}static activateNavBar(){const t=document.querySelector("#about"),e=document.querySelector(".about-section"),c=document.querySelector("#projects"),o=document.querySelector(".projects-section"),s=document.querySelector("#contact"),a=document.querySelector(".contact-section");t.addEventListener("click",(()=>{e.scrollIntoView({behavior:"smooth"})})),c.addEventListener("click",(()=>{o.scrollIntoView({behavior:"smooth"})})),s.addEventListener("click",(()=>{a.scrollIntoView({behavior:"smooth"})}))}static loadSections(){const t=document.querySelectorAll("section"),e=new IntersectionObserver((t=>{t.forEach((t=>{t.isIntersecting?t.target.style.opacity=1:t.target.style.opacity=0}))}),{threshold:.2});t.forEach((t=>{t.classList.contains("introduction")||e.observe(t)}))}}).activateUi()})();