const t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]"),r=document.querySelector("body");t.addEventListener("click",(function(e){timerId=setInterval((()=>{r.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`,t.setAttribute("disabled","true")}),1e3)})),e.addEventListener("click",(function(e){clearInterval(timerId),t.removeAttribute("disabled")}));
//# sourceMappingURL=01-color-switcher.98b33ad0.js.map
