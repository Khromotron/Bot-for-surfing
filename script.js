// ==UserScript==
// @name         Bot for surfing
// @namespace    http://tampermonkey.net/
// @version      0.1.1
// @description  try to take over the world!
// @author       You
// @match        https://www.google.com/*
// @grant        none
// ==/UserScript==

let keywords = ["Гобой","Кларнет","Флейта","Волторна","Тромбон"];
let keyword = keywords[Math.floor(Math.random()*keywords.length)];
let nextPage= true;
document.getElementsByName("q")[0].value="Флейта";
try {
    document.getElementsByName("btnK")[0].click();
}catch(e){
    let links = document.links;
    for (let i=0; i<links.length; i++){
        if (links[i].href.indexOf("xn----7sbab5aqcbiddtdj1e1g.xn--p1ai")!=-1 && links[i].href.indexOf("webcache")==-1){
            nextPage = false;
            links[i].click();
        }
    }
    if (nextPage)
        document.getElementsByClassName("cur")[0].nextElementSibling.firstChild.click();
}
