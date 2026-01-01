// --------------------
// 1. Sprachdaten
// --------------------
const data = {
  english: {
    title: "Any Headline",
    htitel1: "Home",
    htitel2: "Products",
    htitel3: "Contact",
    description: "This is an example text written originally in English."
  },
  german: {
    title: "Irgendeine Überschrift",
    htitel1: "Heim",
    htitel2: "Produkte",
    htitel3: "Kontakt",
    description: "Dies ist ein Beispieltext, der ursprünglich auf Englisch verfasst wurde."
  },
  spanish: {
    title: "Cualquier Titular",
    htitel1: "Hogar",
    htitel2: "Productos",
    htitel3: "Contacto",
    description: "Este es un texto de ejemplo escrito originalmente en inglés."
  }, 
  russian: {
    title: "Любой заголовок",
    htitel1: "Дом",
    htitel2: "Продукты",
    htitel3: "Контакт",
    description: "Это пример текста, изначально написанного на английском языке."
  }
};

// --------------------
// 2. Elemente holen (falls vorhanden)
// --------------------
const title  = document.querySelector(".title");
const descr  = document.querySelector(".description");
const h1     = document.querySelector(".htitle1");
const h2     = document.querySelector(".htitle2");
const h3     = document.querySelector(".htitle3");

const langContainer =
  document.querySelector(".langs") ||
  document.querySelector(".dropdown-content");



const langLinks = langContainer.querySelectorAll("a");

// --------------------
// 3. Sprache setzen
// --------------------
function changeLang(lang) {
  if (!data[lang]) return;

  if (title) title.textContent = data[lang].title;
  if (descr) descr.textContent = data[lang].description;
  if (h1) h1.textContent = data[lang].htitel1;
  if (h2) h2.textContent = data[lang].htitel2;
  if (h3) h3.textContent = data[lang].htitel3;
}

// --------------------
// 4. Aktive Sprache markieren
// --------------------
function setActiveLink(lang) {
  langLinks.forEach(link => {
    link.classList.toggle("active", link.dataset.lang === lang);
  });
}

// --------------------
// 5. Klick-Events
// --------------------
langLinks.forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();

    const lang = link.dataset.lang;
    localStorage.setItem("lang", lang);

    setActiveLink(lang);
    changeLang(lang);
  });
});

// --------------------
// 6. Sprache beim Laden setzen
// --------------------
const savedLang = localStorage.getItem("lang") || "english";
setActiveLink(savedLang);
changeLang(savedLang);
