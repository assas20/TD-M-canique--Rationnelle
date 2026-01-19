/***********************************
 * ====== TDs + PDF ====== 
 ***********************************/
const TDs = {
  S03:[
    { title: {fr:"Série TD N°01 : Les outils mathématiques", en:"TD Series 01: Math Tools", ar:"السلسلة 01: الأدوات الرياضية"}, pdf:"TDs/TD01.pdf", html:"TDs/TD01.html" },
    { title: {fr:"Série TD N°02 : Moments des forces", en:"TD Series 02: Moments of Forces", ar:"السلسلة 02: عزم القوى"}, pdf:"TDs/TD02.pdf", html:"TDs/TD02.html" },
    { title: {fr:"Série TD N°03 : Les Torseurs", en:"TD Series 03: Torques", ar:"السلسلة 03: العزوم"}, pdf:"TDs/TD03.pdf", html:"TDs/TD03.html" },
    { title: {fr:"Série TD N°04 : Statique du solide", en:"TD Series 04: Solid Statics", ar:"السلسلة 04: سكون الصلب"}, pdf:"TDs/TD04.pdf", html:"TDs/TD04.html" }
  ],
  S04:[
    { title: {fr:"Série TD N°05 : Exemple TD 05", en:"TD Series 05: Example TD 05", ar:"السلسلة 05: مثال TD 05"}, pdf:"TDs/TD05.pdf", html:"TDs/TD05.html" },
    { title: {fr:"Série TD N°06 : Exemple TD 06", en:"TD Series 06: Example TD 06", ar:"السلسلة 06: مثال TD 06"}, pdf:"TDs/TD06.pdf", html:"TDs/TD06.html" },
    { title: {fr:"Série TD N°07 : Exemple TD 07", en:"TD Series 07: Example TD 07", ar:"السلسلة 07: مثال TD 07"}, pdf:"TDs/TD07.pdf", html:"TDs/TD07.html" },
    { title: {fr:"Série TD N°08 : Exemple TD 08", en:"TD Series 08: Example TD 08", ar:"السلسلة 08: مثال TD 08"}, pdf:"TDs/TD08.pdf", html:"TDs/TD08.html" }
  ]
};

/***********************************
 * ====== عناصر الصفحة ====== 
 ***********************************/
const tdContainer = document.getElementById("tdContainer");
const presenceContainer = document.getElementById("presenceContainer");
const languageSelect = document.getElementById("languageSelect");
const btnS03 = document.getElementById("btnS03");
const btnS04 = document.getElementById("btnS04");
const btnListe = document.getElementById("btnListe");
const btnCours = document.getElementById("btnCours");
const btnProgramme = document.getElementById("btnProgramme");
const btnLivre = document.getElementById("btnLivre");
const btnVideo = document.getElementById("btnVideo");
const btnContact = document.getElementById("btnContact");

let currentLang = "fr";

/***********************************
 * ====== الأدوات العامة ======
 ***********************************/
function clearAll() {
  tdContainer.innerHTML = "";
  presenceContainer.innerHTML = "";
}

function showSimpleBox(title, html) {
  clearAll();
  presenceContainer.innerHTML = `<div class="td-detail"><h3>${title}</h3>${html}</div>`;
}

/***********************************
 * ====== عرض TDs ======
 ***********************************/
function showTDSerie(arrTD) {
  clearAll();
  arrTD.forEach(td => {
    const btn = document.createElement("button");
    btn.className = "td-btn";
    btn.textContent = td.title[currentLang];
    btn.onclick = () => {
      tdContainer.innerHTML = `
        <div class="td-detail">
          <h3>${td.title[currentLang]}</h3>
          <p>
            <a href="${td.pdf}" target="_blank">Voir PDF 📄</a> |
            <a href="${td.html}" target="_blank">Voir Corrigé 📝</a>
          </p>
        </div>
      `;
    };
    tdContainer.appendChild(btn);
  });
}

btnS03.onclick = () => showTDSerie(TDs.S03);
btnS04.onclick = () => showTDSerie(TDs.S04);

/***********************************
 * ====== تغيير اللغة ======
 ***********************************/
languageSelect.onchange = () => {
  currentLang = languageSelect.value;
  btnS03.textContent = currentLang==="fr"?"Semestre 03":currentLang==="en"?"Semester 03":"الفصل 03";
  btnS04.textContent = currentLang==="fr"?"Semestre 04":currentLang==="en"?"Semester 04":"الفصل 04";
  btnListe.textContent = currentLang==="fr"?"Liste de Présence":currentLang==="en"?"Attendance List":"قائمة الحضور";
  btnCours.textContent = currentLang==="fr"?"Cours":currentLang==="en"?"Course":"الدروس";
  btnProgramme.textContent = currentLang==="fr"?"Programme pédagogique":currentLang==="en"?"Pedagogical Program":"البرنامج البيداغوجي";
  btnLivre.textContent = currentLang==="fr"?"Livre":currentLang==="en"?"Book":"الكتاب";
  btnVideo.textContent = currentLang==="fr"?"Vidéos YouTube":currentLang==="en"?"YouTube Videos":"فيديوهات يوتيوب";
  btnContact.textContent = currentLang==="fr"?"Contact":currentLang==="en"?"Contact":"التواصل";
};
