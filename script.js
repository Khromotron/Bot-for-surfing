// ==UserScript==
// @name         Bot for surfing
// @namespace    http://tampermonkey.net/
// @version      0.1.3
// @description  try to take over the world!
// @author       You
// @match        https://www.google.com/*
// @match        https://xn----7sbab5aqcbiddtdj1e1g.xn--p1ai/*
// @grant        none
// ==/UserScript==
setTimeout(()=>{
    let keywords = ["Гобой","Кларнет","Флейта","Волторна","Тромбон"];
    let keyword = keywords[Math.floor(Math.random()*keywords.length)];
    let nextPage= true;
    try {
        document.getElementsByName("q")[0].value=keyword;
        document.getElementsByName("btnK")[0].click();
    }catch(e){
        let links = document.links;
        if (location.hostname=="www.google.com"){
            for (let i=0; i<links.length; i++){
                if (links[i].href.indexOf("xn----7sbab5aqcbiddtdj1e1g.xn--p1ai")!=-1 && links[i].href.indexOf("webcache")==-1){
                    nextPage = false;
                    links[i].click();
                }
            }
            if (document.getElementsByClassName("cur")[0].innerText==10){
                nextPage = false;
                location.href="https://www.google.com";
            }

            if (nextPage)
                document.getElementsByClassName("cur")[0].nextElementSibling.firstChild.click();
        }
        else {
            setInterval(()=>{
                let index = Math.floor(Math.random()*links.length);
                if (links[index].href.indexOf("xn----7sbab5aqcbiddtdj1e1g.xn--p1ai")!=-1){
                    links[index].click();
                }
            },3000);
        }
    }

},3000);

