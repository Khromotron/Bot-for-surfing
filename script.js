// ==UserScript==
// @name         Bot for surfing
// @namespace    http://tampermonkey.net/
// @version      0.1.4
// @description  try to take over the world!
// @author       You
// @match        https://www.google.com/*
// @match        https://xn----7sbab5aqcbiddtdj1e1g.xn--p1ai/*
// @grant        none
// ==/UserScript==

function setCookie(name, value, options = {}) {

  options = {
    path: '/',
    // при необходимости добавьте другие значения по умолчанию
    ...options
  };

  if (options.expires.toUTCString) {
    options.expires = options.expires.toUTCString();
  }

  let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);

  for (let optionKey in options) {
    updatedCookie += "; " + optionKey;
    let optionValue = options[optionKey];
    if (optionValue !== true) {
      updatedCookie += "=" + optionValue;
    }
  }

  document.cookie = updatedCookie;
}

function deleteCookie(name) {
  setCookie(name, "", {
    'max-age': -1
  })
}

setTimeout(()=>{
    function getCookie(name) {
  let matches = document.cookie.match(new RegExp(
    "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
  ));
  return matches ? decodeURIComponent(matches[1]) : undefined;
}




    let sites = {
		"crushdrummers.ru":["Барабанное шоу","Шоу барабанщиков","Заказать барабанное шоу москва"],
		"xn----7sbab5aqcbiddtdj1e1g.xn--p1ai":["Гобой","Кларнет","Флейта","Волторна","Тромбон"],
		"nightbeat.ru":["Барабанное шоу","Шоу барабанщиков","Заказать барабанное шоу москва"]
	}
    let randomProperty = function (obj) {
    let keys = Object.keys(obj)
	return keys[ keys.length * Math.random() << 0]; //   <<0 - вместо Math.floor,
	};
	let site = randomProperty(sites);
    let keyword = sites[site][sites[site].length * Math.random() << 0];;
    let nextPage= true;
	if(getCookie("target")==undefined)
	document.cookie = "target="+site;
    try {
        document.getElementsByName("q")[0].value=keyword;
        document.getElementsByName("btnK")[0].click();
    }catch(e){
        let links = document.links;
        if (location.hostname=="www.google.com"){
            for (let i=0; i<links.length; i++){
                if (links[i].href.indexOf(site)!=-1 && links[i].href.indexOf("webcache")==-1){
                    nextPage = false;
                    deleteCookie("target");
					links[i].click();
                }
            }
            if (document.getElementsByClassName("cur")[0].innerText==10){
                nextPage = false;
				deleteCookie("target");
                location.href="https://www.google.com";
            }

            if (nextPage)
                document.getElementsByClassName("cur")[0].nextElementSibling.firstChild.click();
        }
        else {
            setInterval(()=>{
                if (Math.random()>0.7)
                    location.href="https://www.google.com";
                let index = Math.floor(Math.random()*links.length);
                if (links[index].href.indexOf("xn----7sbab5aqcbiddtdj1e1g.xn--p1ai")!=-1){
                    links[index].click();
                }
            },3000);
        }
    }

},3000);





