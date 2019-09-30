// ==UserScript==
// @name         Bot for surfing
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.google.com/*
// @grant        none
// ==/UserScript==

let keywords = ["Гобой","Кларнет","Флейта","Волторна","Тромбон"];
let keyword = keywords[Math.floor(Math.random()*keywords.length)];

document.getElementsByName("q")[0].value=keyword;
try {
    document.getElementsByName("btnK")[0].click();
}catch(e){
    let links = document.links;
    for (let i=0; i<links.length; i++){
        if (links[i].href.indexOf("xn----7sbab5aqcbiddtdj1e1g.xn--p1ai")!=-1 && links[i].href.indexOf("webcache")==-1){
            links[i].click();
        }
    }
}
