const tg=window.Telegram?.WebApp;
const S={user:null,infrastructure:[],packages:[],lang:"en"};
const L={
en:{intro:"A living digital model of a Ukrainian recirculating aquaculture farm. Grow Macrobrachium rosenbergii, turn every part of the harvest into value, and support resilient food production.",start:"START MISSION",note:"Digital simulation • real-world project development",title:"LIVING AQUAFARM",subtitle:"Energy, water, shrimp growth and processing as one connected system.",support:"YOUR SUPPORT",status:"FARM STATUS",digitalTwin:"● DIGITAL TWIN // AQUACULTURE MISSION",build:"BUILD.",grow:"GROW.",protect:"PROTECT.",energy:"ENERGY",storage:"STORAGE",prawn:"PRAWN",zeroWasteShort:"ZERO WASTE",delivery:"DELIVERY",farmOnline:"● FARM SYSTEM ONLINE",liveProcess:"LIVE PROCESS",oneFlow:"ONE FARM • ONE FLOW",online:"ONLINE",pools:"POOLS",rosenbergii:"ROSENBERGII",filter:"FILTER",bioMech:"BIO + MECH",automation:"AUTOMATION",drying:"DRYING",freezeDry:"FREEZE-DRY",packing:"PACKING",ready:"READY",upTo15kg:"UP TO 15 KG*",power:"POWER",auto:"AUTO",biofilter:"BIOFILTER",autoFeed:"AUTO\nFEED",rasTwin:"RAS / LIVE DIGITAL TWIN",automatedFeeding:"automated feeding • water quality control",water:"WATER",optimal:"OPTIMAL",infrastructure:"INFRASTRUCTURE",systemModules:"SYSTEM MODULES",waterLab:"WATER LAB",waterQuality:"WATER QUALITY",live:"LIVE",circular:"CIRCULAR PROCESSING",zeroWaste:"ONE SHRIMP — ZERO WASTE",harvest:"HARVEST",shell:"SHELL",chitin:"CHITIN / MINERALS",frontline:"FRONTLINE NUTRITION",missionSupport:"MISSION SUPPORT",fundNext:"FUND THE NEXT MODULE",minContribution:"MIN $1 / ₴50",simulation:"Simulation values are illustrative. Product composition, processing yield, safety and regulatory status must be verified before real production.",user:"USER",minimum:"Minimum contribution: $1 / ₴50",processing:"PROCESSING…",simulationShort:"simulation",apiError:"API error",missions:"MISSIONS",farmMissions:"FARM MISSIONS",missionReward:"REWARD",claim:"CLAIM",claimed:"CLAIMED",progress:"PROGRESS",mission1:"Feed both pools",mission1Desc:"Complete feeding in Pool #01 and Pool #02.",mission2:"Reach 40 kg biomass",mission2Desc:"Grow total farm biomass to 40 kg.",mission3:"Stabilize the farm",mission3Desc:"Keep both pools at 90% health or higher.",mission4:"Build the first upgrade",mission4Desc:"Complete any system upgrade.",missionLocked:"LOCKED",missionReady:"READY TO CLAIM",levelUp:"FARM LEVEL UP",levelReq:"REQUIRES LEVEL"},
uk:{intro:"Жива цифрова модель української рециркуляційної акваферми. Вирощуйте Macrobrachium rosenbergii, перетворюйте кожну частину врожаю на цінність та підтримуйте стійке виробництво продовольства.",start:"ПОЧАТИ МІСІЮ",note:"Цифрова симуляція • розвиток реального проєкту",title:"ЖИВА АКВАФЕРМА",subtitle:"Енергія, вода, ріст креветки та переробка як єдина система.",support:"ВАША ПІДТРИМКА",status:"СТАН ФЕРМИ",digitalTwin:"● ЦИФРОВИЙ ДВІЙНИК // АКВАКУЛЬТУРНА МІСІЯ",build:"БУДУЙ.",grow:"ВИРОЩУЙ.",protect:"ЗАХИЩАЙ.",energy:"ЕНЕРГІЯ",storage:"НАКОПИЧЕННЯ",prawn:"КРЕВЕТКА",zeroWasteShort:"НУЛЬ ВІДХОДІВ",delivery:"ДОСТАВКА",farmOnline:"● СИСТЕМА ФЕРМИ ОНЛАЙН",liveProcess:"ПРОЦЕС У РЕАЛЬНОМУ ЧАСІ",oneFlow:"ОДНА ФЕРМА • ОДИН ЦИКЛ",online:"ОНЛАЙН",pools:"БАСЕЙНИ",rosenbergii:"ROSENBERGII",filter:"ФІЛЬТР",bioMech:"БІО + МЕХ",automation:"АВТОМАТИКА",drying:"СУШІННЯ",freezeDry:"ЛІОФІЛІЗАЦІЯ",packing:"ПАКУВАННЯ",ready:"ГОТОВО",upTo15kg:"ДО 15 КГ*",power:"ПОТУЖНІСТЬ",auto:"АВТО",biofilter:"БІОФІЛЬТР",autoFeed:"АВТО\nГОДІВЛЯ",rasTwin:"УЗВ / ЖИВИЙ ЦИФРОВИЙ ДВІЙНИК",automatedFeeding:"автоматична годівля • контроль якості води",water:"ВОДА",optimal:"ОПТИМАЛЬНО",infrastructure:"ІНФРАСТРУКТУРА",systemModules:"МОДУЛІ СИСТЕМИ",waterLab:"ВОДНА ЛАБОРАТОРІЯ",waterQuality:"ЯКІСТЬ ВОДИ",live:"ОНЛАЙН",circular:"ЦИКЛІЧНА ПЕРЕРОБКА",zeroWaste:"ОДНА КРЕВЕТКА — НУЛЬ ВІДХОДІВ",harvest:"ВИЛОВ",shell:"ПАНЦИР",chitin:"ХІТИН / МІНЕРАЛИ",frontline:"ХАРЧОВА ПІДТРИМКА",missionSupport:"ПІДТРИМКА МІСІЇ",fundNext:"ПРОФІНАНСУВАТИ НАСТУПНИЙ МОДУЛЬ",minContribution:"МІН. $1 / ₴50",simulation:"Значення симуляції є ілюстративними. Склад продукту, вихід переробки, безпечність та регуляторний статус мають бути перевірені до початку реального виробництва.",user:"КОРИСТУВАЧ",minimum:"Мінімальний внесок: $1 / ₴50",processing:"ОБРОБКА…",simulationShort:"симуляція",apiError:"Помилка API",missions:"МІСІЇ",farmMissions:"МІСІЇ ФЕРМИ",missionReward:"НАГОРОДА",claim:"ОТРИМАТИ",claimed:"ОТРИМАНО",progress:"ПРОГРЕС",mission1:"Нагодувати обидва басейни",mission1Desc:"Завершіть годівлю у басейнах №01 та №02.",mission2:"Досягти 40 кг біомаси",mission2Desc:"Збільшіть загальну біомасу ферми до 40 кг.",mission3:"Стабілізувати ферму",mission3Desc:"Утримуйте здоров'я обох басейнів на рівні 90% або вище.",mission4:"Перший апгрейд",mission4Desc:"Завершіть будь-яке покращення системи.",missionLocked:"ЗАБЛОКОВАНО",missionReady:"ГОТОВО ДО ОТРИМАННЯ",levelUp:"НОВИЙ РІВЕНЬ ФЕРМИ",levelReq:"ПОТРІБЕН РІВЕНЬ"},
de:{intro:"Ein lebendiges digitales Modell einer ukrainischen Kreislauf-Aquakulturfarm. Züchte Macrobrachium rosenbergii und verwandle jeden Teil der Ernte in Wert.",start:"MISSION STARTEN",note:"Digitale Simulation • reales Projekt",title:"LEBENDE AQUAFARM",subtitle:"Energie, Wasser, Garnelenwachstum und Verarbeitung als ein verbundenes System.",support:"DEINE UNTERSTÜTZUNG",status:"FARMSTATUS",digitalTwin:"● DIGITALER ZWILLING // AQUAKULTUR-MISSION",build:"BUILD.",grow:"GROW.",protect:"PROTECT.",energy:"ENERGIE",storage:"SPEICHER",prawn:"GARNELE",zeroWasteShort:"NULL ABFALL",delivery:"LIEFERUNG",farmOnline:"● FARMSYSTEM ONLINE",liveProcess:"LIVE-PROZESS",oneFlow:"EINE FARM • EIN ABLAUF",online:"ONLINE",pools:"BECKEN",rosenbergii:"ROSENBERGII",filter:"FILTER",bioMech:"BIO + MECH",automation:"AUTOMATION",drying:"TROCKNUNG",freezeDry:"GEFRIERTROCKNUNG",packing:"VERPACKUNG",ready:"BEREIT",upTo15kg:"BIS 15 KG*",power:"LEISTUNG",auto:"AUTO",biofilter:"BIOFILTER",autoFeed:"AUTO\nFÜTTERUNG",rasTwin:"RAS / LIVE-DIGITALER ZWILLING",automatedFeeding:"automatische Fütterung • Wasserqualitätskontrolle",water:"WASSER",optimal:"OPTIMAL",infrastructure:"INFRASTRUKTUR",systemModules:"SYSTEMMODULE",waterLab:"WASSERLABOR",waterQuality:"WASSERQUALITÄT",live:"LIVE",circular:"KREISLAUFVERARBEITUNG",zeroWaste:"EINE GARNELE — NULL ABFALL",harvest:"ERNTE",shell:"PANZER",chitin:"CHITIN / MINERALIEN",frontline:"FRONTNAHRUNG",missionSupport:"MISSIONSUNTERSTÜTZUNG",fundNext:"NÄCHSTES MODUL FINANZIEREN",minContribution:"MIN. $1 / ₴50",simulation:"Simulationswerte dienen nur der Veranschaulichung. Produktzusammensetzung, Verarbeitungsausbeute, Sicherheit und regulatorischer Status müssen vor der realen Produktion überprüft werden.",user:"BENUTZER",minimum:"Mindestbeitrag: $1 / ₴50",processing:"VERARBEITUNG…",simulationShort:"Simulation",apiError:"API-Fehler",missions:"MISSIONEN",farmMissions:"FARM-MISSIONEN",missionReward:"BELOHNUNG",claim:"ABHOLEN",claimed:"ABGEHOLT",progress:"FORTSCHRITT",mission1:"Beide Becken füttern",mission1Desc:"Fütterung in Becken #01 und #02 abschließen.",mission2:"40 kg Biomasse erreichen",mission2Desc:"Gesamtbiomasse auf 40 kg erhöhen.",mission3:"Farm stabilisieren",mission3Desc:"Gesundheit beider Becken bei mindestens 90% halten.",mission4:"Erstes Upgrade",mission4Desc:"Ein beliebiges System-Upgrade abschließen.",missionLocked:"GESPERRT",missionReady:"BEREIT ZUM ABHOLEN",levelUp:"FARM-LEVEL ERHÖHT",levelReq:"BENÖTIGT LEVEL"},
fr:{intro:"Un jumeau numérique vivant d'une ferme aquacole ukrainienne en système recirculé. Élevez Macrobrachium rosenbergii et transformez chaque partie de la récolte en valeur.",start:"DÉMARRER LA MISSION",note:"Simulation numérique • développement d'un projet réel",title:"AQUAFERME VIVANTE",subtitle:"Énergie, eau, croissance des crevettes et transformation dans un même système.",support:"VOTRE SOUTIEN",status:"ÉTAT DE LA FERME",digitalTwin:"● JUMEAU NUMÉRIQUE // MISSION AQUACOLE",build:"BUILD.",grow:"GROW.",protect:"PROTECT.",energy:"ÉNERGIE",storage:"STOCKAGE",prawn:"CREVETTE",zeroWasteShort:"ZÉRO DÉCHET",delivery:"LIVRAISON",farmOnline:"● SYSTÈME DE FERME EN LIGNE",liveProcess:"PROCESSUS EN DIRECT",oneFlow:"UNE FERME • UN FLUX",online:"EN LIGNE",pools:"BASSINS",rosenbergii:"ROSENBERGII",filter:"FILTRE",bioMech:"BIO + MÉCA",automation:"AUTOMATISATION",drying:"SÉCHAGE",freezeDry:"LYOPHILISATION",packing:"EMBALLAGE",ready:"PRÊT",upTo15kg:"JUSQU'À 15 KG*",power:"PUISSANCE",auto:"AUTO",biofilter:"BIOFILTRE",autoFeed:"AUTO\nALIMENTATION",rasTwin:"RAS / JUMEAU NUMÉRIQUE EN DIRECT",automatedFeeding:"alimentation automatique • contrôle de la qualité de l'eau",water:"EAU",optimal:"OPTIMAL",infrastructure:"INFRASTRUCTURE",systemModules:"MODULES DU SYSTÈME",waterLab:"LABORATOIRE DE L'EAU",waterQuality:"QUALITÉ DE L'EAU",live:"EN DIRECT",circular:"TRANSFORMATION CIRCULAIRE",zeroWaste:"UNE CREVETTE — ZÉRO DÉCHET",harvest:"RÉCOLTE",shell:"CARAPACE",chitin:"CHITINE / MINÉRAUX",frontline:"NUTRITION TERRAIN",missionSupport:"SOUTIEN DE LA MISSION",fundNext:"FINANCER LE PROCHAIN MODULE",minContribution:"MIN. $1 / ₴50",simulation:"Les valeurs de simulation sont illustratives. La composition du produit, le rendement de transformation, la sécurité et le statut réglementaire doivent être vérifiés avant toute production réelle.",user:"UTILISATEUR",minimum:"Contribution minimale : $1 / ₴50",processing:"TRAITEMENT…",simulationShort:"simulation",apiError:"Erreur API",missions:"MISSIONS",farmMissions:"MISSIONS DE FERME",missionReward:"RÉCOMPENSE",claim:"RÉCLAMER",claimed:"RÉCLAMÉ",progress:"PROGRÈS",mission1:"Nourrir les deux bassins",mission1Desc:"Terminer l'alimentation des bassins #01 et #02.",mission2:"Atteindre 40 kg de biomasse",mission2Desc:"Porter la biomasse totale à 40 kg.",mission3:"Stabiliser la ferme",mission3Desc:"Maintenir la santé des deux bassins à 90% ou plus.",mission4:"Premier upgrade",mission4Desc:"Terminer une amélioration du système.",missionLocked:"VERROUILLÉ",missionReady:"PRÊT À RÉCLAMER",levelUp:"NIVEAU DE FERME AUGMENTÉ",levelReq:"NIVEAU REQUIS"},
ja:{intro:"ウクライナの循環式養殖場を再現するデジタルツイン。Macrobrachium rosenbergiiを育て、収穫物のすべての部分から価値を生み出します。",start:"ミッション開始",note:"デジタルシミュレーション • 実プロジェクト",title:"ライブ・アクアファーム",subtitle:"エネルギー、水、エビの成長、加工をひとつのシステムで管理します。",support:"あなたの支援",status:"ファーム状態",digitalTwin:"● デジタルツイン // 養殖ミッション",build:"BUILD.",grow:"GROW.",protect:"PROTECT.",energy:"エネルギー",storage:"蓄電",prawn:"エビ",zeroWasteShort:"ゼロウェイスト",delivery:"配送",farmOnline:"● ファームシステム ONLINE",liveProcess:"ライブプロセス",oneFlow:"ひとつの農場 • ひとつの流れ",online:"ONLINE",pools:"養殖池",rosenbergii:"ROSENBERGII",filter:"ろ過",bioMech:"BIO + MECH",automation:"自動制御",drying:"乾燥",freezeDry:"フリーズドライ",packing:"包装",ready:"READY",upTo15kg:"最大 15 KG*",power:"電力",auto:"AUTO",biofilter:"バイオフィルター",autoFeed:"自動\n給餌",rasTwin:"RAS / ライブデジタルツイン",automatedFeeding:"自動給餌 • 水質モニタリング",water:"水",optimal:"最適",infrastructure:"インフラ",systemModules:"システムモジュール",waterLab:"ウォーターラボ",waterQuality:"水質",live:"LIVE",circular:"循環型加工",zeroWaste:"1匹のエビ — ゼロウェイスト",harvest:"収穫",shell:"殻",chitin:"キチン / ミネラル",frontline:"フロントライン栄養",missionSupport:"ミッション支援",fundNext:"次のモジュールを支援",minContribution:"最低 $1 / ₴50",simulation:"シミュレーション値は説明用です。製品組成、加工歩留まり、安全性、規制上の位置付けは実際の生産前に検証する必要があります。",user:"USER",minimum:"最低支援額: $1 / ₴50",processing:"処理中…",simulationShort:"シミュレーション",apiError:"APIエラー",missions:"ミッション",farmMissions:"ファームミッション",missionReward:"報酬",claim:"受け取る",claimed:"受取済み",progress:"進行状況",mission1:"両方の池に給餌",mission1Desc:"池#01と#02の給餌を完了します。",mission2:"40kgのバイオマス",mission2Desc:"農場の総バイオマスを40kgまで増やします。",mission3:"ファームを安定化",mission3Desc:"両方の池の健康度を90%以上に保ちます。",mission4:"最初のアップグレード",mission4Desc:"任意のシステム強化を完了します。",missionLocked:"ロック",missionReady:"受取可能",levelUp:"ファームレベルアップ",levelReq:"必要レベル"},
zh:{intro:"乌克兰循环水养殖农场的动态数字孪生。养殖罗氏沼虾，将收获物的每一部分转化为价值。",start:"开始任务",note:"数字模拟 • 真实项目开发",title:"活体水产农场",subtitle:"能源、水、虾类生长与加工由一个完整系统连接。",support:"您的支持",status:"农场状态",digitalTwin:"● 数字孪生 // 水产养殖任务",build:"BUILD.",grow:"GROW.",protect:"PROTECT.",energy:"能源",storage:"储能",prawn:"虾",zeroWasteShort:"零废弃",delivery:"配送",farmOnline:"● 农场系统在线",liveProcess:"实时流程",oneFlow:"一个农场 • 一个流程",online:"在线",pools:"养殖池",rosenbergii:"ROSENBERGII",filter:"过滤",bioMech:"生物 + 机械",automation:"自动化",drying:"干燥",freezeDry:"冻干",packing:"包装",ready:"就绪",upTo15kg:"最高 15 KG*",power:"功率",auto:"自动",biofilter:"生物过滤器",autoFeed:"自动\n喂料",rasTwin:"RAS / 实时数字孪生",automatedFeeding:"自动喂料 • 水质控制",water:"水",optimal:"最佳",infrastructure:"基础设施",systemModules:"系统模块",waterLab:"水质实验室",waterQuality:"水质",live:"实时",circular:"循环加工",zeroWaste:"一只虾 — 零废弃",harvest:"收获",shell:"虾壳",chitin:"甲壳素 / 矿物质",frontline:"前线营养支持",missionSupport:"任务支持",fundNext:"支持下一个模块",minContribution:"最低 $1 / ₴50",simulation:"模拟数据仅用于展示。产品成分、加工产率、安全性和监管状态必须在实际生产前进行验证。",user:"用户",minimum:"最低支持金额：$1 / ₴50",processing:"处理中…",simulationShort:"模拟",apiError:"API错误",missions:"任务",farmMissions:"农场任务",missionReward:"奖励",claim:"领取",claimed:"已领取",progress:"进度",mission1:"给两个养殖池喂料",mission1Desc:"完成#01和#02养殖池的喂料。",mission2:"达到40 kg生物量",mission2Desc:"将农场总生物量提升至40 kg。",mission3:"稳定农场",mission3Desc:"保持两个养殖池健康度在90%以上。",mission4:"首次升级",mission4Desc:"完成任意一次系统升级。",missionLocked:"锁定",missionReady:"可领取",levelUp:"农场升级",levelReq:"需要等级"}};
const langs=[["en","EN","English"],["uk","UA","Українська"],["de","DE","Deutsch"],["fr","FR","Français"],["zh","中文","中文"],["ja","日本語","日本語"]];
const W=[["TEMP","28.0","°C"],["pH","7.5",""],["DO","6.2","mg/L"],["TAN","0.08","mg/L"],["NH₃-N","0.01","mg/L"],["NO₂-N","0.05","mg/L"],["NO₃-N","4.2","mg/L"],["ALK","60","mg/L"],["HARD","90","mg/L"],["ORP","245","mV"],["TDS","420","mg/L"],["CO₂","7.0","mg/L"],["Ca","38","mg/L"],["Mg","14","mg/L"],["K","6.2","mg/L"],["PO₄","0.12","mg/L"],["Cu","0.01","mg/L"],["Zn","0.02","mg/L"]];
function t(k){return L[S.lang]?.[k]??L.en[k]??k} function initData(){return tg?.initData||""} function esc(v){return String(v??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")} function num(v){return Number(v||0).toLocaleString(undefined,{maximumFractionDigits:2})}
function detect(){const k=(tg?.initDataUnsafe?.user?.language_code||navigator.language||"en").slice(0,2).toLowerCase();return L[k]?k:"en"}
async function api(url,opt={}){const headers={"Content-Type":"application/json","X-Telegram-Init-Data":initData(),...(opt.headers||{})};const r=await fetch(url,{...opt,headers});if(!r.ok){const e=await r.json().catch(()=>({}));throw Error(e.detail||t("apiError"))}return r.json()}
function panel(id){const el=document.getElementById(id);if(!el)return;el.innerHTML=langs.map(x=>`<button type="button" data-lang="${x[0]}"><b>${x[1]}</b><small>${x[2]}</small></button>`).join("");el.querySelectorAll("[data-lang]").forEach(b=>b.onclick=()=>{S.lang=b.dataset.lang;apply();closePanels()})}
function closePanels(){document.getElementById("langsIntro")?.classList.remove("open");document.getElementById("langsFarm")?.classList.remove("open")}
function apply(){document.querySelectorAll("[data-i]").forEach(e=>{e.textContent=t(e.dataset.i);if(e.dataset.i==="autoFeed")e.style.whiteSpace="pre-line"});const c=langs.find(x=>x[0]===S.lang)?.[1]||"EN";document.getElementById("lang").textContent=c;document.getElementById("flang").textContent=c;document.documentElement.lang=S.lang;panel("langsIntro");panel("langsFarm");renderModules();renderPackages()}
function pct(m){const a=+m.total_funding_required_usd;return a?Math.min(100,+m.current_funding_usd/a*100):0} function farmPct(){const r=S.infrastructure.reduce((a,m)=>a+ +m.total_funding_required_usd,0),c=S.infrastructure.reduce((a,m)=>a+ +m.current_funding_usd,0);return r?Math.round(c/r*100):0} function icon(z){return z==="energy"?"☀":z==="pools"?"🦐":z==="filtration"?"♻":"📦"}
function renderModules(){const c=document.getElementById("modules");if(!c)return;document.getElementById("count").textContent=S.infrastructure.length;c.innerHTML=S.infrastructure.map(m=>{const p=pct(m);return `<div class="module"><span class="module-icon">${icon(m.zone)}</span><div class="module-main"><b class="module-name">${esc(m.module_name)}</b><small class="module-meta">${esc(String(m.zone||"").toUpperCase())} • $${num(m.current_funding_usd)} / $${num(m.total_funding_required_usd)}</small><i class="module-bar"><em style="width:${p}%"></em></i><label class="module-status">${esc(m.status||"")}</label></div></div>`}).join("")}
function renderPackages(){const c=document.getElementById("packages");if(!c)return;c.innerHTML=S.packages.map(p=>`<div class="pack"><div class="pack-info"><b>${esc(p.name)}</b><small>${esc(p.description)}</small></div><strong>₴${num(p.price_uah)} / $${num(p.price_usdt)}</strong><button type="button" class="package-btn" data-p="${p.id}">+</button></div>`).join("");c.querySelectorAll("[data-p]").forEach(b=>b.onclick=()=>payPackage(+b.dataset.p,b))}
function renderWater(){document.getElementById("water").innerHTML=W.map(x=>`<div><span>${x[0]}</span><b>${x[1]}</b><small>${x[2]}</small><i></i></div>`).join("")}
function busy(b,v){if(!b)return;if(v){b.dataset.old=b.textContent;b.textContent="…";b.disabled=true}else{b.textContent=b.dataset.old||b.textContent;b.disabled=false}}
async function contribution(a,b){if(a<1){toast(t("minimum"));return}busy(b,true);toast(t("processing"));try{const r=await api("/api/payments/create",{method:"POST",body:JSON.stringify({amount:a,currency:"USDT",purpose:"Farm contribution"})});toast(`$${a} • ${r.status||"OK"} • ${t("simulationShort")}`)}catch(e){toast(e.message)}finally{busy(b,false)}}
async function payPackage(id,b){const p=S.packages.find(x=>x.id===id);if(!p)return;busy(b,true);toast(t("processing"));try{const r=await api("/api/payments/create",{method:"POST",body:JSON.stringify({amount:p.price_usdt,currency:"USDT",purpose:p.name})});toast(`${r.status||"OK"} • ${t("simulationShort")}`)}catch(e){toast(e.message)}finally{busy(b,false)}}
function toast(m){const x=document.getElementById("toast");x.textContent=m;x.className="show";clearTimeout(window.__tt);window.__tt=setTimeout(()=>x.className="",4000)} function clock(){const x=document.getElementById("clock");if(x)x.textContent=new Date().toLocaleTimeString([],{hour12:false})}
function setup(){if(tg){tg.ready();tg.expand();tg.setHeaderColor?.("#03111c");tg.setBackgroundColor?.("#03111c")}S.lang=detect();renderWater();apply();clock();setInterval(clock,1000);document.getElementById("lang").onclick=e=>{e.stopPropagation();closePanels();document.getElementById("langsIntro").classList.add("open")};document.getElementById("flang").onclick=e=>{e.stopPropagation();closePanels();document.getElementById("langsFarm").classList.add("open")};document.addEventListener("click",e=>{if(!e.target.closest(".langs")&&!e.target.closest(".lang-button"))closePanels()});document.getElementById("start").onclick=()=>{document.getElementById("intro").classList.add("out");setTimeout(()=>{document.getElementById("intro").classList.add("hidden");document.getElementById("farm").classList.remove("hidden")},600)};document.querySelectorAll("[data-a]").forEach(b=>b.onclick=()=>contribution(+b.dataset.a,b))}
async function boot(){setup();try{S.user=await api("/api/auth",{method:"POST"});S.infrastructure=await api("/api/infrastructure");S.packages=await api("/api/support-packages");document.getElementById("user").textContent=S.user.username?"@"+S.user.username:`${t("user")} ${S.user.telegram_id}`;document.getElementById("balance").textContent="$"+num(S.user.balance_crypto);document.getElementById("farmStatus").textContent=farmPct()+"%";apply()}catch(e){toast(e.message)}}boot();

;(()=>{
const $=id=>document.getElementById(id);
const G={
 en:{population:'POPULATION',biomass:'BIOMASS',health:'HEALTH',feed:'FEED',inspect:'INSPECT',events:'LIVE FARM EVENTS',growth:'GROWTH CYCLE',day:'DAY',avg:'AVG WT',survival:'SURVIVAL',close:'CLOSE',pool:'POOL',temperature:'TEMPERATURE',ph:'pH',do:'DO',fed:'FEEDING COMPLETED',waterStable:'WATER QUALITY — STABLE',growthEvent:'BIOMASS +',cycleEvent:'GROWTH CYCLE ADVANCED',cooldown:'FEED COOLDOWN',ready:'READY',upgrades:'UPGRADE SYSTEM',tree:'FARM DEVELOPMENT TREE',upgrade:'UPGRADE',level:'LEVEL',cost:'COST',maxed:'MAXED',locked:'LOCKED',gameOnly:'Game progression only • no real-money effect',solar:'SOLAR',battery:'BATTERY',poolModule:'POOLS',biofilterModule:'BIOFILTER',automationModule:'AUTOMATION',dryingModule:'DRYING',packingModule:'PACKING',droneModule:'DRONE',solarDesc:'Energy generation',batteryDesc:'Energy storage',poolDesc:'Capacity & biomass',biofilterDesc:'Water stability',automationDesc:'Smart control',dryingDesc:'Processing capacity',packingDesc:'Packing throughput',droneDesc:'Delivery capacity',notEnough:'NOT ENOUGH XP',upgradeDone:'UPGRADE COMPLETE' },
 uk:{population:'ПОПУЛЯЦІЯ',biomass:'БІОМАСА',health:'ЗДОРОВʼЯ',feed:'ГОДУВАТИ',inspect:'ОГЛЯД',events:'ПОДІЇ ФЕРМИ ВЖИВУ',growth:'ЦИКЛ РОСТУ',day:'ДЕНЬ',avg:'СЕР. ВАГА',survival:'ВИЖИВАНІСТЬ',close:'ЗАКРИТИ',pool:'БАСЕЙН',temperature:'ТЕМПЕРАТУРА',ph:'pH',do:'DO',fed:'ГОДІВЛЯ ЗАВЕРШЕНА',waterStable:'ЯКІСТЬ ВОДИ — СТАБІЛЬНА',growthEvent:'БІОМАСА +',cycleEvent:'ЦИКЛ РОСТУ ПРОСУНУТО',cooldown:'ПЕРЕРВА ГОДІВЛІ',ready:'ГОТОВО',upgrades:'АПГРЕЙДИ СИСТЕМИ',tree:'ДЕРЕВО РОЗВИТКУ ФЕРМИ',upgrade:'ПОКРАЩИТИ',level:'РІВЕНЬ',cost:'ВАРТІСТЬ',maxed:'МАКС.',locked:'ЗАБЛОКОВАНО',gameOnly:'Лише ігровий прогрес • без впливу на реальні гроші',solar:'СОНЯЧНА ЕНЕРГІЯ',battery:'АКУМУЛЯТОР',poolModule:'БАСЕЙНИ',biofilterModule:'БІОФІЛЬТР',automationModule:'АВТОМАТИКА',dryingModule:'СУШІННЯ',packingModule:'ПАКУВАННЯ',droneModule:'ДРОН',solarDesc:'Генерація енергії',batteryDesc:'Накопичення енергії',poolDesc:'Місткість і біомаса',biofilterDesc:'Стабільність води',automationDesc:'Розумне керування',dryingDesc:'Потужність переробки',packingDesc:'Пропускна здатність пакування',droneDesc:'Місткість доставки',notEnough:'НЕДОСТАТНЬО XP',upgradeDone:'ПОКРАЩЕННЯ ЗАВЕРШЕНО' },
 de:{population:'POPULATION',biomass:'BIOMASSE',health:'GESUNDHEIT',feed:'FÜTTERN',inspect:'INSPEKT',events:'LIVE-FARM-EREIGNISSE',growth:'WACHSTUMSZYKLUS',day:'TAG',avg:'AVG. GEWICHT',survival:'ÜBERLEBEN',close:'SCHLIESSEN',pool:'BECKEN',temperature:'TEMPERATUR',ph:'pH',do:'DO',fed:'FÜTTERUNG ABGESCHLOSSEN',waterStable:'WASSERQUALITÄT — STABIL',growthEvent:'BIOMASSE +',cycleEvent:'WACHSTUMSZYKLUS FORTGESCHRITTEN',cooldown:'FÜTTERPAUSE',ready:'BEREIT',upgrades:'SYSTEM-UPGRADES',tree:'FARM-ENTWICKLUNGSBAUM',upgrade:'UPGRADE',level:'LEVEL',cost:'KOSTEN',maxed:'MAX',locked:'GESPERRT',gameOnly:'Nur Spielfortschritt • kein Echtgeld-Effekt',solar:'SOLAR',battery:'BATTERIE',poolModule:'BECKEN',biofilterModule:'BIOFILTER',automationModule:'AUTOMATION',dryingModule:'TROCKNUNG',packingModule:'VERPACKUNG',droneModule:'DROHNE',solarDesc:'Energieerzeugung',batteryDesc:'Energiespeicher',poolDesc:'Kapazität & Biomasse',biofilterDesc:'Wasserstabilität',automationDesc:'Smarte Steuerung',dryingDesc:'Verarbeitungskapazität',packingDesc:'Verpackungsdurchsatz',droneDesc:'Lieferkapazität',notEnough:'NICHT GENUG XP',upgradeDone:'UPGRADE ABGESCHLOSSEN' },
 fr:{population:'POPULATION',biomass:'BIOMASSE',health:'SANTÉ',feed:'NOURRIR',inspect:'INSPECTER',events:'ÉVÉNEMENTS DE LA FERME',growth:'CYCLE DE CROISSANCE',day:'JOUR',avg:'POIDS MOY.',survival:'SURVIE',close:'FERMER',pool:'BASSIN',temperature:'TEMPÉRATURE',ph:'pH',do:'DO',fed:'ALIMENTATION TERMINÉE',waterStable:'QUALITÉ DE L’EAU — STABLE',growthEvent:'BIOMASSE +',cycleEvent:'CYCLE DE CROISSANCE AVANCÉ',cooldown:'PAUSE ALIMENTATION',ready:'PRÊT',upgrades:'AMÉLIORATIONS DU SYSTÈME',tree:'ARBRE DE DÉVELOPPEMENT',upgrade:'AMÉLIORER',level:'NIVEAU',cost:'COÛT',maxed:'MAX',locked:'VERROUILLÉ',gameOnly:'Progression de jeu uniquement • aucun effet argent réel',solar:'SOLAIRE',battery:'BATTERIE',poolModule:'BASSINS',biofilterModule:'BIOFILTRE',automationModule:'AUTOMATISATION',dryingModule:'SÉCHAGE',packingModule:'EMBALLAGE',droneModule:'DRONE',solarDesc:'Production d’énergie',batteryDesc:'Stockage d’énergie',poolDesc:'Capacité & biomasse',biofilterDesc:'Stabilité de l’eau',automationDesc:'Contrôle intelligent',dryingDesc:'Capacité de traitement',packingDesc:'Débit d’emballage',droneDesc:'Capacité de livraison',notEnough:'XP INSUFFISANT',upgradeDone:'AMÉLIORATION TERMINÉE' },
 ja:{population:'個体数',biomass:'バイオマス',health:'健康度',feed:'給餌',inspect:'検査',events:'ライブ農場イベント',growth:'成長サイクル',day:'日',avg:'平均体重',survival:'生存率',close:'閉じる',pool:'養殖池',temperature:'水温',ph:'pH',do:'DO',fed:'給餌完了',waterStable:'水質 — 安定',growthEvent:'バイオマス +',cycleEvent:'成長サイクル進行',cooldown:'給餌クールダウン',ready:'準備完了',upgrades:'システムアップグレード',tree:'ファーム開発ツリー',upgrade:'アップグレード',level:'レベル',cost:'コスト',maxed:'最大',locked:'ロック',gameOnly:'ゲーム進行のみ • 実際の支払いには影響しません',solar:'ソーラー',battery:'バッテリー',poolModule:'養殖池',biofilterModule:'バイオフィルター',automationModule:'自動化',dryingModule:'乾燥',packingModule:'包装',droneModule:'ドローン',solarDesc:'発電能力',batteryDesc:'蓄電能力',poolDesc:'容量とバイオマス',biofilterDesc:'水質安定',automationDesc:'スマート制御',dryingDesc:'加工能力',packingDesc:'包装処理能力',droneDesc:'配送能力',notEnough:'XP不足',upgradeDone:'アップグレード完了' },
 zh:{population:'数量',biomass:'生物量',health:'健康度',feed:'喂料',inspect:'检查',events:'农场实时事件',growth:'生长周期',day:'天',avg:'平均重量',survival:'存活率',close:'关闭',pool:'养殖池',temperature:'水温',ph:'pH',do:'DO',fed:'喂料完成',waterStable:'水质 — 稳定',growthEvent:'生物量 +',cycleEvent:'生长周期推进',cooldown:'喂料冷却',ready:'就绪',upgrades:'系统升级',tree:'农场发展树',upgrade:'升级',level:'等级',cost:'成本',maxed:'最高',locked:'锁定',gameOnly:'仅游戏进度 • 不影响真实资金',solar:'太阳能',battery:'电池',poolModule:'养殖池',biofilterModule:'生物过滤',automationModule:'自动化',dryingModule:'干燥',packingModule:'包装',droneModule:'无人机',solarDesc:'能源发电',batteryDesc:'能源储存',poolDesc:'容量与生物量',biofilterDesc:'水质稳定',automationDesc:'智能控制',dryingDesc:'加工能力',packingDesc:'包装吞吐',droneDesc:'配送能力',notEnough:'XP不足',upgradeDone:'升级完成' }
};
const gt=k=>(G[S.lang]||G.en)[k]||G.en[k]||k;
const pools={
 1:{pop:1240,bio:18.6,health:96,feed:82,survival:95,avg:31,temp:28.0,ph:7.5,do:6.2},
 2:{pop:1180,bio:18.6,health:94,feed:78,survival:94,avg:30,temp:28.0,ph:7.5,do:6.2}
};
let xp=0,day=47,lastFeed={1:0,2:0};
function sync(){
 const total=pools[1].bio+pools[2].bio;
 if($('xp'))$('xp').textContent=xp+' / 1000';
 renderUpgrades();
 renderMissions();
 if($('farmLevel'))$('farmLevel').textContent=String(1+Math.floor(xp/1000));
 if($('biomassValue'))$('biomassValue').textContent=total.toFixed(1)+' kg';
 for(const n of [1,2]){
  const p=pools[n];
  const bio=$('pool'+n+'Bio'); if(bio)bio.textContent=p.bio.toFixed(1)+' kg';
  const card=document.querySelector(`.game-pool[data-pool="${n}"]`); if(!card)continue;
  const stats=card.querySelector('.pool-stats');
  if(stats)stats.innerHTML=`<span>${gt('population')} <b>${p.pop.toLocaleString()}</b></span><span>${gt('biomass')} <b>${p.bio.toFixed(1)} kg</b></span><span>${gt('health')} <b>${p.health}%</b></span>`;
  const btn=card.querySelector('.feed-btn'); if(btn&&!btn.disabled)btn.textContent=gt('feed');
 }
 if($('cycleDay'))$('cycleDay').textContent=day;
 if($('cycleProgress'))$('cycleProgress').style.width=(day/150*100)+'%';
 const metrics=document.querySelector('.cycle-metrics');
 if(metrics)metrics.innerHTML=`<span>${gt('avg')} <b>${Math.round((pools[1].avg+pools[2].avg)/2)} g</b></span><span>${gt('survival')} <b>${Math.round((pools[1].survival+pools[2].survival)/2)}%</b></span><span>${gt('health')} <b>${Math.round((pools[1].health+pools[2].health)/2)}%</b></span>`;
}
function ensureEvents(){
 let panel=$('farmEvents');
 if(panel)return panel;
 const scene=document.querySelector('.game-scene'); if(!scene)return null;
 panel=document.createElement('div');panel.id='farmEvents';panel.className='farm-events';
 panel.innerHTML=`<div class="events-head"><b>${gt('events')}</b><span>● LIVE</span></div><div id="eventList"></div>`;
 scene.appendChild(panel);
 addEvent(gt('waterStable'),'SYSTEM',false);
 return panel;
}
function addEvent(message,tag='FARM',positive=true){
 const panel=ensureEvents();if(!panel)return;const list=$('eventList');if(!list)return;
 const row=document.createElement('div');row.className='farm-event';row.innerHTML=`<time>${new Date().toLocaleTimeString([],{hour12:false,hour:'2-digit',minute:'2-digit'})}</time><b>${tag}</b><span>${message}</span>`;list.prepend(row);
 while(list.children.length>4)list.lastElementChild.remove();
}
function feed(n){
 const now=Date.now(),cool=3500;
 if(now-lastFeed[n]<cool){toast(gt('cooldown'));return}
 lastFeed[n]=now;const p=pools[n];p.bio+=0.4;p.feed=Math.min(100,p.feed+7);p.health=Math.min(100,p.health+0.2);xp+=25;sync();
 const b=document.querySelector(`.feed-btn[data-feed="${n}"]`);if(b){b.disabled=true;b.textContent='✓ +25 XP';setTimeout(()=>{b.disabled=false;b.textContent=gt('feed')},1200);setTimeout(()=>sync(),1210)}
 addEvent(`${gt('fed')} • +0.4 kg • +25 XP`,'POOL #0'+n);
}
function inspect(n){
 const p=pools[n];let modal=$('poolInspect');
 if(!modal){modal=document.createElement('div');modal.id='poolInspect';modal.className='pool-modal';document.body.appendChild(modal)}
 modal.innerHTML=`<div class="pool-modal-card"><div class="pool-modal-head"><div><small>${gt('pool')}</small><h3>#0${n}</h3></div><button class="modal-close">×</button></div><div class="inspect-grid"><div><small>${gt('population')}</small><b>${p.pop.toLocaleString()}</b></div><div><small>${gt('biomass')}</small><b>${p.bio.toFixed(1)} kg</b></div><div><small>${gt('health')}</small><b>${p.health.toFixed(1)}%</b></div><div><small>FEED</small><b>${p.feed}%</b></div><div><small>${gt('temperature')}</small><b>${p.temp.toFixed(1)}°C</b></div><div><small>${gt('ph')}</small><b>${p.ph.toFixed(1)}</b></div><div><small>${gt('do')}</small><b>${p.do.toFixed(1)} mg/L</b></div><div><small>${gt('avg')}</small><b>${p.avg} g</b></div></div><button class="modal-action modal-feed" data-feed="${n}">${gt('feed')}</button></div>`;
 modal.classList.add('open');modal.querySelector('.modal-close').onclick=()=>modal.classList.remove('open');modal.onclick=e=>{if(e.target===modal)modal.classList.remove('open')};modal.querySelector('.modal-feed').onclick=()=>{feed(n);inspect(n)};
}

const upgrades={
 solar:{icon:'☀',name:'solar',desc:'solarDesc',base:50,max:5},
 battery:{icon:'🔋',name:'battery',desc:'batteryDesc',base:75,max:5},
 pools:{icon:'🦐',name:'poolModule',desc:'poolDesc',base:200,max:5},
 biofilter:{icon:'♻',name:'biofilterModule',desc:'biofilterDesc',base:250,max:5},
 automation:{icon:'🧠',name:'automationModule',desc:'automationDesc',base:300,max:5},
 drying:{icon:'♨',name:'dryingModule',desc:'dryingDesc',base:350,max:5},
 packing:{icon:'📦',name:'packingModule',desc:'packingDesc',base:400,max:5},
 drone:{icon:'🚁',name:'droneModule',desc:'droneDesc',base:500,max:5}
};
const upgradeLv={solar:0,battery:0,pools:0,biofilter:0,automation:0,drying:0,packing:0,drone:0};
function upgradeCost(k){return upgrades[k].base*(upgradeLv[k]+1)}
function renderUpgrades(){
 const grid=$('upgradeGrid'); if(!grid)return;
 const uh=$('upgradeHeader'); if(uh)uh.textContent=gt('upgrades');
 const ut=$('upgradeTree'); if(ut)ut.textContent=gt('tree');
 const un=$('upgradeNote'); if(un)un.textContent=gt('gameOnly');
 const ux=$('upgradeXp'); if(ux)ux.textContent=xp+' XP';
 grid.innerHTML=Object.entries(upgrades).map(([k,u])=>{
  const lv=upgradeLv[k],max=lv>=u.max,cost=upgradeCost(k),can=xp>=cost&&!max;
  return `<article class="upgrade-card ${max?'maxed':''}">
   <div class="upgrade-icon">${u.icon}</div><div class="upgrade-main"><b>${gt(u.name)}</b><small>${gt(u.desc)}</small>
   <div class="upgrade-meta"><span>${gt('level')} <strong>${lv}/${u.max}</strong></span><span>${max?gt('maxed'):gt('cost')+' '+cost+' XP'}</span></div>
   <div class="upgrade-bar"><i style="width:${lv/u.max*100}%"></i></div>
   <button class="upgrade-btn" data-upgrade="${k}" ${can?'':'disabled'}>${max?gt('maxed'):gt('upgrade')}</button>
   </div></article>`;
 }).join('');
}
function applyUpgradeEffect(k){
 const p1=pools[1],p2=pools[2];
 if(k==='solar') document.getElementById('energyValue').textContent=(42.7+upgradeLv[k]*3).toFixed(1)+' kWh';
 if(k==='battery') document.querySelector('.game-hud div:nth-child(4) b')?.replaceChildren(document.createTextNode('112 m³'));
 if(k==='pools'){p1.pop+=60;p2.pop+=60;p1.bio+=.2;p2.bio+=.2}
 if(k==='biofilter'){p1.health=Math.min(100,p1.health+1);p2.health=Math.min(100,p2.health+1)}
 if(k==='automation'){p1.feed=Math.min(100,p1.feed+2);p2.feed=Math.min(100,p2.feed+2)}
 sync();
}
function doUpgrade(k){
 const u=upgrades[k]; if(!u)return; const cost=upgradeCost(k);
 if(upgradeLv[k]>=u.max)return;
 if(xp<cost){toast(gt('notEnough'));return}
 xp-=cost; upgradeLv[k]++; applyUpgradeEffect(k); renderUpgrades(); addEvent(`${gt(u.name)} • ${gt('upgradeDone')} • LV ${upgradeLv[k]}`,'UPGRADE'); toast(`${gt(u.name)} • LV ${upgradeLv[k]}`);
}
function initUpgrades(){renderUpgrades()}
document.addEventListener('click',e=>{const u=e.target.closest('.upgrade-btn');if(u){doUpgrade(u.dataset.upgrade)}});
document.addEventListener('click',e=>{const f=e.target.closest('.feed-btn');if(f){e.stopPropagation();feed(+f.dataset.feed);return}const i=e.target.closest('.inspect-btn');if(i){inspect(+i.dataset.inspect);return}const pool=e.target.closest('.game-pool');if(pool&&!e.target.closest('button'))inspect(+pool.dataset.pool)});

const missionState={m1:0,m2:0,m3:0,m4:0};
const missionDefs=[
 {id:'m1',title:'mission1',desc:'mission1Desc',reward:50,req:2},
 {id:'m2',title:'mission2',desc:'mission2Desc',reward:75,req:40},
 {id:'m3',title:'mission3',desc:'mission3Desc',reward:100,req:1},
 {id:'m4',title:'mission4',desc:'mission4Desc',reward:150,req:1}
];
function missionProgress(m){
 if(m.id==='m1') return Math.min(2,(pools[1].feed>0?1:0)+(pools[2].feed>0?1:0));
 if(m.id==='m2') return Math.min(40,pools[1].bio+pools[2].bio);
 if(m.id==='m3') return (pools[1].health>=90&&pools[2].health>=90)?1:0;
 if(m.id==='m4') return Object.values(upgradeLv).some(v=>v>0)?1:0;
 return 0;
}
function renderMissions(){
 const list=$('missionList');if(!list)return;
 const mh=$('missionsHeader'),mt=$('missionsTitle'),mx=$('missionXp');
 if(mh)mh.textContent=gt('missions');if(mt)mt.textContent=gt('farmMissions');
 if(mx)mx.textContent='+'+missionDefs.reduce((s,m)=>s+(missionState[m.id]===2?m.reward:0),0)+' XP';
 list.innerHTML=missionDefs.map(m=>{
   const p=missionProgress(m),done=missionState[m.id]===2,ready=!done&&p>=m.req;
   const pct=Math.min(100,p/m.req*100);
   const value=m.id==='m2'?p.toFixed(1)+' / '+m.req+' kg':p+' / '+m.req;
   return `<article class="mission-card ${done?'claimed':''} ${ready?'ready':''}">
    <div class="mission-mark">${done?'✓':ready?'!':'○'}</div>
    <div class="mission-main"><b>${gt(m.title)}</b><small>${gt(m.desc)}</small>
      <div class="mission-progress"><span>${gt('progress')}</span><strong>${value}</strong></div>
      <div class="mission-bar"><i style="width:${pct}%"></i></div>
    </div>
    <button class="mission-claim" data-mission="${m.id}" ${ready?'':'disabled'}>${done?gt('claimed'):ready?gt('claim'):'+'+m.reward+' XP'}</button>
   </article>`;
 }).join('');
}
function claimMission(id){
 const m=missionDefs.find(x=>x.id===id);if(!m||missionState[id]===2||missionProgress(m)<m.req)return;
 const oldLevel=1+Math.floor(xp/1000);missionState[id]=2;xp+=m.reward;const newLevel=1+Math.floor(xp/1000);
 addEvent(`${gt(m.title)} • +${m.reward} XP`,'MISSION');
 if(newLevel>oldLevel){addEvent(gt('levelUp')+' • '+newLevel,'LEVEL');toast(gt('levelUp')+' '+newLevel)}
 renderMissions();sync();toast('+'+m.reward+' XP');
}
document.addEventListener('click',e=>{const b=e.target.closest('.mission-claim');if(b)claimMission(b.dataset.mission)});

function gameStart(){ensureEvents();initUpgrades();renderMissions();sync();setInterval(()=>{for(const n of [1,2]){const p=pools[n];p.bio+=0.03;p.feed=Math.max(0,p.feed-0.5);p.health=Math.max(80,Math.min(100,p.health+(p.feed>40?.03:-.08)));p.avg+=.02}if(day<150){day++;}sync();if(day%5===0)addEvent(`${gt('growthEvent')} 0.06 kg`,'GROWTH');},15000)}
document.addEventListener('DOMContentLoaded',gameStart);
})();