let langs = document.querySelector(".langs"),
     link = document.querySelectorAll("a"),
     title = document.querySelector(".title"),
     descr = document.querySelector(".description");

link.forEach(el=>{
     el.addEventListener("click", ()=>{
          langs.querySelector(".active").classList.remove("active");
          el.classList.add("active");

          let attr = el.getAttribute("language")

          title.textContent = data[attr].title
          descr.textContent = data[attr].description
     })
})

let data = {
     german: {
          title: "Ohne KI",
          description: "Dies ist ein Beispieltext, der ursprünglich auf Englisch verfasst wurde."
     },
     english: {
          title: "Without AI",
          description: "This is an example text written originally in English. ",
     },
          spanish: {
          title: "Sin IA",
          description: "Este es un texto de ejemplo escrito originalmente en inglés."
     }
    }

if(lang==="english"){
     langs.querySelector(".active").classList.remove("active");
     link[0].classList.add("active");
     changeLang("english",title,descr)
} else{
     langs.querySelector(".active").classList.remove("active");
     link[index].classList.add("active");
     changeLang(lang,title,descr)
}

link.forEach((el,i)=>el.addEventListener("click", ()=>{
     langs.querySelector(".active").classList.remove("active");
     el.classList.add("active");
     const attr = el.dataset.lang;
     lang = attr;
     index = i;
     if(lang!=="english") changeLang(lang,title,descr)
     else changeLang("english",title,descr);
     localStorage.setItem("lang", attr);
     localStorage.setItem("langIndex",i);
}))

function changeLang(lang,title,descr){
     title.textContent = data[lang].title
     descr.textContent = data[lang].description
}    