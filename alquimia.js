// ============================================
//   ALQUIMIA NOCTURNA — alquimia.js
// ============================================

// ======= DATA =======
const pociones = [
  {id:1,icon:"🌹",name:"Sangre de Rosa",cat:"Florales",desc:"Ginebra premium macerada con pétalos de rosa damascena, agua de azahar, limón y soda floral. Ligera, aromática y elegante.",price:"$28.000",priceN:28000,dur:"—",tags:["Gin","Floral","Seco"],isNew:false},
  {id:2,icon:"🌿",name:"Veneno Verde",cat:"Herbales",desc:"Mezcal artesanal, albahaca fresca machacada, pepino, lima y una pizca de sal de gusano. Complejo y profundo.",price:"$32.000",priceN:32000,dur:"—",tags:["Mezcal","Herbal","Ahumado"],isNew:true},
  {id:3,icon:"🍓",name:"Elixir Carmesí",cat:"Frutales",desc:"Ron añejo, frutos rojos colombianos macerados, jugo de tamarindo y jengibre. El elixir de los dioses locales.",price:"$26.000",priceN:26000,dur:"—",tags:["Ron","Dulce","Tropical"],isNew:false},
  {id:4,icon:"🔥",name:"Fuego del Diablo",cat:"Picantes",desc:"Tequila reposado, mango fresco, habanero infusionado, lima y sal de chili. Para espíritus valientes.",price:"$30.000",priceN:30000,dur:"—",tags:["Tequila","Picante","Mango"],isNew:true},
  {id:5,icon:"❄️",name:"Cristal de Hielo",cat:"Sin Alcohol",desc:"Agua de coco, lulo colombiano, menta fresca, agua con gas y flores de hibisco. Pureza helada en cada sorbo.",price:"$18.000",priceN:18000,dur:"—",tags:["Sin Alcohol","Refrescante","Local"],isNew:false},
  {id:6,icon:"🌙",name:"Poción Lunar",cat:"Especiales",desc:"Vodka infusionado con lavanda, licor de violeta, limón y clara de huevo. Solo disponible después de las 10 PM.",price:"$35.000",priceN:35000,dur:"—",tags:["Vodka","Floral","Especial"],isNew:false},
  {id:7,icon:"⚡",name:"Rayo de Ámbar",cat:"Clásicos",desc:"Whisky bourbon, miel de abeja local, jengibre fresco exprimido y soda. El favorito de los maestros alquimistas.",price:"$29.000",priceN:29000,dur:"—",tags:["Whisky","Miel","Clásico"],isNew:false},
  {id:8,icon:"🍋",name:"Sol del Valle",cat:"Frutales",desc:"Pisco peruano, limón tahití, azúcar de panela, clara de huevo y angostura. Homenaje al cielo caleño.",price:"$27.000",priceN:27000,dur:"—",tags:["Pisco","Ácido","Cremoso"],isNew:false},
  {id:9,icon:"🫐",name:"Niebla Azul",cat:"Especiales",desc:"Ginebra envejecida, arándanos macerados, romero ahumado, tónica premium. Un viaje sensorial completo.",price:"$33.000",priceN:33000,dur:"—",tags:["Gin","Ahumado","Berries"],isNew:true},
  {id:10,icon:"🥥",name:"Leche de la Luna",cat:"Sin Alcohol",desc:"Leche de coco artesanal, agua de rosas, jarabe de lavanda y espuma de clara. Suave y etéreo.",price:"$16.000",priceN:16000,dur:"—",tags:["Sin Alcohol","Cremoso","Floral"],isNew:false},
  {id:11,icon:"🌶",name:"Sangría Oscura",cat:"Clásicos",desc:"Vino tinto especiado, brandy, naranja, canela, clavo y un toque de chile negro. Cálido y envolvente.",price:"$24.000",priceN:24000,dur:"—",tags:["Vino","Especiado","Cálido"],isNew:false},
  {id:12,icon:"🍵",name:"Té de los Muertos",cat:"Herbales",desc:"Sotol mexicano, té negro concentrado, limón, jarabe de hierbas silvestres y sal ahumada. Para los iniciados.",price:"$31.000",priceN:31000,dur:"—",tags:["Sotol","Herbal","Oscuro"],isNew:false},
];

const alquimistas = [
  {id:1,name:"Jhon Jairo Parra",rol:"Maestro Alquimista & Fundador",init:"JJ",colBg:"linear-gradient(135deg,#1a0c06,#2a1208)",colAcc:"#c8a84b",rating:5.0,votes:528,brebajes:12400,artes:["Florales","Técnica Japonesa","Macerados","Fermentados"],activo:true},
  {id:2,name:"Sebastián Banguera",rol:"Arquitecto del Santuario & Co-Fundador",init:"SB",colBg:"linear-gradient(135deg,#1a0a1a,#28102a)",colAcc:"#8b1a1a",rating:4.9,votes:412,brebajes:10800,artes:["Especiales","Ahumados","Moleculares","Destilados"],activo:true},
  {id:3,name:"Valentina Hurtado",rol:"Alquimista de Plantas",init:"VH",colBg:"linear-gradient(135deg,#061a0a,#0a2810)",colAcc:"#2a6a3a",rating:4.8,votes:334,brebajes:7200,artes:["Herbales","Sin Alcohol","Infusiones","Botánica"],activo:true},
  {id:4,name:"Diego Murillo",rol:"Maestro del Fuego",init:"DM",colBg:"linear-gradient(135deg,#1a0600,#281000)",colAcc:"#8b3a0f",rating:4.7,votes:256,brebajes:5600,artes:["Picantes","Ahumados","Tequila","Mezcal"],activo:false},
  {id:5,name:"Camila Aristizábal",rol:"Guardiana de Fórmulas",init:"CA",colBg:"linear-gradient(135deg,#0a1018,#121828)",colAcc:"#3a6a8b",rating:4.6,votes:178,brebajes:3800,artes:["Clásicos","Vinos","Destilados","Historia"],activo:true},
  {id:6,name:"Felipe Caicedo",rol:"Aprendiz del Arte",init:"FC",colBg:"linear-gradient(135deg,#100a18,#181020)",colAcc:"#6a3a8b",rating:4.3,votes:89,brebajes:1200,artes:["Frutales","Clásicos","Gin","Basics"],activo:false},
];

const galeria = [
  {cat:"El Laboratorio",titulo:"La Barra Principal",desc:"Donde la alquimia cobra vida cada noche.",colBg:"#1a0c06",colAcc:"#c8a84b",tipo:"barra"},
  {cat:"El Santuario",titulo:"Zona de Contemplación",desc:"Ambiente diseñado para que el tiempo se detenga.",colBg:"#0a0614",colAcc:"#8b3a3a",tipo:"zona"},
  {cat:"Las Pociones",titulo:"Pociones de la Casa",desc:"Cinco siglos de alquimia concentrados en una copa.",colBg:"#060a14",colAcc:"#3a6a8b",tipo:"pociones"},
  {cat:"Los Ingredientes",titulo:"Materia Prima del Valle",desc:"Botanicals, especias y frutas del Valle del Cauca.",colBg:"#060e06",colAcc:"#2a6a3a",tipo:"ingredientes"},
  {cat:"La Noche",titulo:"El Ritual Nocturno",desc:"La transformación comienza cuando cae el sol.",colBg:"#080610",colAcc:"#6a3a8b",tipo:"noche"},
];

// Oracle questions & potion mapping
const oracleQuestions = [
  {
    q:"¿Qué sientes que necesita tu espíritu esta noche?",
    opts:[
      {label:"🌹 Frescura y ligereza",val:"floral"},
      {label:"🔥 Intensidad y calor",val:"intense"},
      {label:"🌙 Misterio y profundidad",val:"dark"},
      {label:"☀️ Alegría y frutas",val:"frutal"},
    ]
  },
  {
    q:"¿Qué te trajo hasta el santuario?",
    opts:[
      {label:"💃 Celebrar algo especial",val:"celebracion"},
      {label:"🧘 Descansar y desconectar",val:"relax"},
      {label:"🗣️ Buena conversación",val:"social"},
      {label:"🔮 Simple curiosidad",val:"curioso"},
    ]
  },
  {
    q:"¿Qué sabor domina tu paladar?",
    opts:[
      {label:"🍋 Ácido y vibrante",val:"acido"},
      {label:"🍯 Dulce y suave",val:"dulce"},
      {label:"🌿 Herbal y terroso",val:"herbal"},
      {label:"🌶 Atrevido y picante",val:"picante"},
    ]
  },
];

// Potion recommendation matrix
function getOraclePotion(answers){
  const [a1,a2,a3] = answers;
  if(a1==='floral' && a3==='acido') return pociones[0];   // Sangre de Rosa
  if(a1==='intense' && a3==='picante') return pociones[3]; // Fuego del Diablo
  if(a1==='dark') return pociones[8];                      // Niebla Azul
  if(a1==='frutal' && a3==='dulce') return pociones[2];    // Elixir Carmesí
  if(a3==='herbal') return pociones[1];                    // Veneno Verde
  if(a3==='dulce' && a2==='relax') return pociones[9];     // Leche de la Luna
  if(a1==='frutal') return pociones[7];                    // Sol del Valle
  if(a1==='intense') return pociones[6];                   // Rayo de Ámbar
  if(a2==='celebracion') return pociones[5];               // Poción Lunar
  return pociones[Math.floor(Math.random()*pociones.length)];
}

// ======= STATE =======
const votadosAlch = new Set();
let ritualData = {alch:null, pocion:null, fecha:null, hora:null, pago:null};
let oracleAnswers = [];
let oracleStep = 0;
let galIndex = 0;
let galAutoIv = null;
let currentSpell = 1;

// ======= INIT =======
document.addEventListener('DOMContentLoaded',()=>{
  initParticles();
  initCursor();
  initRunes();
  initCover();
  initNav();
  initReveal();
  renderPociones();
  initPotionTabs();
  renderAlquimistas();
  renderGaleria();
  initRitualForm();
  initOracleSection();
  initDateRitual();
});

// ======= PARTICLES =======
function initParticles(){
  const canvas = document.getElementById('particleCanvas');
  if(!canvas) return;
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  window.addEventListener('resize',()=>{canvas.width=window.innerWidth;canvas.height=window.innerHeight});

  const particles = Array.from({length:60},()=>({
    x:Math.random()*canvas.width, y:Math.random()*canvas.height,
    size:Math.random()*2+0.5,
    speedX:(Math.random()-0.5)*0.3, speedY:-Math.random()*0.5-0.1,
    opacity:Math.random()*0.5+0.1,
    hue:Math.random()>0.7?0:40, // crimson or gold
  }));

  function drawParticles(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    particles.forEach(p=>{
      ctx.beginPath();
      ctx.arc(p.x,p.y,p.size,0,Math.PI*2);
      ctx.fillStyle = p.hue===0
        ? `rgba(139,26,26,${p.opacity})`
        : `rgba(200,168,75,${p.opacity})`;
      ctx.fill();
      // Glow
      ctx.beginPath();ctx.arc(p.x,p.y,p.size*2.5,0,Math.PI*2);
      ctx.fillStyle = p.hue===0
        ? `rgba(139,26,26,${p.opacity*0.15})`
        : `rgba(200,168,75,${p.opacity*0.15})`;
      ctx.fill();
      p.x+=p.speedX; p.y+=p.speedY;
      if(p.y<-10){p.y=canvas.height+10; p.x=Math.random()*canvas.width;}
      if(p.x<0||p.x>canvas.width)p.speedX*=-1;
    });
    requestAnimationFrame(drawParticles);
  }
  drawParticles();
}

// ======= CURSOR =======
function initCursor(){
  const quill = document.getElementById('cursorQuill');
  let mx=0,my=0;
  document.addEventListener('mousemove',e=>{
    mx=e.clientX; my=e.clientY;
    quill.style.left=mx+'px';
    quill.style.top=my+'px';
  });
}

// ======= FLOATING RUNES =======
function initRunes(){
  const layer = document.getElementById('runesLayer'); if(!layer) return;
  const symbols = ['⚗','✦','᛭','᛬','⚕','☽','☿','♄','⚶','⊕','᚛','᚜','ᚦ','ᚱ'];
  for(let i=0;i<16;i++){
    const el=document.createElement('div');
    el.className='rune-float';
    el.textContent=symbols[Math.floor(Math.random()*symbols.length)];
    el.style.left=Math.random()*100+'%';
    el.style.fontSize=(Math.random()*14+8)+'px';
    el.style.animationDuration=(Math.random()*20+15)+'s';
    el.style.animationDelay=(Math.random()*10)+'s';
    layer.appendChild(el);
  }
}

// ======= COVER =======
function initCover(){
  const cover = document.getElementById('grimCover');
  function openGrimoire(){
    cover.classList.add('hidden');
    document.getElementById('grimNav').classList.add('scrolled');
    playChime();
  }
  cover.addEventListener('click', openGrimoire);
  document.addEventListener('keydown', openGrimoire, {once:true});
  // Auto-open after 5s
  setTimeout(openGrimoire, 5000);
}

// ======= NAV =======
function initNav(){
  window.addEventListener('scroll',()=>{
    document.getElementById('grimNav').classList.toggle('scrolled',window.scrollY>80);
  });
  document.getElementById('gnHam')?.addEventListener('click',()=>{
    document.getElementById('gnMobile').classList.toggle('open');
  });
}
function closeGnMobile(){ document.getElementById('gnMobile').classList.remove('open'); }
function scrollTo(id){ document.getElementById(id)?.scrollIntoView({behavior:'smooth'}); }

// ======= REVEAL =======
function initReveal(){
  const obs=new IntersectionObserver(entries=>{
    entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible');});
  },{threshold:0.1});
  document.querySelectorAll('.grim-reveal').forEach(el=>obs.observe(el));
}

// ======= SOUND (Web Audio) =======
let audioCtx=null;
function getAudioCtx(){if(!audioCtx){try{audioCtx=new(window.AudioContext||window.webkitAudioContext)();}catch(e){return null;}}return audioCtx;}
function playChime(){
  const ctx=getAudioCtx();if(!ctx)return;
  [440,554,659,880].forEach((freq,i)=>{
    const o=ctx.createOscillator(),g=ctx.createGain();
    o.connect(g);g.connect(ctx.destination);
    o.type='sine';o.frequency.value=freq;
    g.gain.setValueAtTime(0.06,ctx.currentTime+i*0.15);
    g.gain.exponentialRampToValueAtTime(0.001,ctx.currentTime+i*0.15+0.6);
    o.start(ctx.currentTime+i*0.15);o.stop(ctx.currentTime+i*0.15+0.8);
  });
}
function playClick(){
  const ctx=getAudioCtx();if(!ctx)return;
  const o=ctx.createOscillator(),g=ctx.createGain();
  o.connect(g);g.connect(ctx.destination);
  o.type='sine';o.frequency.value=660;
  g.gain.setValueAtTime(0.05,ctx.currentTime);
  g.gain.exponentialRampToValueAtTime(0.001,ctx.currentTime+0.1);
  o.start();o.stop(ctx.currentTime+0.15);
}
function playMagic(){
  const ctx=getAudioCtx();if(!ctx)return;
  [300,400,600,800,1200].forEach((f,i)=>{
    const o=ctx.createOscillator(),g=ctx.createGain();
    o.connect(g);g.connect(ctx.destination);
    o.type='sine';o.frequency.value=f;
    g.gain.setValueAtTime(0.04,ctx.currentTime+i*0.08);
    g.gain.exponentialRampToValueAtTime(0.001,ctx.currentTime+i*0.08+0.5);
    o.start(ctx.currentTime+i*0.08);o.stop(ctx.currentTime+i*0.08+0.6);
  });
}

// ======= POCIONES =======
function renderPociones(filter='Todas'){
  const grid=document.getElementById('potionGrimoire');if(!grid)return;
  const filtered=filter==='Todas'?pociones:pociones.filter(p=>p.cat===filter);
  grid.innerHTML=filtered.map((p,i)=>`
    <div class="potion-entry grim-reveal" style="transition-delay:${i*0.05}s">
      ${p.isNew?'<div class="pe-new">Nueva</div>':''}
      <div class="pe-num">Nº ${String(p.id).padStart(2,'0')}</div>
      <span class="pe-icon">${p.icon}</span>
      <div class="pe-cat">${p.cat}</div>
      <h3>${p.name}</h3>
      <p>${p.desc}</p>
      <div class="pe-foot">
        <span class="pe-price">${p.price}</span>
        <div class="pe-tags">${p.tags.map(t=>`<span class="pe-tag">${t}</span>`).join('')}</div>
      </div>
    </div>`).join('');
  setTimeout(()=>initReveal(),80);
}

function initPotionTabs(){
  const cats=['Todas',...new Set(pociones.map(p=>p.cat))];
  const cont=document.getElementById('potionTabs');if(!cont)return;
  cont.innerHTML=cats.map(c=>`
    <button class="ptab ${c==='Todas'?'active':''}" onclick="filterPociones('${c}',this)">${c}</button>`).join('');
}

function filterPociones(cat,btn){
  document.querySelectorAll('.ptab').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
  renderPociones(cat);
  playClick();
}

// ======= ALQUIMISTAS =======
function renderAlquimistas(){
  const grid=document.getElementById('alchemistsGrid');if(!grid)return;
  const sorted=[...alquimistas].sort((a,b)=>b.rating-a.rating||b.votes-a.votes);
  grid.innerHTML=sorted.map((a,i)=>{
    const rank=i+1;
    const voted=votadosAlch.has(a.id);
    return `
    <div class="alch-card grim-reveal" style="transition-delay:${i*0.08}s">
      <div class="alch-top" style="background:${a.colBg}">
        <div class="alch-init" style="color:${a.colAcc};text-shadow:0 0 20px ${a.colAcc}">${a.init}</div>
        <div class="alch-order">${rank}°</div>
        <div class="alch-status ${a.activo?'alch-active':'alch-off'}">${a.activo?'● En el Santuario':'○ Ausente'}</div>
      </div>
      <div class="alch-body">
        <h3>${a.name}</h3>
        <span class="alch-role">${a.rol}</span>
        <div class="alch-stars">${renderStars(a.rating)}<span class="alch-rating-n">${a.rating}</span></div>
        <div class="alch-votes">${a.votes.toLocaleString()} invocaciones · ${a.brebajes.toLocaleString()} brebajes</div>
        <div class="alch-arts">${a.artes.map(s=>`<span class="alch-art">${s}</span>`).join('')}</div>
        <button class="alch-vote-btn ${voted?'voted':''}" onclick="voteAlch(${a.id})">
          ${voted?'✦ Voto sellado':'✦ Votar por este maestro'}
        </button>
      </div>
    </div>`}).join('');
  setTimeout(()=>initReveal(),80);
}

function renderStars(r){
  let h='';
  for(let i=1;i<=5;i++){
    if(i<=Math.floor(r))h+=`<span class="alch-star on">★</span>`;
    else if(i-0.5<=r)h+=`<span class="alch-star on" style="opacity:0.55">★</span>`;
    else h+=`<span class="alch-star">★</span>`;
  }
  return h;
}

function voteAlch(id){
  if(votadosAlch.has(id)){showGrimToast('Ya sellaste tu voto por este maestro');return;}
  votadosAlch.add(id);
  const a=alquimistas.find(x=>x.id===id);if(!a)return;
  a.votes++;a.rating=Math.min(5,parseFloat((a.rating+0.005).toFixed(3)));
  renderAlquimistas();
  playChime();
  showGrimToast(`✦ Voto sellado para ${a.name}`);
}

// ======= GALERÍA =======
function renderGaleria(){
  const cont=document.getElementById('galleryGrimoire');
  const dots=document.getElementById('galleryDots');
  if(!cont||!dots)return;

  cont.innerHTML=galeria.map((g,i)=>`
    <div class="gg-slide" id="gslide_${i}">
      ${buildGalSVG(g)}
      <div class="gg-caption">
        <div class="gg-cat">${g.cat}</div>
        <div class="gg-title">${g.titulo}</div>
      </div>
    </div>`).join('');

  dots.innerHTML=`
    <button class="gg-prev" onclick="moveGal(-1)">‹</button>
    ${galeria.map((_,i)=>`<button class="ggd ${i===0?'active':''}" onclick="goGal(${i})"></button>`).join('')}
    <button class="gg-next" onclick="moveGal(1)">›</button>
  `;
  startGalAuto();
}

function buildGalSVG(g){
  const c=g.colBg, a=g.colAcc;
  const svgs = {
    barra:`<svg viewBox="0 0 1200 480" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
      <rect width="1200" height="480" fill="${c}"/>
      <rect x="0" y="280" width="1200" height="200" fill="${c}" opacity="0.7"/>
      <rect x="0" y="275" width="1200" height="10" rx="3" fill="${a}" opacity="0.4"/>
      ${Array.from({length:8},(_,i)=>`<line x1="${i*150}" y1="0" x2="${i*150}" y2="280" stroke="${a}" stroke-width="0.4" opacity="0.06"/>`).join('')}
      <rect x="60" y="50" width="200" height="220" fill="none" stroke="${a}" stroke-width="1" opacity="0.25"/>
      <rect x="70" y="60" width="180" height="200" fill="${a}" opacity="0.04"/>
      <rect x="940" y="50" width="200" height="220" fill="none" stroke="${a}" stroke-width="1" opacity="0.25"/>
      ${[100,250,400,550,700,850,1000].map((x,i)=>`
        <rect x="${x}" y="${120-i%3*25}" width="${24+i%2*8}" height="${80+i%3*25}" rx="${4+i%2*4}" fill="${['#8b1a1a','#4a2a6b','#1a4a2a','#6b3a0f','#1a3a6b','#4a1a4a','#6b4a0f'][i]}" opacity="0.7"/>
        <rect x="${x+2}" y="${125-i%3*25}" width="${20+i%2*8}" height="12" rx="2" fill="rgba(255,255,255,0.1)"/>
        <ellipse cx="${x+(24+i%2*8)/2}" cy="${120-i%3*25}" rx="${(24+i%2*8)/2}" ry="5" fill="${['#8b1a1a','#4a2a6b','#1a4a2a','#6b3a0f','#1a3a6b','#4a1a4a','#6b4a0f'][i]}" opacity="0.6"/>
      `).join('')}
      ${[150,350,600,850,1050].map(x=>`
        <line x1="${x}" y1="0" x2="${x}" y2="30" stroke="${a}" stroke-width="2" opacity="0.3"/>
        <ellipse cx="${x}" cy="36" rx="20" ry="8" fill="${a}" opacity="0.35"/>
        <ellipse cx="${x}" cy="100" rx="70" ry="20" fill="${a}" opacity="0.03"/>
      `).join('')}
      <text x="600" y="460" text-anchor="middle" font-family="Cinzel, serif" font-size="11" fill="${a}" opacity="0.4" letter-spacing="10">EL LABORATORIO DE ALQUIMIA NOCTURNA</text>
    </svg>`,
    zona:`<svg viewBox="0 0 1200 480" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
      <rect width="1200" height="480" fill="${c}"/>
      <ellipse cx="600" cy="240" rx="400" ry="300" fill="${a}" opacity="0.04"/>
      ${Array.from({length:4},(_,i)=>`<ellipse cx="600" cy="240" rx="${150+i*80}" ry="${100+i*60}" fill="none" stroke="${a}" stroke-width="0.4" opacity="${0.08-i*0.015}"/>`).join('')}
      ${[120,400,800,1080].map((x,i)=>`
        <rect x="${x-30}" y="200" width="60" height="180" rx="6" fill="${['#2a1208','#1a0a1a','#0a1a08','#1a0808'][i]}" stroke="${a}" stroke-width="0.8" opacity="0.7"/>
        <rect x="${x-20}" y="215" width="40" height="80" rx="4" fill="${a}" opacity="0.06"/>
        <rect x="${x-25}" y="375" width="50" height="8" rx="3" fill="${a}" opacity="0.4"/>
        <ellipse cx="${x}" cy="220" rx="30" ry="10" fill="${a}" opacity="0.15"/>
        <ellipse cx="${x}" cy="300" rx="60" ry="20" fill="${a}" opacity="0.04"/>
      `).join('')}
      ${[280,520,680,920].map((x,i)=>`
        <ellipse cx="${x}" cy="${300+i%2*40}" rx="55" ry="20" fill="${['#2a1208','#1a0a1a','#0a1810','#1a1208'][i%4]}" stroke="${a}" stroke-width="0.6" opacity="0.6"/>
        <rect x="${x-25}" y="${285+i%2*40}" width="50" height="18" rx="3" fill="${a}" opacity="0.04"/>
        <rect x="${x-4}" y="${270+i%2*40}" width="8" height="18" rx="3" fill="${['#2a1208','#1a0a1a','#0a1810','#1a1208'][i%4]}" opacity="0.7"/>
        <rect x="${x-35}" y="${298+i%2*40}" width="70" height="6" rx="3" fill="${a}" opacity="0.25"/>
        <path d="M${x-12} ${290+i%2*40} L${x-14} ${285+i%2*40} L${x+14} ${285+i%2*40} L${x+12} ${290+i%2*40}" fill="${a}" opacity="0.5"/>
      `).join('')}
      <ellipse cx="600" cy="460" rx="300" ry="15" fill="${a}" opacity="0.06"/>
    </svg>`,
    pociones:`<svg viewBox="0 0 1200 480" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
      <rect width="1200" height="480" fill="${c}"/>
      ${[100,250,420,600,780,950,1100].map((x,i)=>{
        const cols=['#8b1a1a','#4a2a6b','#1a4a2a','#6b3a0f','#3a6b8b','#6b1a4a','#4a6b1a'];
        const h=160+i%3*40;
        return `
          <path d="M${x-20} 160 L${x+20} 160 L${x+12} ${160+h} Q${x+12} ${175+h} ${x} ${175+h} Q${x-12} ${175+h} ${x-12} ${160+h}Z" fill="${cols[i]}" opacity="0.7" stroke="${a}" stroke-width="0.8"/>
          <rect x="${x-8}" y="138" width="16" height="26" rx="3" fill="#4a2a0a" stroke="${a}" stroke-width="0.6"/>
          <rect x="${x-20}" y="160" width="40" height="20" fill="${cols[i]}" opacity="0.9" stroke="${a}" stroke-width="0.5"/>
          <path d="M${x-20} 175 Q${x} 165 ${x+20} 175" fill="none" stroke="rgba(255,255,255,0.2)" stroke-width="1"/>
          <circle cx="${x-5}" cy="${200+i%3*15}" r="3" fill="rgba(255,255,255,0.25)"><animate attributeName="cy" values="${210+i%3*15};${185+i%3*15};${210+i%3*15}" dur="${2+i*0.3}s" repeatCount="indefinite"/></circle>
          <ellipse cx="${x}" cy="${180+h}" rx="16" ry="5" fill="${cols[i]}" opacity="0.4"/>
        `;
      }).join('')}
      <text x="600" y="460" text-anchor="middle" font-family="Cinzel, serif" font-size="11" fill="${a}" opacity="0.45" letter-spacing="8">POCIONES DEL GRIMORIO</text>
    </svg>`,
    ingredientes:`<svg viewBox="0 0 1200 480" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
      <rect width="1200" height="480" fill="${c}"/>
      <rect x="80" y="60" width="1040" height="380" fill="none" stroke="${a}" stroke-width="0.5" opacity="0.2"/>
      ${['🌹','🌿','🍋','🫚','🌶','🍓','🧄','🫙','🌺','🍊','🌿','⚗'].map((emoji,i)=>`
        <text x="${120+i*90}" y="${160+i%4*60}" font-size="36" opacity="0.7" text-anchor="middle">${emoji}</text>
      `).join('')}
      ${Array.from({length:5},(_,i)=>`<rect x="${100+i*220}" y="300" width="180" height="80" rx="4" fill="${a}" opacity="${0.03+i*0.01}"/>`).join('')}
      <text x="600" y="460" text-anchor="middle" font-family="Cinzel, serif" font-size="11" fill="${a}" opacity="0.45" letter-spacing="8">MATERIA PRIMA DEL VALLE DEL CAUCA</text>
    </svg>`,
    noche:`<svg viewBox="0 0 1200 480" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
      <rect width="1200" height="480" fill="${c}"/>
      ${Array.from({length:60},(_,i)=>`<circle cx="${Math.floor(i*22.3)}" cy="${Math.floor(i*7.7+5)}" r="${0.5+i%3*0.5}" fill="${a}" opacity="${0.2+i%4*0.1}"/>`).join('')}
      <circle cx="900" cy="100" r="60" fill="none" stroke="${a}" stroke-width="0.6" opacity="0.2"/>
      <circle cx="900" cy="100" r="45" fill="${a}" opacity="0.06"/>
      ${Array.from({length:8},(_,i)=>{const ang=i*45*Math.PI/180;return `<line x1="${900+45*Math.cos(ang)}" y1="${100+45*Math.sin(ang)}" x2="${900+62*Math.cos(ang)}" y2="${100+62*Math.sin(ang)}" stroke="${a}" stroke-width="0.5" opacity="0.25"/>`;}).join('')}
      ${[100,280,500,720,950,1100].map((x,i)=>`
        <rect x="${x}" y="${300-i%3*40}" width="${40+i%2*20}" height="${180+i%3*40}" fill="${['#1a0a06','#0a0614','#060e06'][i%3]}" opacity="0.8"/>
        ${Array.from({length:3},(_,j)=>`<rect x="${x+4+j*12}" y="${320-i%3*40+Math.random()*30}" width="8" height="10" rx="1" fill="${a}" opacity="${Math.random()>0.5?'0.5':'0'}"/>`).join('')}
      `).join('')}
      <rect x="0" y="360" width="1200" height="120" fill="rgba(0,0,0,0.3)"/>
      <text x="600" y="455" text-anchor="middle" font-family="Cinzel, serif" font-size="12" font-style="italic" fill="${a}" opacity="0.5" letter-spacing="6">la noche que nunca termina</text>
    </svg>`,
  };
  return svgs[g.tipo]||svgs.barra;
}

function goGal(i){
  galIndex=i;
  const track=document.getElementById('galleryGrimoire');
  if(track)track.style.transform=`translateX(-${i*100}%)`;
  document.querySelectorAll('.ggd').forEach((d,j)=>d.classList.toggle('active',j===i));
}
function moveGal(dir){
  stopGalAuto();
  galIndex=(galIndex+dir+galeria.length)%galeria.length;
  goGal(galIndex);
  startGalAuto();
}
function startGalAuto(){ galAutoIv=setInterval(()=>goGal((galIndex+1)%galeria.length),5000); }
function stopGalAuto(){ clearInterval(galAutoIv); }

// ======= ORACLE (in-page) =======
function initOracleSection(){
  const cont=document.getElementById('oracleQuestions');
  if(!cont)return;
  cont.innerHTML=`
    <div class="oq-title">// CONSULTA AL ORÁCULO</div>
    <p style="font-family:var(--font-body);font-style:italic;color:var(--text-l);font-size:0.9rem;margin-bottom:20px">Responde las tres preguntas y el grimorio revelará tu poción.</p>
    ${oracleQuestions.map((q,qi)=>`
      <div class="oq-question" id="oqq_${qi}" style="${qi>0?'opacity:0.35;pointer-events:none':''}">
        <div class="oq-q">${qi+1}. ${q.q}</div>
        <div class="oq-opts">
          ${q.opts.map(opt=>`
            <button class="oq-opt" onclick="answerOracle(${qi},'${opt.val}',this)">${opt.label}</button>`).join('')}
        </div>
      </div>`).join('')}
  `;
}

function answerOracle(qi, val, btn){
  oracleAnswers[qi]=val;
  document.querySelectorAll(`#oqq_${qi} .oq-opt`).forEach(b=>b.classList.remove('chosen'));
  btn.classList.add('chosen');
  playClick();
  // unlock next question
  const next=document.getElementById(`oqq_${qi+1}`);
  if(next){next.style.opacity='1';next.style.pointerEvents='auto';}
  // If all answered, show result
  if(oracleAnswers.filter(Boolean).length===3){
    setTimeout(()=>showOracleResult(),600);
  }
}

function showOracleResult(){
  const potion=getOraclePotion(oracleAnswers);
  const resCont=document.getElementById('oracleResult');
  const crystal=document.getElementById('crystalSymbol');
  if(crystal)crystal.textContent=potion.icon;
  if(resCont){
    resCont.style.display='block';
    resCont.innerHTML=`
      <div class="or-title">El Oráculo Ha Hablado</div>
      <div class="or-potion">${potion.icon} ${potion.name}</div>
      <div class="or-desc">${potion.desc}</div>
      <div style="font-family:var(--font-head);font-size:0.8rem;color:var(--gold);margin-bottom:12px">Precio: ${potion.price}</div>
      <button class="btn-grimoire or-try-btn" onclick="document.getElementById('ritual').scrollIntoView({behavior:'smooth'})">
        ✦ Reservar y pedir esta poción
      </button>
      <button class="btn-ghost-grim" style="margin-left:10px;margin-top:8px" onclick="resetOracle()">
        🔮 Consultar de nuevo
      </button>`;
    playMagic();
  }
}

function resetOracle(){
  oracleAnswers=[];
  initOracleSection();
  document.getElementById('oracleResult').style.display='none';
  const crystal=document.getElementById('crystalSymbol');
  if(crystal)crystal.textContent='🔮';
}

// Oracle modal (from hero button)
function openOracle(){
  const modal=document.getElementById('oracleModal');
  if(!modal)return;
  modal.classList.add('open');
  oracleAnswers=[];
  renderOracleModal(0);
}
function closeOracle(){
  document.getElementById('oracleModal').classList.remove('open');
  oracleAnswers=[];
}

function renderOracleModal(step){
  const inner=document.getElementById('omInner');if(!inner)return;
  if(step<3){
    const q=oracleQuestions[step];
    inner.innerHTML=`
      <div class="om-q-title">El Oráculo Habla</div>
      <div class="om-q-sub">Responde con honestidad · El grimorio no miente</div>
      <div class="om-q-step">Pregunta ${step+1} de 3</div>
      <div class="om-q">${q.q}</div>
      <div class="om-opts">
        ${q.opts.map(opt=>`<button class="om-opt" onclick="omAnswer(${step},'${opt.val}')">${opt.label}</button>`).join('')}
      </div>`;
  } else {
    const potion=getOraclePotion(oracleAnswers);
    inner.innerHTML=`
      <div class="om-result-icon">${potion.icon}</div>
      <div class="om-result-title">Tu Poción Revelada</div>
      <div class="om-result-name">${potion.name}</div>
      <div class="om-divider">✦ ✦ ✦</div>
      <div class="om-result-desc">${potion.desc}</div>
      <div style="font-family:var(--font-head);font-size:0.9rem;color:var(--gold);text-align:center;margin-bottom:16px">${potion.price}</div>
      <div style="display:flex;gap:10px;justify-content:center;flex-wrap:wrap">
        <button class="btn-grimoire" onclick="closeOracle();document.getElementById('ritual').scrollIntoView({behavior:'smooth'})">✦ Reservar y pedirla</button>
        <button class="btn-ghost-grim" onclick="renderOracleModal(0)">🔮 De nuevo</button>
      </div>`;
    playMagic();
  }
}

function omAnswer(step, val){
  oracleAnswers[step]=val;
  playClick();
  renderOracleModal(step+1);
}

// ======= RITUAL FORM =======
function initRitualForm(){
  const ap=document.getElementById('alchPick');
  if(ap){
    ap.innerHTML=alquimistas.map(a=>`
      <div class="ap-card" id="ap_${a.id}" onclick="pickAlch(${a.id})">
        <h4 style="color:${a.colAcc}">${a.name}</h4>
        <p>${a.rol}</p>
        <p style="font-size:0.65rem;margin-top:3px;color:${a.activo?'#4a8a5a':'#8a6a4a'};font-family:'Cinzel',serif;letter-spacing:0.08em">${a.activo?'● En el Santuario':'○ Ausente hoy'}</p>
      </div>`).join('');
  }
  const pp=document.getElementById('potionPick');
  if(pp){
    pp.innerHTML=pociones.map(p=>`
      <div class="pp-card" id="pp_${p.id}" onclick="pickPocion(${p.id})">
        <h4>${p.icon} ${p.name}</h4>
        <div class="pp-price">${p.price}</div>
        <p>${p.cat}</p>
      </div>`).join('');
  }
}

function pickAlch(id){
  ritualData.alch=alquimistas.find(a=>a.id===id);
  document.querySelectorAll('.ap-card').forEach(c=>c.classList.remove('sel'));
  document.getElementById('ap_'+id)?.classList.add('sel');
  document.getElementById('ts-alch').textContent=ritualData.alch.name;
  playClick();
  goSpell(2);
}

function pickPocion(id){
  ritualData.pocion=pociones.find(p=>p.id===id);
  document.querySelectorAll('.pp-card').forEach(c=>c.classList.remove('sel'));
  document.getElementById('pp_'+id)?.classList.add('sel');
  document.getElementById('ts-pot').textContent=ritualData.pocion.name;
  document.getElementById('ts-price').textContent=ritualData.pocion.price;
  playClick();
  goSpell(3);
}

function initDateRitual(){
  const input=document.getElementById('ritDate');if(!input)return;
  input.min=new Date().toISOString().split('T')[0];
  input.addEventListener('change',()=>{
    ritualData.fecha=input.value;
    ritualData.hora=null;
    const d=new Date(input.value+'T12:00:00');
    document.getElementById('ts-date').textContent=d.toLocaleDateString('es-CO',{weekday:'short',day:'numeric',month:'short'});
    renderRitualSlots(input.value);
  });
  document.getElementById('ritOcasion')?.addEventListener('change',function(){
    document.getElementById('ts-ocas').textContent=this.value||'—';
  });
}

function renderRitualSlots(dateStr){
  const cont=document.getElementById('ritTimeGrid');if(!cont)return;
  const d=new Date(dateStr+'T12:00:00'),day=d.getDay();
  const open=18,close=day===0?24:day>=5?27:25;
  const occupied=['19:00','20:30','22:00','23:30'];
  const slots=[];
  for(let h=open;h<close;h++){
    slots.push(pad(h%24)+':00');
    if(h+0.5<close)slots.push(pad(h%24)+':30');
  }
  cont.innerHTML=slots.map(s=>`
    <button class="rit-slot ${occupied.includes(s)?'taken':''}" onclick="pickRitSlot('${s}',this)">${s}</button>`).join('');
}

function pickRitSlot(t,el){
  document.querySelectorAll('.rit-slot').forEach(b=>b.classList.remove('sel'));
  el.classList.add('sel');
  ritualData.hora=t;
  document.getElementById('ts-time').textContent=t;
  playClick();
  goSpell(4);
}

function goSpell(n){
  currentSpell=n;
  document.querySelectorAll('.spell-step').forEach((s,i)=>s.classList.toggle('active',i===n-1));
}

// ======= PAYMENT =======
const PAY_NAMES={cash:'💵 Efectivo al llegar',nequi:'📱 Nequi — 315 678 9012',daviplata:'🔴 Daviplata — 315 678 9012',transfer:'🏦 Transferencia / PSE'};

function selectRitPay(method,btn){
  ritualData.pago=method;
  document.querySelectorAll('.pay-ritual-btn').forEach(b=>b.classList.remove('selected'));
  btn.classList.add('selected');
  const panel=document.getElementById('payCopyPanel');
  const label=document.getElementById('pcpLabel');
  const num=document.getElementById('pcpNum');
  if(method==='nequi'||method==='daviplata'){
    if(panel)panel.style.display='flex';
    if(label)label.textContent=method==='nequi'?'Número Nequi:':'Número Daviplata:';
    if(num)num.textContent='315 678 9012';
  } else {
    if(panel)panel.style.display='none';
  }
  const msgs={cash:'Paga en efectivo al llegar al santuario.',nequi:'Transfiere antes de tu visita y trae el comprobante.',daviplata:'Transfiere antes de tu visita y trae el comprobante.',transfer:'Te enviaremos los datos bancarios por WhatsApp.'};
  const msgEl=document.getElementById('payMsg');
  if(msgEl)msgEl.textContent=msgs[method]||'';
  document.getElementById('ts-pay').textContent=PAY_NAMES[method];
  playClick();
}

function copyPayNum(){
  const btn=document.querySelector('.pcp-copy');
  navigator.clipboard.writeText('3156789012').then(()=>{
    if(btn){btn.textContent='✓ Copiado';btn.classList.add('copied');setTimeout(()=>{btn.textContent='⎘ Copiar';btn.classList.remove('copied');},2000);}
    showGrimToast('✦ Número copiado');
  }).catch(()=>showGrimToast('Número: 315 678 9012'));
}

function sealRitual(){
  const name=document.getElementById('ritName')?.value.trim();
  const phone=document.getElementById('ritPhone')?.value.trim();
  if(!name||!phone){showGrimToast('Completa tu nombre y teléfono');return;}
  if(!ritualData.alch){showGrimToast('Elige tu Alquimista');return;}
  if(!ritualData.pocion){showGrimToast('Elige una Poción');return;}
  if(!ritualData.fecha||!ritualData.hora){showGrimToast('Selecciona fecha y hora');return;}
  if(!ritualData.pago){showGrimToast('Selecciona el método de pago');return;}

  const d=new Date(ritualData.fecha+'T12:00:00');
  const fechaStr=d.toLocaleDateString('es-CO',{weekday:'long',day:'numeric',month:'long'});

  document.getElementById('rmText').innerHTML=`
    El grimorio ha sellado tu invocación, <em>${name}</em>.<br/><br/>
    ✦ <strong>Alquimista:</strong> ${ritualData.alch.name}<br/>
    ✦ <strong>Poción:</strong> ${ritualData.pocion.name}<br/>
    ✦ <strong>Precio:</strong> ${ritualData.pocion.price}<br/>
    ✦ <strong>Fecha:</strong> ${fechaStr} a las ${ritualData.hora}<br/>
    ✦ <strong>Pago:</strong> ${PAY_NAMES[ritualData.pago]}<br/><br/>
    <em>Te confirmaremos al ${phone}. El santuario te aguarda.</em>
  `;
  document.getElementById('ritualModal').classList.add('open');
  playMagic();
}

function closeRitualModal(){
  document.getElementById('ritualModal').classList.remove('open');
  ritualData={alch:null,pocion:null,fecha:null,hora:null,pago:null};
  document.querySelectorAll('.ap-card,.pp-card,.rit-slot,.pay-ritual-btn').forEach(c=>c.classList.remove('sel','selected'));
  ['ritName','ritPhone','ritEmail','ritNote','ritDate'].forEach(id=>{const el=document.getElementById(id);if(el)el.value='';});
  document.getElementById('ritOcasion').value='';
  document.getElementById('ritTimeGrid').innerHTML='<p class="grim-hint">Selecciona una fecha para invocar los horarios disponibles</p>';
  ['ts-alch','ts-pot','ts-price','ts-date','ts-time','ts-ocas','ts-pay'].forEach(id=>{const el=document.getElementById(id);if(el)el.textContent='—';});
  const panel=document.getElementById('payCopyPanel');if(panel)panel.style.display='none';
  const msgEl=document.getElementById('payMsg');if(msgEl)msgEl.textContent='';
  goSpell(1);
}

// ======= TOAST =======
function showGrimToast(msg){
  const t=document.createElement('div');
  t.style.cssText=`position:fixed;bottom:24px;right:24px;background:#1a0c06;border:1px solid rgba(200,168,75,0.4);border-left:3px solid #c8a84b;color:#c8a84b;font-family:'Cinzel',serif;font-size:0.75rem;letter-spacing:0.1em;padding:12px 20px;z-index:9999;box-shadow:0 8px 30px rgba(0,0,0,0.5);animation:spellFade 0.3s ease;max-width:300px`;
  t.textContent='✦ '+msg;
  document.body.appendChild(t);
  setTimeout(()=>{t.style.opacity='0';t.style.transition='opacity 0.4s';},2300);
  setTimeout(()=>t.remove(),2800);
}

// ======= UTILS =======
function pad(n){return String(Math.floor(n)).padStart(2,'0');}
