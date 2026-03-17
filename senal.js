// ============================================
//   SEÑAL PERDIDA — senal.js
// ============================================

// ======= DATA =======
const drinks = [
  {id:1,icon:"🎸",name:"Estática Azul",cat:"Clásicos",desc:"Vodka, curaçao azul, limón y soda cristal. La frecuencia visual del bar.",price:"$26.000",priceN:26000,tags:["Vodka","Cítrico","Visual"],isNew:false},
  {id:2,icon:"🔴",name:"Señal Roja",cat:"Intensos",desc:"Ron añejo, hibisco macerado, jengibre, lima y tónica especiada. Transmisión de emergencia.",price:"$28.000",priceN:28000,tags:["Ron","Floral","Picante"],isNew:true},
  {id:3,icon:"📻",name:"FM 96.7",cat:"Clásicos",desc:"Ginebra premium, pepino fresco, tónica premium y menta. La firma del bar.",price:"$30.000",priceN:30000,tags:["Gin","Refrescante","Firma"],isNew:false},
  {id:4,icon:"🌙",name:"Frecuencia Nocturna",cat:"Especiales",desc:"Mezcal artesanal, miel negra, limón tahití y humo de canela. Solo después de las 10 PM.",price:"$34.000",priceN:34000,tags:["Mezcal","Ahumado","Miel"],isNew:false},
  {id:5,icon:"⚡",name:"Interferencia",cat:"Intensos",desc:"Whisky bourbon, amaretto, angostura, naranja flameada. Un corto circuito en el paladar.",price:"$32.000",priceN:32000,tags:["Whisky","Amargo","Fuerte"],isNew:false},
  {id:6,icon:"🎵",name:"Side B",cat:"Sin Alcohol",desc:"Lulo, maracuyá colombiano, jengibre, menta y agua con gas. El lado B siempre sorprende.",price:"$16.000",priceN:16000,tags:["Sin Alcohol","Tropical","Local"],isNew:false},
  {id:7,icon:"📼",name:"VHS Tropical",cat:"Especiales",desc:"Pisco peruano, coco tostado, piña asada, lima y espuma de coco. Flashback de sabores.",price:"$29.000",priceN:29000,tags:["Pisco","Tropical","Cremoso"],isNew:true},
  {id:8,icon:"🎤",name:"El Micrófono",cat:"Clásicos",desc:"Tequila reposado, triple sec, lima fresca y sal ahumada. Clásico que no falla.",price:"$27.000",priceN:27000,tags:["Tequila","Clásico","Ácido"],isNew:false},
  {id:9,icon:"🌊",name:"Ola de Calor",cat:"Sin Alcohol",desc:"Tamarindo, guanábana, agua de panela y soda. El Valle del Cauca en un vaso.",price:"$14.000",priceN:14000,tags:["Sin Alcohol","Local","Dulce"],isNew:false},
  {id:10,icon:"💜",name:"Ruido Violeta",cat:"Intensos",desc:"Ginebra, licor de violeta, limón, lavanda y clara de huevo. Hermoso y perturbador.",price:"$31.000",priceN:31000,tags:["Gin","Floral","Cremoso"],isNew:true},
  {id:11,icon:"🔊",name:"Subwoofer",cat:"Especiales",desc:"Cerveza artesanal oscura, whisky ahumado, miel y limón. Profundo como el bajo.",price:"$25.000",priceN:25000,tags:["Cerveza","Ahumado","Miel"],isNew:false},
  {id:12,icon:"📡",name:"Señal Perdida",cat:"Clásicos",desc:"El coctel epónimo. Aguardiente antioqueño, lulo, panela, menta y lima. Colombia pura.",price:"$22.000",priceN:22000,tags:["Aguardiente","Local","Colombiano"],isNew:false},
];

const experiences = [
  {icon:"🎚️",freq:"96.7 FM",title:"Cocteles Artesanales",desc:"Cada trago es compuesto como una canción: capas de ingredientes que se revelan a medida que escuchas. Recetas propias con ingredientes locales del Valle del Cauca."},
  {icon:"📻",freq:"AM 1040",title:"Radio en Vivo",desc:"Transmisiones en vivo los viernes y sábados desde las 9 PM. DJs invitados, bandas locales y sesiones acústicas que transforman la noche en una experiencia única."},
  {icon:"📼",freq:"TAPE",title:"La Colección de Vinilos",desc:"Más de 3.000 discos de vinilo originales decoran el espacio. Cada noche un selector diferente trae su colección personal para acompañar los tragos."},
  {icon:"🎙️",freq:"STUDIO",title:"Eventos Privados",desc:"Reserva el estudio completo para eventos corporativos, lanzamientos o celebraciones. Capacidad hasta 80 personas con equipo de sonido profesional."},
  {icon:"🍹",freq:"LAB",title:"Clases de Mixología",desc:"Sábados a las 4 PM: aprende a preparar 3 cocteles de la carta con uno de nuestros bartenders. Incluye todos los ingredientes y degustación final."},
  {icon:"🌆",freq:"NOCHE",title:"Terraza Nocturna",desc:"Vista panorámica de Granada desde nuestra terraza en el último piso. El espacio ideal para empezar o terminar la noche mientras Cali parpadea abajo."},
];

const liveEvents = [
  {title:"Sesión Acústica",info:"Vie 22 Mar · 9 PM · Entrada libre"},
  {title:"Noche de Vinilos",info:"Sáb 23 Mar · 8 PM · Solo reservas"},
  {title:"Clase de Mixología",info:"Sáb 23 Mar · 4 PM · $35.000/persona"},
  {title:"DJ Set Electrónico",info:"Dom 24 Mar · 7 PM · Entrada libre"},
];

const gallerySlides = [
  {side:"SIDE A",title:"La Barra Principal",tipo:"barra"},
  {side:"SALA",title:"Zona de Vinilos",tipo:"vinilos"},
  {side:"ROOFTOP",title:"Terraza Granada",tipo:"terraza"},
  {side:"LAB",title:"Laboratorio de Tragos",tipo:"lab"},
  {side:"ESTUDIO",title:"La Cabina de Radio",tipo:"cabina"},
];

const secretFreqs = [
  {freq:"88.1 FM",title:"Historia del Bar",desc:"Señal Perdida nació en 1987 como una emisora pirata que transmitía desde el sótano de un edificio en el centro de Cali. Después de ser clausurada tres veces, resurgió en 2019 como bar."},
  {freq:"92.3 FM",title:"El Menú Secreto",desc:"Si llegas antes de las 7 PM y preguntas por 'La Frecuencia Oculta', el bartender te preparará un coctel que no está en la carta. Cambia cada semana."},
  {freq:"99.9 FM",title:"La Colección Prohibida",desc:"En la pared trasera hay una vitrina con 40 botellas que no se venden — son las más raras de la colección. Si ves algo que te gusta, pregunta. Nunca se sabe."},
  {freq:"103.7 FM",title:"El Vinilo del Mes",desc:"Cada mes elegimos un álbum para escuchar completo un día específico. Sigue nuestro Instagram para saber cuándo y ven a escuchar música como se debe."},
  {freq:"107.5 FM",title:"Eventos Secretos",desc:"Algunos viernes organizamos eventos que solo se anuncian por WhatsApp 3 horas antes. Escríbenos al +57 316 789 0123 para unirte a la lista exclusiva."},
];

// ======= STATE =======
let bookingData = {drink:null, date:null, time:null, pay:null};
let deliveryCart = {};
let deliveryPay = null;
let currentRecStep = 1;
let galIdx = 0;
let galAutoIv = null;
let dialAngle = 0;
let isDraggingDial = false;

const PAY_LABELS = {
  cash:'💵 Efectivo al llegar',
  nequi:'📱 Nequi — 316 789 0123',
  daviplata:'🔴 Daviplata — 316 789 0123',
  transfer:'🏦 Transferencia / PSE',
};

// ======= INIT =======
document.addEventListener('DOMContentLoaded',()=>{
  initTuning();
  initStaticCanvas();
  initReveal();
  renderExperiences();
  renderLiveEvents();
  renderTracklist();
  renderPresetBtns();
  renderGallery();
  initBookingForm();
  initDateInput();
  initFreqModal();
  initDial();
  initEqSliders();
  initClock();
  animateCounters();
  initMobileMenu();
});

// ======= TUNING SEQUENCE =======
function initTuning(){
  const needle = document.getElementById('dialNeedle');
  const log = document.getElementById('tuningLog');
  const found = document.getElementById('tuningFound');
  const stationEl = document.querySelector('.tuning-station');
  const eqCont = document.getElementById('tuningEq');

  // Build tuning EQ bars
  for(let i=0;i<32;i++){
    const b=document.createElement('div');
    b.style.cssText=`flex:1;background:rgba(200,160,48,0.4);border-radius:1px;height:4px;transition:height 0.1s`;
    eqCont.appendChild(b);
  }

  const logs = [
    '> Escaneando frecuencias...',
    '> Señal débil en 89.3 ░░▒▒▓',
    '> Interferencia detectada...',
    '> Ajustando antena...',
    '> Señal en 91.7 ░▒▒▓▓',
    '> Ruido de fondo: alto',
    '> Buscando frecuencia clara...',
    '> Señal fuerte en 96.7 ▓▓▓▓█',
    '> ¡TRANSMISIÓN ENCONTRADA!',
  ];
  const freqs = ['87.3','88.9','90.1','91.7','93.3','94.5','95.2','96.7'];
  let step=0;
  const trackW = document.querySelector('.dial-track').offsetWidth;

  const iv = setInterval(()=>{
    if(step>=logs.length){ clearInterval(iv); return; }
    // Move needle
    const pct = step/(logs.length-1);
    if(needle) needle.style.left = (pct*(trackW-4))+'px';
    // Update station display
    if(stationEl && freqs[step]) stationEl.textContent = 'FM '+freqs[step];
    // Animate EQ
    eqCont.querySelectorAll('div').forEach(b=>{
      b.style.height = (Math.random()*32+4)+'px';
      b.style.background = step>=7 ? '#c8a030' : 'rgba(200,160,48,0.4)';
    });
    // Log
    const line=document.createElement('div');
    line.textContent=logs[step];
    line.style.opacity='0';
    log.appendChild(line);
    requestAnimationFrame(()=>{ line.style.transition='opacity 0.3s'; line.style.opacity='1'; });
    log.scrollTop = log.scrollHeight;
    step++;
    if(step===logs.length){
      setTimeout(()=>{ if(found) found.style.display='flex'; },400);
    }
  },400);

  // Auto enter after 6s
  setTimeout(()=>{ if(!document.getElementById('tuningScreen').classList.contains('hidden')) enterSignal(); },6500);
  document.getElementById('tuningScreen').addEventListener('click',()=>{ if(step>=8) enterSignal(); });
  document.addEventListener('keydown',()=>{ if(step>=8) enterSignal(); },{once:true});
}

function enterSignal(){
  document.getElementById('tuningScreen').classList.add('hidden');
  document.getElementById('cassetteHud').classList.add('visible');
  initWave();
  initVU();
  startTapeReels();
  initFlicker();
  // Animate HUD mini EQ
  initMiniEq();
}

// ======= STATIC CANVAS =======
function initStaticCanvas(){
  const c=document.getElementById('staticCanvas');
  const ctx=c.getContext('2d');
  c.width=window.innerWidth; c.height=window.innerHeight;
  window.addEventListener('resize',()=>{c.width=window.innerWidth;c.height=window.innerHeight});
  function drawNoise(){
    const img=ctx.createImageData(c.width,c.height);
    const d=img.data;
    for(let i=0;i<d.length;i+=4){
      const v=Math.random()>0.995?255:0;
      d[i]=d[i+1]=d[i+2]=v; d[i+3]=255;
    }
    ctx.putImageData(img,0,0);
    requestAnimationFrame(drawNoise);
  }
  drawNoise();
}

// ======= FLICKER =======
function initFlicker(){
  const f=document.getElementById('flickerLayer');
  setInterval(()=>{
    if(Math.random()<0.03){
      f.style.background='rgba(200,160,48,0.03)';
      setTimeout(()=>f.style.background='transparent',60);
    }
  },200);
}

// ======= WAVEFORM =======
function initWave(){
  const c=document.getElementById('waveCanvas');if(!c)return;
  const ctx=c.getContext('2d');
  let offset=0;
  function draw(){
    ctx.clearRect(0,0,c.width,c.height);
    ctx.strokeStyle='rgba(200,160,48,0.7)';ctx.lineWidth=1.5;
    ctx.beginPath();
    for(let x=0;x<c.width;x++){
      const y=c.height/2+Math.sin((x+offset)*0.04)*8+Math.sin((x+offset)*0.09)*5+Math.sin((x+offset)*0.02)*12;
      x===0?ctx.moveTo(x,y):ctx.lineTo(x,y);
    }
    ctx.stroke();
    offset+=1.5;
    requestAnimationFrame(draw);
  }
  draw();
}

// ======= VU METER =======
function initVU(){
  const cont=document.getElementById('vuBars');if(!cont)return;
  for(let i=0;i<24;i++){
    const b=document.createElement('div');
    const isHot=i>19;
    b.className='vu-bar';
    b.style.cssText=`flex:1;background:${isHot?'#ff3a3a':i>15?'#ff9a2a':'rgba(200,160,48,0.7)'};border-radius:1px;height:4px`;
    cont.appendChild(b);
  }
  function animVU(){
    const bars=cont.querySelectorAll('.vu-bar');
    const level=Math.random();
    bars.forEach((b,i)=>{
      const threshold=(i/bars.length);
      const h=threshold<level?(Math.random()*20+6)+'px':'3px';
      b.style.height=h;
    });
    setTimeout(animVU,80);
  }
  animVU();
}

// ======= MINI EQ =======
function initMiniEq(){
  const cont=document.getElementById('chEqMini');if(!cont)return;
  cont.innerHTML='';
  for(let i=0;i<16;i++){
    const b=document.createElement('div');
    b.style.cssText='width:3px;background:rgba(200,160,48,0.7);border-radius:1px;height:4px;transition:height 0.12s';
    cont.appendChild(b);
  }
  function anim(){
    cont.querySelectorAll('div').forEach(b=>{ b.style.height=(Math.random()*14+2)+'px'; });
    setTimeout(anim,120);
  }
  anim();
}

// Footer EQ
function initFooterEq(){
  const c=document.getElementById('fsEq');if(!c)return;
  for(let i=0;i<12;i++){
    const b=document.createElement('div');
    b.style.cssText='width:4px;background:rgba(200,160,48,0.6);border-radius:1px;height:4px;transition:height 0.15s';
    c.appendChild(b);
  }
  setInterval(()=>{c.querySelectorAll('div').forEach(b=>b.style.height=(Math.random()*22+3)+'px');},150);
}

// ======= TAPE REELS =======
function startTapeReels(){
  document.querySelectorAll('.tape-reel,.pp-reel').forEach(r=>r.classList.add('spinning'));
}

// ======= CLOCK =======
function initClock(){
  function tick(){
    const n=new Date();
    const h=String(n.getHours()).padStart(2,'0');
    const m=String(n.getMinutes()).padStart(2,'0');
    const s=String(n.getSeconds()).padStart(2,'0');
    const el=document.getElementById('chTime');
    if(el)el.textContent=`${h}:${m}:${s}`;
  }
  tick(); setInterval(tick,1000);
}

// ======= REVEAL =======
function initReveal(){
  const obs=new IntersectionObserver(entries=>{
    entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('vis');});
  },{threshold:0.1});
  document.querySelectorAll('.sig-reveal').forEach(el=>obs.observe(el));
}

// ======= NAVBAR =======
function initMobileMenu(){
  document.getElementById('chHam')?.addEventListener('click',()=>{
    document.getElementById('mobMenu').classList.toggle('open');
  });
}
function closeMob(){document.getElementById('mobMenu').classList.remove('open');}

// ======= COUNTER ANIMATIONS =======
function animateCounters(){
  const obs=new IntersectionObserver(entries=>{
    entries.forEach(e=>{
      if(!e.isIntersecting)return;
      const el=e.target;
      const target=parseInt(el.dataset.target);
      let cur=0;const step=Math.ceil(target/60);
      const iv=setInterval(()=>{
        cur=Math.min(cur+step,target);
        el.textContent=cur.toLocaleString('es-CO');
        if(cur>=target)clearInterval(iv);
      },30);
      obs.unobserve(el);
    });
  },{threshold:0.3});
  document.querySelectorAll('[data-target]').forEach(el=>obs.observe(el));
}

// ======= EXPERIENCES =======
function renderExperiences(){
  const grid=document.getElementById('expGrid');if(!grid)return;
  grid.innerHTML=experiences.map((e,i)=>`
    <div class="exp-card sig-reveal" style="transition-delay:${i*0.07}s">
      <span class="ec-icon">${e.icon}</span>
      <div class="ec-freq">${e.freq}</div>
      <h3>${e.title}</h3>
      <p>${e.desc}</p>
    </div>`).join('');
  setTimeout(()=>initReveal(),80);
}

function renderLiveEvents(){
  const cont=document.getElementById('lsEvents');if(!cont)return;
  cont.innerHTML=liveEvents.map(e=>`
    <div class="ls-event">
      <strong>${e.title}</strong>
      <span>${e.info}</span>
    </div>`).join('');
}

// ======= TRACKLIST =======
function renderTracklist(filter='Todos'){
  const list=document.getElementById('trackListing');if(!list)return;
  const filtered=filter==='Todos'?drinks:drinks.filter(d=>d.cat===filter);
  list.innerHTML=filtered.map((d,i)=>`
    <div class="track-item sig-reveal ${filter!=='Todos'&&d.cat!==filter?'hidden':''}" style="transition-delay:${i*0.04}s">
      <span class="ti-num">${String(d.id).padStart(2,'0')}</span>
      <span class="ti-icon">${d.icon}</span>
      <div class="ti-body">
        <h3>${d.name}</h3>
        <p>${d.desc}</p>
        <div class="ti-tags">
          ${d.tags.map(t=>`<span class="ti-tag">${t}</span>`).join('')}
          ${d.isNew?'<span class="ti-new">NUEVO</span>':''}
        </div>
      </div>
      <div class="ti-right">
        <span class="ti-price">${d.price}</span>
      </div>
    </div>`).join('');
  setTimeout(()=>initReveal(),80);
}

function renderPresetBtns(){
  const cats=['Todos',...new Set(drinks.map(d=>d.cat))];
  const cont=document.getElementById('presetBtns');if(!cont)return;
  cont.innerHTML=cats.map((c,i)=>`
    <button class="preset-btn ${c==='Todos'?'active':''}" onclick="filterTracks('${c}',this)">
      P${i+1} — ${c}
    </button>`).join('');
}

function filterTracks(cat,btn){
  document.querySelectorAll('.preset-btn').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
  renderTracklist(cat);
}

// ======= GALLERY =======
function renderGallery(){
  const tape=document.getElementById('galleryTape');
  const dots=document.getElementById('gcDots');
  if(!tape||!dots)return;
  tape.innerHTML=gallerySlides.map((g,i)=>`
    <div class="gt-slide">
      ${buildGalSVG(g)}
      <div class="gt-cap">
        <span class="gt-cap-side">▶ ${g.side}</span>
        <div class="gt-cap-title">${g.titulo}</div>
      </div>
    </div>`).join('');
  dots.innerHTML=gallerySlides.map((_,i)=>
    `<button class="gc-dot ${i===0?'active':''}" onclick="goGal(${i})"></button>`).join('');
  startGalAuto();
}

function buildGalSVG(g){
  const svgs={
    barra:`<svg viewBox="0 0 1200 460" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
      <rect width="1200" height="460" fill="#0a0800"/>
      <rect x="0" y="0" width="1200" height="460" fill="url(#amberGrid)"/>
      <rect x="0" y="260" width="1200" height="200" fill="#060400"/>
      <rect x="0" y="255" width="1200" height="8" fill="#c8a030" opacity="0.4"/>
      ${Array.from({length:8},(_,i)=>`
        <rect x="${80+i*140}" y="${80-i%3*20}" width="${28+i%2*10}" height="${80+i%3*20}" rx="4" fill="${['#8b1a1a','#1a4a8b','#1a6b2a','#6b3a0f','#4a1a6b','#8b6b0f','#0f4a6b','#6b0f4a'][i]}" opacity="0.8"/>
        <rect x="${80+i*140+2}" y="${85-i%3*20}" width="${24+i%2*10}" height="12" rx="2" fill="rgba(255,255,255,0.12)"/>
      `).join('')}
      ${[120,360,600,840,1080].map(x=>`
        <line x1="${x}" y1="0" x2="${x}" y2="30" stroke="#c8a030" stroke-width="2" opacity="0.4"/>
        <ellipse cx="${x}" cy="36" rx="20" ry="8" fill="#c8a030" opacity="0.5"/>
        <ellipse cx="${x}" cy="100" rx="70" ry="20" fill="#c8a030" opacity="0.04"/>
      `).join('')}
      <defs><pattern id="amberGrid" width="40" height="40" patternUnits="userSpaceOnUse"><line x1="0" y1="0" x2="40" y2="0" stroke="rgba(200,160,48,0.04)" stroke-width="1"/><line x1="0" y1="0" x2="0" y2="40" stroke="rgba(200,160,48,0.04)" stroke-width="1"/></pattern></defs>
    </svg>`,
    vinilos:`<svg viewBox="0 0 1200 460" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
      <rect width="1200" height="460" fill="#080600"/>
      ${Array.from({length:12},(_,i)=>`
        <g transform="translate(${60+i*100},${140+i%3*40})">
          <rect x="-8" y="-100" width="16" height="200" rx="2" fill="#1a1600" stroke="#c8a030" stroke-width="0.8" opacity="0.7"/>
          <rect x="-14" y="-60" width="28" height="40" rx="1" fill="${['#8b1a1a','#1a4a8b','#1a6b2a','#4a1a6b'][i%4]}" opacity="0.8"/>
          <line x1="-8" y1="-68" x2="8" y2="-68" stroke="rgba(255,255,255,0.1)" stroke-width="0.5"/>
        </g>
      `).join('')}
      ${[200,500,800,1100].map((x,i)=>`
        <circle cx="${x}" cy="230" r="70" fill="#1a1600" stroke="#c8a030" stroke-width="1.5" opacity="0.6"/>
        <circle cx="${x}" cy="230" r="45" fill="none" stroke="${['#8b1a1a','#1a4a8b','#1a6b2a','#4a1a6b'][i]}" stroke-width="0.8" opacity="0.7"/>
        <circle cx="${x}" cy="230" r="8" fill="#c8a030" opacity="0.5"/>
        <circle cx="${x}" cy="230" r="3" fill="#0a0800"/>
      `).join('')}
    </svg>`,
    terraza:`<svg viewBox="0 0 1200 460" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
      <rect width="1200" height="460" fill="#050408"/>
      ${Array.from({length:80},(_,i)=>`<circle cx="${Math.floor(i*15.3)}" cy="${Math.floor(i*5.7+5)}" r="${0.5+i%3*0.5}" fill="#c8a030" opacity="${0.15+i%4*0.08}"/>`).join('')}
      ${[0,150,350,600,850,1000,1150].map((x,i)=>`
        <rect x="${x}" y="${280-i%3*60}" width="${40+i%2*30}" height="${180+i%3*60}" fill="#100e02" opacity="0.8"/>
        ${Array.from({length:3},(_,j)=>`<rect x="${x+5+j*12}" y="${290-i%3*60+Math.random()*40}" width="9" height="12" rx="1" fill="#c8a030" opacity="${Math.random()>0.4?'0.4':'0'}"/>`).join('')}
      `).join('')}
      <rect x="0" y="360" width="1200" height="100" fill="rgba(0,0,0,0.4)"/>
      ${Array.from({length:14},(_,i)=>`
        <circle cx="${80+i*80}" cy="${20+Math.sin(i*0.6)*15}" r="5" fill="#c8a030" opacity="0.7"/>
        ${i<13?`<line x1="${80+i*80}" y1="${20+Math.sin(i*0.6)*15}" x2="${80+(i+1)*80}" y2="${20+Math.sin((i+1)*0.6)*15}" stroke="rgba(200,160,48,0.2)" stroke-width="1"/>`:''}
      `).join('')}
    </svg>`,
    lab:`<svg viewBox="0 0 1200 460" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
      <rect width="1200" height="460" fill="#0a0800"/>
      <rect x="60" y="60" width="1080" height="280" fill="none" stroke="#c8a030" stroke-width="0.5" opacity="0.15"/>
      ${[100,220,340,480,620,760,900,1040].map((x,i)=>{
        const cols=['#8b1a1a','#1a4a8b','#1a6b2a','#6b3a0f','#4a1a6b','#8b6b0f','#0f6b6b','#6b0f1a'];
        const h=120+i%4*30;
        return `
          <path d="M${x-14} 180 L${x+14} 180 L${x+9} ${180+h} Q${x+9} ${195+h} ${x} ${195+h} Q${x-9} ${195+h} ${x-9} ${180+h}Z" fill="${cols[i]}" opacity="0.75" stroke="#c8a030" stroke-width="0.8"/>
          <rect x="${x-6}" y="158" width="12" height="24" rx="3" fill="#2a2000" stroke="#c8a030" stroke-width="0.5"/>
          <rect x="${x-14}" y="180" width="28" height="22" fill="${cols[i]}" opacity="0.9"/>
          <circle cx="${x-4}" cy="${200+i%3*12}" r="2.5" fill="rgba(255,255,255,0.3)">
            <animate attributeName="cy" values="${210+i%3*12};${185+i%3*12};${210+i%3*12}" dur="${2+i*0.3}s" repeatCount="indefinite"/>
          </circle>
        `;
      }).join('')}
    </svg>`,
    cabina:`<svg viewBox="0 0 1200 460" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
      <rect width="1200" height="460" fill="#06040a"/>
      <rect x="200" y="100" width="800" height="260" fill="#100e14" stroke="rgba(200,160,48,0.2)" stroke-width="1"/>
      <!-- Mixing board -->
      <rect x="240" y="280" width="720" height="60" rx="4" fill="#1a1820" stroke="rgba(200,160,48,0.3)" stroke-width="1"/>
      ${Array.from({length:16},(_,i)=>`
        <rect x="${260+i*43}" y="288" width="36" height="36" rx="2" fill="#0d0c14" stroke="rgba(200,160,48,0.15)" stroke-width="0.5"/>
        <rect x="${270+i*43}" y="${292+Math.random()*18}" width="16" height="6" rx="1" fill="${i%4===0?'#ff3a3a':i%3===0?'#c8a030':'#3a3a5a'}"/>
        <circle cx="${278+i*43}" cy="${320}" r="4" fill="#2a2832" stroke="rgba(200,160,48,0.3)" stroke-width="0.5"/>
      `).join('')}
      <!-- Screen -->
      <rect x="350" y="120" width="500" height="120" rx="4" fill="#040308" stroke="rgba(200,160,48,0.3)" stroke-width="1"/>
      <text x="600" y="175" text-anchor="middle" font-family="VT323, monospace" font-size="36" fill="#c8a030" opacity="0.6">FM 96.7 SEÑAL PERDIDA</text>
      <!-- Frequency bars on screen -->
      ${Array.from({length:20},(_,i)=>`<rect x="${360+i*24}" y="${200-Math.random()*50}" width="20" height="${10+Math.random()*50}" rx="1" fill="#c8a030" opacity="${0.3+Math.random()*0.4}"/>`).join('')}
      <!-- Microphone -->
      <rect x="570" y="200" width="60" height="80" rx="30" fill="#1a1820" stroke="rgba(200,160,48,0.4)" stroke-width="1.5"/>
      <line x1="600" y1="280" x2="600" y2="310" stroke="rgba(200,160,48,0.3)" stroke-width="2"/>
      <rect x="575" y="310" width="50" height="6" rx="3" fill="rgba(200,160,48,0.3)"/>
    </svg>`,
  };
  return svgs[g.tipo]||svgs.barra;
}

function goGal(i){
  galIdx=i;
  const tape=document.getElementById('galleryTape');
  if(tape)tape.style.transform=`translateX(-${i*100}%)`;
  document.querySelectorAll('.gc-dot').forEach((d,j)=>d.classList.toggle('active',j===i));
}
function galPrev(){stopGalAuto();goGal((galIdx-1+gallerySlides.length)%gallerySlides.length);startGalAuto();}
function galNext(){stopGalAuto();goGal((galIdx+1)%gallerySlides.length);startGalAuto();}
function startGalAuto(){galAutoIv=setInterval(()=>goGal((galIdx+1)%gallerySlides.length),5000);}
function stopGalAuto(){clearInterval(galAutoIv);}

// ======= SECRET FREQUENCIES MODAL =======
function initFreqModal(){
  const cont=document.getElementById('fmFreqs');if(!cont)return;
  cont.innerHTML=secretFreqs.map(f=>`
    <div class="fm-freq-item" onclick="playClick()">
      <div class="ffi-freq">${f.freq}</div>
      <div class="ffi-body"><h4>${f.title}</h4><p>${f.desc}</p></div>
    </div>`).join('');
}
function openFreqModal(){document.getElementById('freqModal').classList.add('open');}
function closeFreqModal(){document.getElementById('freqModal').classList.remove('open');}

// ======= TUNING DIAL =======
function initDial(){
  const dial=document.getElementById('tuningDial');if(!dial)return;
  let startX=0,startAngle=0;
  function getAngle(e){
    const r=dial.getBoundingClientRect();
    const cx=r.left+r.width/2, cy=r.top+r.height/2;
    const x=(e.touches?e.touches[0].clientX:e.clientX)-cx;
    const y=(e.touches?e.touches[0].clientY:e.clientY)-cy;
    return Math.atan2(y,x)*(180/Math.PI);
  }
  function onStart(e){isDraggingDial=true;startAngle=getAngle(e);dial.style.cursor='grabbing';}
  function onMove(e){
    if(!isDraggingDial)return;
    e.preventDefault();
    const a=getAngle(e);
    const delta=a-startAngle;
    dialAngle=(dialAngle+delta+360)%360;
    startAngle=a;
    const needle=document.getElementById('svgNeedle');
    if(needle)needle.setAttribute('transform',`rotate(${dialAngle} 100 100)`);
    // Map angle to frequency 87-108
    const freq=(87+(dialAngle/360)*21).toFixed(1);
    const disp=document.getElementById('dialFreqDisp');
    if(disp)disp.textContent=freq;
    document.getElementById('freqDisplay').textContent=freq;
    playClick();
  }
  function onEnd(){isDraggingDial=false;dial.style.cursor='grab';}
  dial.addEventListener('mousedown',onStart);
  dial.addEventListener('touchstart',onStart,{passive:false});
  window.addEventListener('mousemove',onMove);
  window.addEventListener('touchmove',onMove,{passive:false});
  window.addEventListener('mouseup',onEnd);
  window.addEventListener('touchend',onEnd);
}

// ======= EQ SLIDERS =======
function initEqSliders(){
  const cont=document.getElementById('eqSliders');if(!cont)return;
  const bands=['60','150','400','1K','2.5K','6K','16K'];
  cont.innerHTML=bands.map((b,i)=>`
    <div class="eq-sl-wrap">
      <input type="range" class="eq-slider" min="0" max="100" value="${40+Math.random()*40|0}" orient="vertical" oninput="playClick()"/>
      <span class="eq-sl-label">${b}</span>
    </div>`).join('');
}

// ======= BOOKING (3 steps: drink → date → data+pay) =======
function initBookingForm(){
  const drinkGrid=document.getElementById('drinkPickGrid');if(!drinkGrid)return;
  drinkGrid.innerHTML=drinks.map(d=>`
    <div class="dpg-card" id="dpg_${d.id}" onclick="pickDrink(${d.id})">
      <h4>${d.icon} ${d.name}</h4>
      <div class="dpg-price">${d.price}</div>
      <p>${d.cat}</p>
    </div>`).join('');
}

function pickDrink(id){
  bookingData.drink=drinks.find(d=>d.id===id);
  document.querySelectorAll('.dpg-card').forEach(c=>c.classList.remove('sel'));
  document.getElementById('dpg_'+id)?.classList.add('sel');
  document.getElementById('pp-drink').textContent=bookingData.drink.name;
  document.getElementById('pp-price').textContent=bookingData.drink.price;
  document.getElementById('rcTrackNum').textContent='TRACK 02';
  playClick();
  goRec(2);
}

function initDateInput(){
  const input=document.getElementById('reqDate');if(!input)return;
  input.min=new Date().toISOString().split('T')[0];
  input.addEventListener('change',()=>{
    bookingData.date=input.value;
    bookingData.time=null;
    const d=new Date(input.value+'T12:00:00');
    document.getElementById('pp-date').textContent=d.toLocaleDateString('es-CO',{weekday:'short',day:'numeric',month:'short'});
    renderTimeSlots(input.value);
  });
  document.getElementById('reqOcasion')?.addEventListener('change',function(){
    if(this.value)showToast('▶ '+this.value+' registrado');
  });
}

function renderTimeSlots(dateStr){
  const cont=document.getElementById('timeslotGrid');if(!cont)return;
  const d=new Date(dateStr+'T12:00:00'),day=d.getDay();
  const open=18,close=day===0?24:day>=5?27:25;
  const occupied=['19:00','20:30','22:00'];
  const slots=[];
  for(let h=open;h<close;h++){
    slots.push(pad(h%24)+':00');
    if(h+0.5<close)slots.push(pad(h%24)+':30');
  }
  cont.innerHTML=slots.map(s=>`
    <button class="ts-btn ${occupied.includes(s)?'taken':''}" onclick="pickTime('${s}',this)">${s}</button>`).join('');
}

function pickTime(t,el){
  document.querySelectorAll('.ts-btn').forEach(b=>b.classList.remove('sel'));
  el.classList.add('sel');
  bookingData.time=t;
  document.getElementById('pp-time').textContent=t;
  playClick();
  goRec(3);
}

function goRec(n){
  currentRecStep=n;
  document.querySelectorAll('.rec-step').forEach((s,i)=>s.classList.toggle('active',i===n-1));
  document.getElementById('rcTrackNum').textContent=`TRACK 0${n}`;
}

// ======= PAYMENT (reservation) =======
function selectPay(method,btn){
  bookingData.pay=method;
  document.querySelectorAll('#pcOptions .pc-opt,[id^="pc-"]').forEach(b=>{b.classList.remove('active-pay');});
  btn.classList.add('active-pay');
  document.querySelectorAll('[id^="led-"]').forEach(l=>l.style.background='#2a2200');
  const led=document.getElementById('led-'+method);
  if(led){led.style.background='var(--green)';led.style.boxShadow='0 0 6px var(--green)';}
  const strip=document.getElementById('pcCopyStrip');
  const label=document.getElementById('pcsLabel');
  if(method==='nequi'||method==='daviplata'){
    if(strip)strip.style.display='flex';
    if(label)label.textContent=method==='nequi'?'NÚMERO NEQUI:':'NÚMERO DAVIPLATA:';
  } else {
    if(strip)strip.style.display='none';
  }
  const msgs={cash:'▶ Paga en efectivo al llegar.',nequi:'▶ Transfiere antes de llegar. Trae comprobante.',daviplata:'▶ Transfiere antes de llegar. Trae comprobante.',transfer:'▶ Te enviamos los datos por WhatsApp.'};
  const msg=document.getElementById('pcMsg');
  if(msg)msg.textContent=msgs[method]||'';
  document.getElementById('pp-pay').textContent=PAY_LABELS[method];
  playClick();
}

function copyPaymentNum(){
  const btn=document.querySelector('.pcs-copy');
  navigator.clipboard.writeText('3167890123').then(()=>{
    if(btn){btn.textContent='✓ COPIADO';btn.classList.add('copied');setTimeout(()=>{btn.textContent='⎗ COPIAR';btn.classList.remove('copied');},2000);}
    showToast('▶ Número copiado');
  }).catch(()=>showToast('Número: 316 789 0123'));
}

function sendRequest(){
  const name=document.getElementById('reqName')?.value.trim();
  const phone=document.getElementById('reqPhone')?.value.trim();
  if(!bookingData.drink){showToast('▶ Elige un trago primero');return;}
  if(!bookingData.date||!bookingData.time){showToast('▶ Selecciona fecha y hora');return;}
  if(!name||!phone){showToast('▶ Completa nombre y teléfono');return;}
  if(!bookingData.pay){showToast('▶ Elige método de pago');return;}

  const d=new Date(bookingData.date+'T12:00:00');
  const dateStr=d.toLocaleDateString('es-CO',{weekday:'long',day:'numeric',month:'long'});
  const waveform=document.getElementById('cmWaveform');
  if(waveform){
    waveform.innerHTML='';
    for(let i=0;i<20;i++){
      const b=document.createElement('div');
      b.style.cssText=`width:4px;background:var(--amber);border-radius:1px;height:${Math.random()*20+4}px;transition:height 0.1s`;
      waveform.appendChild(b);
    }
    setInterval(()=>{waveform.querySelectorAll('div').forEach(b=>b.style.height=(Math.random()*20+4)+'px');},120);
  }
  document.getElementById('cmText').innerHTML=`
    Señal recibida, <strong>${name}</strong>.<br/><br/>
    🍹 <strong>Trago:</strong> ${bookingData.drink.name}<br/>
    📅 <strong>Fecha:</strong> ${dateStr} · ${bookingData.time}<br/>
    💰 <strong>Precio:</strong> ${bookingData.drink.price}<br/>
    💳 <strong>Pago:</strong> ${PAY_LABELS[bookingData.pay]}<br/><br/>
    <em>Te confirmamos al ${phone} en menos de 30 min.</em>
  `;
  document.getElementById('confirmModal').classList.add('open');
}

function closeConfirm(){
  document.getElementById('confirmModal').classList.remove('open');
  bookingData={drink:null,date:null,time:null,pay:null};
  document.querySelectorAll('.dpg-card,.ts-btn').forEach(c=>c.classList.remove('sel'));
  document.querySelectorAll('.pc-opt').forEach(b=>b.classList.remove('active-pay'));
  document.querySelectorAll('[id^="led-"]').forEach(l=>{l.style.background='#2a2200';l.style.boxShadow='none';});
  ['reqName','reqPhone','reqEmail','reqDate'].forEach(id=>{const el=document.getElementById(id);if(el)el.value='';});
  document.getElementById('reqOcasion').value='';
  document.getElementById('timeslotGrid').innerHTML='<p class="console-hint">Selecciona fecha para ver slots</p>';
  document.getElementById('pcCopyStrip').style.display='none';
  document.getElementById('pcMsg').textContent='';
  ['pp-drink','pp-price','pp-date','pp-time','pp-pay'].forEach(id=>{const el=document.getElementById(id);if(el)el.textContent='—';});
  goRec(1);
}

// ======= DELIVERY =======
function renderDeliveryProducts(){
  const cont=document.getElementById('delProducts');if(!cont)return;
  // Use first 10 drinks for delivery
  cont.innerHTML=drinks.slice(0,10).map(d=>`
    <div class="del-prod-card" id="dp_${d.id}">
      <div class="dpc-top"><span class="dpc-icon">${d.icon}</span><span class="dpc-name">${d.name}</span></div>
      <div class="dpc-price">${d.price}</div>
      <div class="dpc-qty">
        <button class="dpc-btn" onclick="changeDelQty(${d.id},-1)">−</button>
        <span class="dpc-num" id="dqty_${d.id}">0</span>
        <button class="dpc-btn" onclick="changeDelQty(${d.id},+1)">+</button>
      </div>
    </div>`).join('');
}

document.addEventListener('DOMContentLoaded',()=>{
  renderDeliveryProducts();
  initFooterEq();
});

function changeDelQty(id,delta){
  const drink=drinks.find(d=>d.id===id);if(!drink)return;
  const current=deliveryCart[id]||0;
  const next=Math.max(0,current+delta);
  if(next>0)deliveryCart[id]={...drink,qty:next};
  else delete deliveryCart[id];
  const numEl=document.getElementById('dqty_'+id);
  if(numEl)numEl.textContent=next;
  const card=document.getElementById('dp_'+id);
  if(card)card.classList.toggle('in-cart',next>0);
  updateDelCart();
}

function updateDelCart(){
  const items=Object.values(deliveryCart).filter(i=>i.qty>0);
  const itemsCont=document.getElementById('dcItems');
  const totals=document.getElementById('dcTotals');
  if(items.length===0){
    if(itemsCont)itemsCont.innerHTML='<p class="console-hint">Aún no has agregado nada</p>';
    if(totals)totals.style.display='none';
    return;
  }
  let subtotal=0;
  if(itemsCont)itemsCont.innerHTML=items.map(i=>{
    const lt=i.priceN*i.qty;subtotal+=lt;
    return `<div class="dc-item"><span>${i.icon} ${i.name} ×${i.qty}</span><strong>$${lt.toLocaleString('es-CO')}</strong></div>`;
  }).join('');
  const delivery=subtotal>=80000?0:5000;
  if(document.getElementById('dctSub'))document.getElementById('dctSub').textContent='$'+subtotal.toLocaleString('es-CO');
  if(document.getElementById('dctDel'))document.getElementById('dctDel').textContent=delivery===0?'¡GRATIS!':'$'+delivery.toLocaleString('es-CO');
  if(document.getElementById('dctTotal'))document.getElementById('dctTotal').textContent='$'+(subtotal+delivery).toLocaleString('es-CO');
  if(totals)totals.style.display='flex';
}

function selectDelPay(method,btn){
  deliveryPay=method;
  document.querySelectorAll('[id^="del-pc-"]').forEach(b=>b.classList.remove('active-pay'));
  btn.classList.add('active-pay');
  document.querySelectorAll('[id^="del-led-"]').forEach(l=>{l.style.background='#2a2200';l.style.boxShadow='none';});
  const led=document.getElementById('del-led-'+method);
  if(led){led.style.background='var(--green)';led.style.boxShadow='0 0 6px var(--green)';}
  const strip=document.getElementById('delCopyStrip');
  const label=document.getElementById('delCopyLabel');
  if(method==='nequi'||method==='daviplata'){
    if(strip)strip.style.display='flex';
    if(label)label.textContent=method==='nequi'?'NEQUI:':'DAVIPLATA:';
  } else {
    if(strip)strip.style.display='none';
  }
  const msgs={cash:'▶ Paga en efectivo al recibir.',nequi:'▶ Transfiere antes de que salga el pedido.',daviplata:'▶ Transfiere antes de que salga el pedido.',transfer:'▶ Te enviamos los datos bancarios.'};
  const msg=document.getElementById('delPayMsg');
  if(msg)msg.textContent=msgs[method]||'';
  playClick();
}

function copyDelNum(){
  const btn=document.querySelector('#delCopyStrip .pcs-copy');
  navigator.clipboard.writeText('3167890123').then(()=>{
    if(btn){btn.textContent='✓ COPIADO';btn.classList.add('copied');setTimeout(()=>{btn.textContent='⎗ COPIAR';btn.classList.remove('copied');},2000);}
    showToast('▶ Número copiado');
  }).catch(()=>showToast('Número: 316 789 0123'));
}

function confirmDelivery(){
  const name=document.getElementById('delName')?.value.trim();
  const phone=document.getElementById('delPhone')?.value.trim();
  const addr=document.getElementById('delAddr')?.value.trim();
  const items=Object.values(deliveryCart).filter(i=>i.qty>0);
  if(items.length===0){showToast('▶ Agrega al menos un trago');return;}
  if(!name||!phone||!addr){showToast('▶ Completa nombre, teléfono y dirección');return;}
  if(!deliveryPay){showToast('▶ Selecciona el método de pago');return;}

  const subtotal=items.reduce((s,i)=>s+i.priceN*i.qty,0);
  const delivery=subtotal>=80000?0:5000;
  const waveform=document.getElementById('delWaveform');
  if(waveform){
    waveform.innerHTML='';
    for(let i=0;i<20;i++){
      const b=document.createElement('div');
      b.style.cssText=`width:4px;background:var(--amber);border-radius:1px;height:${Math.random()*20+4}px`;
      waveform.appendChild(b);
    }
  }
  document.getElementById('delModalText').innerHTML=`
    <strong>${name}</strong>, tu pedido está en camino 🛵<br/><br/>
    ${items.map(i=>`${i.icon} <strong>${i.name}</strong> ×${i.qty} — $${(i.priceN*i.qty).toLocaleString('es-CO')}`).join('<br/>')}<br/><br/>
    📍 <strong>Dirección:</strong> ${addr}<br/>
    💳 <strong>Pago:</strong> ${PAY_LABELS[deliveryPay]}<br/>
    💰 <strong>Total:</strong> $${(subtotal+delivery).toLocaleString('es-CO')} ${delivery===0?'(domicilio gratis 🎉)':''}<br/><br/>
    <em>Te escribimos al ${phone} cuando salga el pedido. ~30-50 min.</em>
  `;
  document.getElementById('delModal').classList.add('open');
}

function closeDelModal(){
  document.getElementById('delModal').classList.remove('open');
  // Reset delivery
  deliveryCart={};deliveryPay=null;
  document.querySelectorAll('[id^="dp_"]').forEach(c=>c.classList.remove('in-cart'));
  drinks.slice(0,10).forEach(d=>{
    const el=document.getElementById('dqty_'+d.id);if(el)el.textContent='0';
  });
  document.querySelectorAll('[id^="del-pc-"]').forEach(b=>b.classList.remove('active-pay'));
  document.querySelectorAll('[id^="del-led-"]').forEach(l=>{l.style.background='#2a2200';l.style.boxShadow='none';});
  ['delName','delPhone','delAddr','delBarrio','delNote'].forEach(id=>{const el=document.getElementById(id);if(el)el.value='';});
  const strip=document.getElementById('delCopyStrip');if(strip)strip.style.display='none';
  const msg=document.getElementById('delPayMsg');if(msg)msg.textContent='';
  updateDelCart();
}

// ======= TOAST =======
function showToast(msg){
  const t=document.createElement('div');
  t.style.cssText=`position:fixed;bottom:24px;right:24px;background:#100e02;border:1px solid rgba(200,160,48,0.4);border-left:3px solid #c8a030;color:#c8a030;font-family:'Courier Prime',monospace;font-size:0.75rem;letter-spacing:0.1em;padding:12px 18px;z-index:9999;box-shadow:0 4px 20px rgba(0,0,0,0.5);animation:slideIn 0.25s ease;max-width:300px`;
  t.textContent=msg;document.body.appendChild(t);
  setTimeout(()=>{t.style.opacity='0';t.style.transition='opacity 0.4s';},2300);
  setTimeout(()=>t.remove(),2800);
}

// ======= AUDIO =======
let audioCtx=null;
function getAudioCtx(){if(!audioCtx){try{audioCtx=new(window.AudioContext||window.webkitAudioContext)();}catch(e){return null;}}return audioCtx;}
function playClick(){
  const ctx=getAudioCtx();if(!ctx)return;
  const o=ctx.createOscillator(),g=ctx.createGain();
  o.connect(g);g.connect(ctx.destination);
  o.type='square';o.frequency.value=800;
  g.gain.setValueAtTime(0.03,ctx.currentTime);
  g.gain.exponentialRampToValueAtTime(0.001,ctx.currentTime+0.06);
  o.start();o.stop(ctx.currentTime+0.08);
}

// ======= UTILS =======
function pad(n){return String(Math.floor(n)).padStart(2,'0');}
