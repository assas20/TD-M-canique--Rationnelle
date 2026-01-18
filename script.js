/***********************************
 * ====== الطلاب ======
 ***********************************/
const studentsG08 = [
  "Abderrezek Akram","Ameziane Sid-Ali","Belaidi Abdellatif","Benadjiel Wissam","Benali Abdallah Merouane",
  "Benguessoum Mohamed Arezki","BENKEZIM Sofiane","Biou Mohamed Amine","Bouhealouane Faiz","Bouska Chokri",
  "Bouzar Dilmi Djihad","Chendri Zakaria","Dilmi Anes","Guehaz Sifeddine","Hamzaoui Dina",
  "Khattab Ilyes Abdelaziz","Khiat Sarra","Larbi Maria","Mazouzi Hadil","Mezghrani Dalia",
  "Rachidi Zakaria","Seddiki Khouloud","Smail Ziad","Yahiaoui Hamza","Ziouar Khaoula"
];

const studentsG07 = [
  "Allouche Mohammed Abdellah","Belaid Wail","Ben Amor Lokmane",
  "Benabderrahmane Tahhil Fadjer","Benkaddour Abdelkader Mahieddine",
  "Berziga Mohamed","Boughara Achraf","Bousba Aymen","Chellali Abdessalam",
  "Dib Nesrine","Guadi Zahra","Kadri Mourad","Khettar Azouaou",
  "Lidi Moussa Mohamed Yacine","Maouche Abdelhak","Messaoudene Chouaib",
  "Necibdia Abdelmouay","Ouzenati Khokha","Sari Aymen","Yahi Hadda Lyna","Zerrouga Younes"
];

/***********************************
 * ====== بيانات الحضور ======
 ***********************************/
const g08Data = {
  "28/10/2025":["Présent","Présent","Présent","Présent","Absent","Présent","Présent","Absent","Présent","Présent","Présent","Présent","Absent","Présent","Absence Justifiée","Présent","Présent","Présent","Présent","Présent","Présent","Absent","Présent","Présent","Présent"],
  "04/11/2025":["Présent","Présent","Présent","Présent","Présent","Présent","Présent","Présent","Présent","Présent","Absent","Présent","Présent","Présent","Absent","Présent","Absent","Absent","Absent","Présent","Présent","Présent","Présent","Présent","Présent"],
  "11/11/2025":Array(25).fill("Présent"),
  "18/11/2025":["Présent","Présent","Présent","Présent","Absent","Présent","Présent","Présent","Présent","Présent","Présent","Présent","Présent","Présent","Présent","Présent","Présent","Présent","Présent","Présent","Présent","Présent","Présent","Présent","Présent"],
  "25/11/2025":Array(25).fill("Présent"),
  "02/12/2025":Array(25).fill("Présent"),
  "09/12/2025":["Présent","Présent","Absent","Présent","Présent","Présent","Absent","Absent","Présent","Présent","Présent","Présent","Présent","Présent","Présent","Présent","Absent","Présent","Présent","Présent","Présent","Présent","Présent","Présent","Présent","Présent"],
  "16/12/2025":["Absent","Présent","Présent","Présent","Absent","Présent","Présent","Présent","Présent","Présent","Présent","Présent","Présent","Présent","Présent","Absence Justifiée","Absent","Présent","Présent","Présent","Présent","Absent","Présent","Absent","Présent","Présent"],
  "23/12/2025":Array(25).fill("Holiday"),
  "30/12/2025":Array(25).fill("Holiday"),
  "06/01/2026":Array(25).fill("Présent"),
  "13/01/2026":["Présent","Présent","Présent","Présent","Absent","Présent","Présent","Absent","Présent","Présent","Présent","Absent","Présent","Présent","Présent","Présent","Présent","Présent","Présent","Absent","Présent","Présent","Présent","Présent","Absent"]
};

const g07Data = {
  "28/10/2025":["Présent","Absence Justifiée","Présent","Présent","Absent","Présent","Présent","Présent","Absent","Absent","Présent","Présent","Présent","Présent","Absence Justifiée","Absent","Présent","Absence Justifiée","Présent","Présent","Absent"],
  "04/11/2025":Array(21).fill("Présent"),
  "11/11/2025":["Présent","Présent","Présent","Présent","Présent","Présent","Présent","Présent","Présent","Présent","Présent","Absence Justifiée","Présent","Présent","Présent","Absent","Présent","Présent","Présent","Présent","Présent"],
  "18/11/2025":Array(21).fill("Présent"),
  "25/11/2025":["Présent","Présent","Absent","Présent","Absent","Présent","Présent","Présent","Absent","Présent","Présent","Présent","Présent","Présent","Absence Justifiée","Présent","Présent","Présent","Présent","Présent","Présent"],
  "02/12/2025":["Présent","Présent","Absence Justifiée","Présent","Présent","Présent","Présent","Présent","Présent","Présent","Présent","Absent","Présent","Présent","Présent","Présent","Présent","Présent","Présent","Présent","Présent"],
  "09/12/2025":Array(21).fill("Présent"),
  "16/12/2025":["Absence Justifiée","Absence Justifiée","Présent","Présent","Absent","Présent","Présent","Présent","Présent","Absent","Présent","Présent","Présent","Présent","Absent","Absent","Absent","Présent","Présent","Présent","Absent"],
  "06/01/2026":Array(21).fill("Présent"),
  "13/01/2026":["Présent","Présent","Présent","Présent","Absent","Présent","Présent","Présent","Présent","Présent","Présent","Présent","Présent","Présent","Présent","Absent","Absent","Présent","Présent","Présent","Absent"]
};

/***********************************
 * ====== TDs مترجمة ======
 ***********************************/
const TDs = {
  S03:[
    {title:{fr:"Série TD N°01 : Les outils mathématiques",en:"Tutorial Sheet N°01: Math Tools",ar:"السلسلة 01: الأدوات الرياضية"}, pdf:"TD01.pdf"},
    {title:{fr:"Série TD N°02 : Moments des forces",en:" Tutorial Sheet N° 02: Moments of Forces",ar:"السلسلة 02: عزم القوى"}, pdf:"TD02.pdf"},
    {title:{fr:"Série TD N°03 : Les Torseurs",en:" Tutorial Sheet N°03: Torques",ar:"السلسلة 03: العزوم"}, pdf:"TD03.pdf"},
    {title:{fr:"Série TD N°04 : Statique du solide",en:" Tutorial Sheet N°04: Solid Statics",ar:"السلسلة 04: سكون الصلب"}, pdf:"TD04.pdf"}
  ],
  S04:[
    {title:{fr:"Série TD N°05 : Exemple TD 05",en:" Tutorial Sheet N° 05: Example TD 05",ar:"السلسلة 05: مثال TD 05"}, pdf:"TD05.pdf"},
    {title:{fr:"Série TD N°06 : Exemple TD 06",en:" Tutorial Sheet N°06: Example TD 06",ar:"السلسلة 06: مثال TD 06"}, pdf:"TD06.pdf"},
    {title:{fr:"Série TD N°07 : Exemple TD 07",en:" Tutorial Sheet N°07: Example TD 07",ar:"السلسلة 07: مثال TD 07"}, pdf:"TD07.pdf"},
    {title:{fr:"Série TD N°08 : Exemple TD 08",en:" Tutorial Sheet N°08: Example TD 08",ar:"السلسلة 08: مثال TD 08"}, pdf:"TD08.pdf"}
  ]
};

/***********************************
 * ====== الفيديوهات ======
 ***********************************/
const videoLinks = [
  "https://youtube.com/playlist?list=PLAh__9lJn0k8HewWhb4ytEIhlV4BbV3GV",
  "https://youtube.com/playlist?list=PLvkDaCOYDNUgV-S7TIw8S8YRr3dtkObjK",
  "https://youtu.be/CFbH3hHYPv8",
  "https://youtu.be/NIP8Xa4LSJY",
  "https://youtu.be/zIbOQsnVhZk",
  "https://youtu.be/ub7M0qo6zek",
  "https://youtu.be/oHWq2ls4aLc",
  "https://youtu.be/XkIL3fvLKsM",
  "https://youtu.be/gTZvyS3Pxa8",
  "https://youtu.be/D2fsBKSkGp4",
  "https://youtu.be/DKbiOEhJgJc",
  "https://youtu.be/Os6XL15--BI",
  "https://youtu.be/Ob9R8WYbneQ"
];

/***********************************
 * ====== عناصر الصفحة ======
 ***********************************/
const tdContainer=document.getElementById("tdContainer");
const presenceContainer=document.getElementById("presenceContainer");
const languageSelect=document.getElementById("languageSelect");
const btnS03=document.getElementById("btnS03");
const btnS04=document.getElementById("btnS04");
const btnListe=document.getElementById("btnListe");
const btnCours=document.getElementById("btnCours");
const btnProgramme=document.getElementById("btnProgramme");
const btnLivre=document.getElementById("btnLivre");
const btnVideo=document.getElementById("btnVideo");
const btnContact=document.getElementById("btnContact");

let currentLang="fr";

/***********************************
 * ====== الأدوات العامة ======
 ***********************************/
function clearAll(){ tdContainer.innerHTML=""; presenceContainer.innerHTML=""; }
function showSimpleBox(title, html){
  clearAll();
  presenceContainer.innerHTML=`<div class="td-detail"><h3>${title}</h3>${html}</div>`;
}

/***********************************
 * ====== عرض TDs ======
 ***********************************/
function showTDSerie(tds){
  clearAll();
  tds.forEach(td=>{
    const div=document.createElement("div");
    div.className="td-detail";
    div.innerHTML=`<h2 class="series-title">${td.title[currentLang]}</h2>
                   <p>PDF : <a href="${td.pdf}" target="_blank">${td.pdf}</a></p>`;
    tdContainer.appendChild(div);
  });
}
btnS03.onclick=()=>showTDSerie(TDs.S03);
btnS04.onclick=()=>showTDSerie(TDs.S04);

/***********************************
 * ====== عرض الحضور ======
 ***********************************/
btnListe.onclick=()=>{
  clearAll();
  ["G08","G07"].forEach(group=>{
    const btn=document.createElement("button");
    btn.className="collapsible";
    btn.textContent=group;
    const wrap=document.createElement("div");
    wrap.className="table-wrapper";
    presenceContainer.appendChild(btn);
    presenceContainer.appendChild(wrap);

    btn.onclick=()=>wrap.style.display=(wrap.style.display==="block"?"none":"block");
    renderTable(group==="G08"?g08Data:g07Data,group,wrap);
  });
};

function renderTable(data, group, container){
  container.innerHTML="";
  const table=document.createElement("table");
  const students=group==="G08"?studentsG08:studentsG07;
  let abs={}; students.forEach(s=>abs[s]=0);

  // Table header
  let head="<tr><th>#</th><th>Nom</th>";
  Object.keys(data).forEach(d=>head+=`<th>${d}</th>`);
  head+="</tr>";
  table.innerHTML=head;

  students.forEach((s,i)=>{
    let row=`<tr><td>${i+1}</td><td>${s}</td>`;
    Object.keys(data).forEach(d=>{
      let raw=data[d][i]||"Présent";
      let key=raw==="Absent"?"Absent":raw==="Absence Justifiée"?"Justified":raw==="Holiday"?"Holiday":"Present";
      if(key==="Absent") abs[s]++;
      let warning=abs[s]>3?`<br>⚠️ L'étudiant a dépassé le nombre légal d'absences (3).`:"";
      row+=`<td class="status-${key}">${key}${warning}</td>`;
    });
    row+="</tr>";
    table.innerHTML+=row;
  });
  container.appendChild(table);
}

/***********************************
 * ====== الدروس والبرامج والكتب والفيديو ======
 ***********************************/
btnCours.onclick=()=>showSimpleBox(
  currentLang==="fr"?"Cours":currentLang==="en"?"Course":"الدروس",
  "<ul><li>Statique</li><li>Cinématique</li><li>Torseurs</li></ul>"
);

btnProgramme.onclick=()=>showSimpleBox(
  currentLang==="fr"?"Programme Pédagogique":currentLang==="en"?"Pedagogical Program":"البرنامج البيداغوجي",
  "<p>Programme officiel ENSTP – CPST</p>"
);

btnLivre.onclick=()=>showSimpleBox(
  currentLang==="fr"?"Livre":currentLang==="en"?"Book":"الكتاب",
  "<ul><li>Mécanique Rationnelle – ENSTP</li><li>Hibbeler</li></ul>"
);

btnVideo.onclick=()=>{
  let html="";
  videoLinks.forEach(v=>{ html+=`<p><a href="${v}" target="_blank">${v}</a></p>`; });
  showSimpleBox(currentLang==="fr"?"Vidéos YouTube":currentLang==="en"?"YouTube Videos":"فيديوهات يوتيوب",html);
};

/***********************************
 * ====== Contact ======
 ***********************************/
btnContact.onclick=()=>showSimpleBox(
  currentLang==="fr"?"Contact":currentLang==="en"?"Contact":"التواصل",
  `<p><strong>Email :</strong> <a href="mailto:taqiyeddine.assas@univ-biskra.dz">taqiyeddine.assas@univ-biskra.dz</a></p>
  <div class="social-icons">
    <a href="https://www.linkedin.com/in/taqiyeddine-assas-770696378" target="_blank"><i class="fab fa-linkedin"></i></a>
    <a href="https://www.researchgate.net/profile/Taqiyeddine-Assas" target="_blank"><i class="fab fa-researchgate"></i></a>
    <a href="https://scholar.google.com/citations?user=Gk1u97UAAAAJ&hl=fr&oi=ao" target="_blank"><i class="fas fa-graduation-cap"></i></a>
    <a href="https://orcid.org/0009-0001-4288-2908" target="_blank"><i class="fab fa-orcid"></i></a>
    <a href="mailto:taqiyeddine.assas@univ-biskra.dz"><i class="fas fa-envelope"></i></a>
  </div>`
);

/***********************************
 * ====== تغيير اللغة ======
 ***********************************/
languageSelect.onchange=()=>{
  currentLang=languageSelect.value;
  btnS03.textContent=currentLang==="fr"?"Semestre 03":currentLang==="en"?"Semester 03":"الفصل 03";
  btnS04.textContent=currentLang==="fr"?"Semestre 04":currentLang==="en"?"Semester 04":"الفصل 04";
  btnListe.textContent=currentLang==="fr"?"Liste de Présence":currentLang==="en"?"Attendance List":"قائمة الحضور";
  btnCours.textContent=currentLang==="fr"?"Cours":currentLang==="en"?"Course":"الدروس";
  btnProgramme.textContent=currentLang==="fr"?"Programme pédagogique":currentLang==="en"?"Pedagogical Program":"البرنامج البيداغوجي";
  btnLivre.textContent=currentLang==="fr"?"Livre":currentLang==="en"?"Book":"الكتاب";
  btnVideo.textContent=currentLang==="fr"?"Vidéos YouTube":currentLang==="en"?"YouTube Videos":"فيديوهات يوتيوب";
  btnContact.textContent=currentLang==="fr"?"Contact":currentLang==="en"?"Contact":"التواصل";
};
