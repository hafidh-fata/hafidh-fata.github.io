const translations={
en:{
skip:"Skip to content",navHome:"Home",navAbout:"About",navResearch:"Research",navPublications:"Publications",navTeaching:"Teaching",navContact:"Contact",
role:"Mathematics · Dynamical Systems",intro:"Lecturer and researcher in nonlinear dynamical systems, bifurcation, and mathematical modelling.",position:"Lecturer in Mathematics",affiliation:"Universitas Diponegoro · Semarang, Indonesia",
artTop:"FROM MY RESEARCH",artCaption:"Sinusoidal Hénon map.",attractorName:"SINE–HÉNON MAP",
topic1:"Dynamical systems",topic2:"Bifurcation & chaos",topic3:"Delay & memory",topic4:"Mathematical modelling",openPage:"Open page ↗",
aboutLabel:"ABOUT",profileLabel:"PROFILE",aboutLead:"Lecturer in Mathematics at Universitas Diponegoro. Research interests include nonlinear dynamical systems, bifurcation, chaos, delay, and memory.",
factRole:"ROLE",factRoleValue:"Lecturer in Mathematics",factAff:"AFFILIATION",factAffValue:"Universitas Diponegoro",factField:"PRIMARY FIELD",factFieldValue:"Dynamical systems",
credentialsLabel:"CREDENTIALS",
researchLabel:"RESEARCH",researchPageTitle:"Nonlinear dynamics and bifurcation.",researchLead:"Analytical and numerical study of stability, bifurcation, chaos, delay, memory, and structure-preserving models.",
researchItem1:"Bifurcation & chaos",researchItem1Text:"Flip and Neimark–Sacker bifurcations, normal forms, multistability, and chaos.",
researchItem2:"Delay & memory",researchItem2Text:"Delayed adjustment and filtered feedback in discrete and continuous systems.",
researchItem3:"Mathematical modelling",researchItem3Text:"Population, epidemic, and other applied nonlinear models.",
researchItem4:"Numerical dynamics",researchItem4Text:"Continuation, Lyapunov indicators, parameter sweeps, basins, and simulation.",
pubLabel:"PUBLICATIONS",pubPageTitle:"Publications.",selectedWork:"SELECTED WORK",featured:"SELECTED PUBLICATION",readPaper:"Read paper ↗",institutionRecord:"UNDIP record ↗",
teachingLabel:"TEACHING",teachingPageTitle:"Teaching.",coursesLabel:"COURSES",course1:"Real Analysis",course2:"Partial Differential Equations",course3:"Algorithms & Programming",course4:"Engineering Mathematics",undergrad:"UNDERGRADUATE",
contactLabel:"CONTACT",contactPageTitle:"Contact.",emailLabel:"EMAIL",profilesLabel:"PROFILES",locationLabel:"AFFILIATION",locationValue:"Department of Mathematics · Universitas Diponegoro",
pause:"Pause",resume:"Resume",replay:"Replay",drawing:"Forming the attractor",paused:"Animation paused",complete:"Attractor complete",staticOrbit:"Reduced motion · static view",
footerLocation:"Department of Mathematics · Universitas Diponegoro"
},
id:{
skip:"Langsung ke isi",navHome:"Beranda",navAbout:"Profil",navResearch:"Riset",navPublications:"Publikasi",navTeaching:"Pengajaran",navContact:"Kontak",
role:"Matematika · Sistem Dinamik",intro:"Dosen dan peneliti pada sistem dinamik nonlinear, bifurkasi, dan pemodelan matematika.",position:"Dosen Matematika",affiliation:"Universitas Diponegoro · Semarang, Indonesia",
artTop:"DARI RISET SAYA",artCaption:"Peta Hénon sinusoidal.",attractorName:"PETA SINE–HÉNON",
topic1:"Sistem dinamik",topic2:"Bifurkasi & chaos",topic3:"Delay & memori",topic4:"Pemodelan matematika",openPage:"Buka halaman ↗",
aboutLabel:"PROFIL",profileLabel:"PROFIL",aboutLead:"Dosen Matematika di Universitas Diponegoro. Minat riset meliputi sistem dinamik nonlinear, bifurkasi, chaos, delay, dan memori.",
factRole:"PERAN",factRoleValue:"Dosen Matematika",factAff:"AFILIASI",factAffValue:"Universitas Diponegoro",factField:"BIDANG UTAMA",factFieldValue:"Sistem dinamik",
credentialsLabel:"KREDENSIAL",
researchLabel:"RISET",researchPageTitle:"Dinamika nonlinear dan bifurkasi.",researchLead:"Kajian analitik dan numerik tentang kestabilan, bifurkasi, chaos, delay, memori, dan model yang mempertahankan struktur.",
researchItem1:"Bifurkasi & chaos",researchItem1Text:"Bifurkasi flip dan Neimark–Sacker, bentuk normal, multistabilitas, dan chaos.",
researchItem2:"Delay & memori",researchItem2Text:"Penyesuaian tertunda dan umpan balik terfilter pada sistem diskret dan kontinu.",
researchItem3:"Pemodelan matematika",researchItem3Text:"Model populasi, epidemi, dan model nonlinear terapan lainnya.",
researchItem4:"Dinamika numerik",researchItem4Text:"Kontinuasi, indikator Lyapunov, sweep parameter, basin, dan simulasi.",
pubLabel:"PUBLIKASI",pubPageTitle:"Publikasi.",selectedWork:"KARYA PILIHAN",featured:"PUBLIKASI PILIHAN",readPaper:"Baca artikel ↗",institutionRecord:"Rekam UNDIP ↗",
teachingLabel:"PENGAJARAN",teachingPageTitle:"Pengajaran.",coursesLabel:"MATA KULIAH",course1:"Analisis Riil",course2:"Persamaan Diferensial Parsial",course3:"Algoritma & Pemrograman",course4:"Matematika Teknik",undergrad:"PROGRAM SARJANA",
contactLabel:"KONTAK",contactPageTitle:"Kontak.",emailLabel:"EMAIL",profilesLabel:"PROFIL",locationLabel:"AFILIASI",locationValue:"Departemen Matematika · Universitas Diponegoro",
pause:"Jeda",resume:"Lanjutkan",replay:"Putar ulang",drawing:"Membentuk atraktor",paused:"Animasi dijeda",complete:"Atraktor lengkap",staticOrbit:"Gerak dikurangi · tampilan statis",
footerLocation:"Departemen Matematika · Universitas Diponegoro"
}
};
const pageTitles={home:{en:"Hafidh Khoerul Fata · Mathematics & Dynamics",id:"Hafidh Khoerul Fata · Matematika & Dinamika"},about:{en:"About · Hafidh Khoerul Fata",id:"Profil · Hafidh Khoerul Fata"},research:{en:"Research · Hafidh Khoerul Fata",id:"Riset · Hafidh Khoerul Fata"},publications:{en:"Publications · Hafidh Khoerul Fata",id:"Publikasi · Hafidh Khoerul Fata"},teaching:{en:"Teaching · Hafidh Khoerul Fata",id:"Pengajaran · Hafidh Khoerul Fata"},contact:{en:"Contact · Hafidh Khoerul Fata",id:"Kontak · Hafidh Khoerul Fata"}};
let updateOrbitControls=()=>{};
function setLanguage(lang){
 if(!translations[lang])lang="en";
 document.documentElement.lang=lang;
 document.querySelectorAll("[data-i18n]").forEach(el=>{const v=translations[lang][el.dataset.i18n];if(v!==undefined)el.textContent=v});
 document.querySelectorAll("[data-lang]").forEach(el=>el.setAttribute("aria-pressed",String(el.dataset.lang===lang)));
 const nav=document.querySelector("nav");if(nav)nav.setAttribute("aria-label",lang==="id"?"Navigasi utama":"Main navigation");
 const page=document.body.dataset.page||"home";document.title=(pageTitles[page]||pageTitles.home)[lang];
 const attractorTitle=document.getElementById("attractor-title");if(attractorTitle)attractorTitle.textContent=lang==="id"?"Atraktor chaos peta Hénon sinusoidal yang diteliti Fata dan Ashar":"Chaotic attractor of the sinusoidal Hénon map studied by Fata and Ashar";
 try{localStorage.setItem("hafidh-language",lang)}catch{}
 updateOrbitControls();
}
document.querySelectorAll("[data-lang]").forEach(el=>el.addEventListener("click",()=>setLanguage(el.dataset.lang)));
let preferred="en";try{preferred=localStorage.getItem("hafidh-language")||"en"}catch{}
setLanguage(preferred);
const year=document.getElementById("year");if(year)year.textContent=new Date().getFullYear();
const current=document.body.dataset.page;const active=document.querySelector('[data-nav="'+current+'"]');if(active)active.setAttribute("aria-current","page");
(function initOrbit(){
 const orbitGroup=document.getElementById("orbit-art");if(!orbitGroup)return;
 const a=3.94958,b=.478992;let x=.1,y=0;const points=[];
 for(let i=0;i<40000;i++){const nextX=1-a*Math.sin(x)+y;y=b*x;x=nextX;if(i>=10000)points.push([x,y])}
 let xmin=Infinity,xmax=-Infinity,ymin=Infinity,ymax=-Infinity;
 for(const [px,py] of points){xmin=Math.min(xmin,px);xmax=Math.max(xmax,px);ymin=Math.min(ymin,py);ymax=Math.max(ymax,py)}
 const scale=Math.min(420/(xmax-xmin),275/(ymax-ymin)),cx=(xmin+xmax)/2,cy=(ymin+ymax)/2,svgNS="http://www.w3.org/2000/svg";
 const screenPoints=points.map(([px,py])=>[250+(px-cx)*scale,275-(py-cy)*scale]),batches=[],batchSize=300;
 for(let i=0;i<screenPoints.length;i+=batchSize){let d="";for(const [px,py] of screenPoints.slice(i,i+batchSize))d+="M"+px.toFixed(2)+" "+py.toFixed(2)+"h.05";const node=document.createElementNS(svgNS,"path");for(const [key,value] of Object.entries({d,fill:"none",stroke:"url(#orbit)","stroke-width":".8","stroke-linecap":"round",opacity:".65",visibility:"hidden"}))node.setAttribute(key,value);orbitGroup.append(node);batches.push(node)}
 const newest=document.createElementNS(svgNS,"circle");newest.setAttribute("r","2");newest.setAttribute("fill","#f3ddaa");newest.setAttribute("visibility","hidden");orbitGroup.append(newest);
 const motion=window.matchMedia("(prefers-reduced-motion: reduce)"),toggle=document.getElementById("orbit-toggle"),replay=document.getElementById("orbit-replay"),status=document.getElementById("orbit-status");
 let revealed=0,elapsed=0,lastTime=null,frameId=null,playing=false,inView=true;const duration=12000;
 function showBatches(count){for(let i=revealed;i<count;i++)batches[i].setAttribute("visibility","visible");revealed=count;if(count>0&&count<batches.length){const [px,py]=screenPoints[Math.min(count*batchSize,screenPoints.length)-1];newest.setAttribute("cx",px);newest.setAttribute("cy",py);newest.setAttribute("visibility","visible")}else newest.setAttribute("visibility","hidden")}
 updateOrbitControls=()=>{const t=translations[document.documentElement.lang]||translations.en;toggle.textContent=playing?t.pause:t.resume;toggle.disabled=motion.matches||revealed===batches.length;replay.textContent=t.replay;replay.disabled=motion.matches;const key=motion.matches?"staticOrbit":revealed===batches.length?"complete":playing?"drawing":"paused";status.textContent=t[key]};
 function stopFrame(){if(frameId!==null)cancelAnimationFrame(frameId);frameId=null;lastTime=null}
 function schedule(){if(playing&&!motion.matches&&!document.hidden&&inView&&frameId===null)frameId=requestAnimationFrame(advance)}
 function advance(time){frameId=null;if(!playing||motion.matches||document.hidden||!inView){lastTime=null;return}if(lastTime!==null)elapsed+=Math.min(time-lastTime,100);lastTime=time;showBatches(Math.min(batches.length,Math.floor(elapsed/duration*batches.length)));if(revealed===batches.length){playing=false;lastTime=null;updateOrbitControls()}else schedule()}
 function restart(){stopFrame();if(motion.matches){showBatches(batches.length);playing=false;updateOrbitControls();return}for(const node of batches)node.setAttribute("visibility","hidden");revealed=0;elapsed=0;playing=true;newest.setAttribute("visibility","hidden");updateOrbitControls();schedule()}
 toggle.addEventListener("click",()=>{if(motion.matches||revealed===batches.length)return;playing=!playing;stopFrame();updateOrbitControls();schedule()});
 replay.addEventListener("click",restart);document.addEventListener("visibilitychange",()=>{stopFrame();schedule()});
 if("IntersectionObserver" in window){const observer=new IntersectionObserver(entries=>{inView=entries[0].isIntersecting;stopFrame();schedule()},{threshold:0});observer.observe(document.querySelector(".art"))}
 motion.addEventListener("change",()=>{stopFrame();if(motion.matches){playing=false;showBatches(batches.length);updateOrbitControls()}else restart()});
 restart();setLanguage(document.documentElement.lang);
})();