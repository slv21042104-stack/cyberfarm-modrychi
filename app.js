const tg = window.Telegram?.WebApp;

const S = {
  user: null,
  infrastructure: [],
  packages: [],
  lang: "en"
};


/* =========================================================
   TRANSLATIONS
========================================================= */

const L = {

  en: {
    intro:
      "A living digital model of a Ukrainian recirculating aquaculture farm. Grow Macrobrachium rosenbergii, turn every part of the harvest into value, and support resilient food production.",
    start: "START MISSION",
    note: "Digital simulation • real-world project development",

    title: "LIVING AQUAFARM",
    subtitle:
      "Energy, water, shrimp growth and processing as one connected system.",

    support: "YOUR SUPPORT",
    status: "FARM STATUS",

    digitalTwin: "DIGITAL TWIN // AQUACULTURE MISSION",

    farmOnline: "FARM SYSTEM ONLINE",
    liveProcess: "LIVE PROCESS",
    oneFlow: "ONE FARM • ONE FLOW",

    energy: "ENERGY",
    storage: "STORAGE",
    pools: "POOLS",
    filter: "FILTER",
    automation: "AUTOMATION",
    drying: "DRYING",
    packing: "PACKING",
    delivery: "DELIVERY",

    online: "ONLINE",
    rosenbergii: "ROSENBERGII",
    bioMech: "BIO + MECH",
    logoAuto: "LOGO! 8.3",
    freezeDry: "FREEZE-DRY",
    ready: "READY",
    upTo15kg: "UP TO 15 KG*",

    infrastructure: "INFRASTRUCTURE",
    systemModules: "SYSTEM MODULES",
    waterLab: "WATER LAB",
    waterQuality: "WATER QUALITY",
    live: "LIVE",

    circular: "CIRCULAR PROCESSING",
    zeroWaste: "ONE SHRIMP — ZERO WASTE",

    harvest: "HARVEST",
    shell: "SHELL",
    chitin: "CHITIN / MINERALS",
    frontline: "FRONTLINE NUTRITION",

    missionSupport: "MISSION SUPPORT",
    fundNext: "FUND THE NEXT MODULE",
    minContribution: "MIN $1 / ₴50",

    power: "POWER",
    auto: "AUTO",
    biofilter: "BIOFILTER",

    water: "WATER",
    optimal: "OPTIMAL",

    rasTwin: "RAS / LIVE DIGITAL TWIN",
    automatedFeeding: "automated feeding • water quality control",

    simulation:
      "Simulation values are illustrative. Product composition, processing yield, safety and regulatory status must be verified before real production.",

    build: "BUILD.",
    grow: "GROW.",
    protect: "PROTECT.",

    contributionSimulation: "simulation",

    minContributionMessage: "Minimum contribution: $1 / ₴50",
    apiError: "API error",
    user: "USER",

    statusActive: "ACTIVE",
    statusPlanned: "PLANNED",
    statusFunded: "FUNDED",
    statusInProgress: "IN PROGRESS"
  },


  uk: {
    intro:
      "Жива цифрова модель української рециркуляційної акваферми. Вирощуйте Macrobrachium rosenbergii, перетворюйте кожну частину врожаю на цінність та підтримуйте стійке виробництво продовольства.",
    start: "ПОЧАТИ МІСІЮ",
    note: "Цифрова симуляція • розвиток реального проєкту",

    title: "ЖИВА АКВАФЕРМА",
    subtitle:
      "Енергія, вода, ріст креветки та переробка як єдина система.",

    support: "ВАША ПІДТРИМКА",
    status: "СТАН ФЕРМИ",

    digitalTwin: "ЦИФРОВИЙ ДВІЙНИК // АКВАКУЛЬТУРНА МІСІЯ",

    farmOnline: "СИСТЕМА ФЕРМИ ОНЛАЙН",
    liveProcess: "ПРОЦЕС У РЕАЛЬНОМУ ЧАСІ",
    oneFlow: "ОДНА ФЕРМА • ОДИН ЦИКЛ",

    energy: "ЕНЕРГІЯ",
    storage: "НАКОПИЧЕННЯ",
    pools: "БАСЕЙНИ",
    filter: "ФІЛЬТР",
    automation: "АВТОМАТИКА",
    drying: "СУШІННЯ",
    packing: "ПАКУВАННЯ",
    delivery: "ДОСТАВКА",

    online: "ОНЛАЙН",
    rosenbergii: "ROSENBERGII",
    bioMech: "БІО + МЕХ",
    logoAuto: "LOGO! 8.3",
    freezeDry: "ЛІОФІЛІЗАЦІЯ",
    ready: "ГОТОВО",
    upTo15kg: "ДО 15 КГ*",

    infrastructure: "ІНФРАСТРУКТУРА",
    systemModules: "МОДУЛІ СИСТЕМИ",
    waterLab: "ВОДНА ЛАБОРАТОРІЯ",
    waterQuality: "ЯКІСТЬ ВОДИ",
    live: "ОНЛАЙН",

    circular: "ЦИКЛІЧНА ПЕРЕРОБКА",
    zeroWaste: "ОДНА КРЕВЕТКА — НУЛЬ ВІДХОДІВ",

    harvest: "ВИЛОВ",
    shell: "ПАНЦИР",
    chitin: "ХІТИН / МІНЕРАЛИ",
    frontline: "ХАРЧОВА ПІДТРИМКА",

    missionSupport: "ПІДТРИМКА МІСІЇ",
    fundNext: "ПРОФІНАНСУВАТИ НАСТУПНИЙ МОДУЛЬ",
    minContribution: "МІН. $1 / ₴50",

    power: "ПОТУЖНІСТЬ",
    auto: "АВТО",
    biofilter: "БІОФІЛЬТР",

    water: "ВОДА",
    optimal: "ОПТИМАЛЬНО",

    rasTwin: "УЗВ / ЖИВИЙ ЦИФРОВИЙ ДВІЙНИК",
    automatedFeeding:
      "автоматична годівля • контроль якості води",

    simulation:
      "Значення симуляції є ілюстративними. Склад продукту, вихід переробки, безпечність та регуляторний статус мають бути перевірені до початку реального виробництва.",

    build: "БУДУЙ.",
    grow: "ВИРОЩУЙ.",
    protect: "ЗАХИЩАЙ.",

    contributionSimulation: "симуляція",

    minContributionMessage: "Мінімальний внесок: $1 / ₴50",
    apiError: "Помилка API",
    user: "КОРИСТУВАЧ",

    statusActive: "АКТИВНИЙ",
    statusPlanned: "ЗАПЛАНОВАНО",
    statusFunded: "ПРОФІНАНСОВАНО",
    statusInProgress: "У РОБОТІ"
  },


  de: {
    intro:
      "Ein lebendiges digitales Modell einer ukrainischen Kreislauf-Aquakulturfarm. Züchte Macrobrachium rosenbergii, verwandle jeden Teil der Ernte in Wert und unterstütze eine resiliente Lebensmittelproduktion.",
    start: "MISSION STARTEN",
    note: "Digitale Simulation • reales Projekt",

    title: "LEBENDE AQUAFARM",
    subtitle:
      "Energie, Wasser, Garnelenwachstum und Verarbeitung als ein verbundenes System.",

    support: "DEINE UNTERSTÜTZUNG",
    status: "FARMSTATUS",

    digitalTwin: "DIGITALER ZWILLING // AQUAKULTUR-MISSION",

    farmOnline: "FARMSYSTEM ONLINE",
    liveProcess: "LIVE-PROZESS",
    oneFlow: "EINE FARM • EIN ABLAUF",

    energy: "ENERGIE",
    storage: "SPEICHER",
    pools: "BECKEN",
    filter: "FILTER",
    automation: "AUTOMATION",
    drying: "TROCKNUNG",
    packing: "VERPACKUNG",
    delivery: "LIEFERUNG",

    online: "ONLINE",
    rosenbergii: "ROSENBERGII",
    bioMech: "BIO + MECH",
    logoAuto: "LOGO! 8.3",
    freezeDry: "GEFRIERTROCKNUNG",
    ready: "BEREIT",
    upTo15kg: "BIS 15 KG*",

    infrastructure: "INFRASTRUKTUR",
    systemModules: "SYSTEMMODULE",
    waterLab: "WASSERLABOR",
    waterQuality: "WASSERQUALITÄT",
    live: "LIVE",

    circular: "KREISLAUFVERARBEITUNG",
    zeroWaste: "EINE GARNELE — NULL ABFALL",

    harvest: "ERNTE",
    shell: "PANZER",
    chitin: "CHITIN / MINERALIEN",
    frontline: "FRONTNAHRUNG",

    missionSupport: "MISSIONSUNTERSTÜTZUNG",
    fundNext: "NÄCHSTES MODUL FINANZIEREN",
    minContribution: "MIN. $1 / ₴50",

    power: "LEISTUNG",
    auto: "AUTO",
    biofilter: "BIOFILTER",

    water: "WASSER",
    optimal: "OPTIMAL",

    rasTwin: "RAS / LIVE-DIGITALER ZWILLING",
    automatedFeeding:
      "automatische Fütterung • Wasserqualitätskontrolle",

    simulation:
      "Simulationswerte dienen nur der Veranschaulichung. Produktzusammensetzung, Verarbeitungsausbeute, Sicherheit und regulatorischer Status müssen vor der realen Produktion überprüft werden.",

    build: "BUILD.",
    grow: "GROW.",
    protect: "PROTECT.",

    contributionSimulation: "Simulation",

    minContributionMessage: "Mindestbeitrag: $1 / ₴50",
    apiError: "API-Fehler",
    user: "BENUTZER",

    statusActive: "AKTIV",
    statusPlanned: "GEPLANT",
    statusFunded: "FINANZIERT",
    statusInProgress: "IN ARBEIT"
  },


  fr: {
    intro:
      "Un jumeau numérique vivant d'une ferme aquacole ukrainienne en système recirculé. Élevez Macrobrachium rosenbergii, transformez chaque partie de la récolte en valeur et soutenez une production alimentaire résiliente.",
    start: "DÉMARRER LA MISSION",
    note: "Simulation numérique • développement d'un projet réel",

    title: "AQUAFERME VIVANTE",
    subtitle:
      "Énergie, eau, croissance des crevettes et transformation dans un même système.",

    support: "VOTRE SOUTIEN",
    status: "ÉTAT DE LA FERME",

    digitalTwin: "JUMEAU NUMÉRIQUE // MISSION AQUACOLE",

    farmOnline: "SYSTÈME DE FERME EN LIGNE",
    liveProcess: "PROCESSUS EN DIRECT",
    oneFlow: "UNE FERME • UN FLUX",

    energy: "ÉNERGIE",
    storage: "STOCKAGE",
    pools: "BASSINS",
    filter: "FILTRE",
    automation: "AUTOMATISATION",
    drying: "SÉCHAGE",
    packing: "EMBALLAGE",
    delivery: "LIVRAISON",

    online: "EN LIGNE",
    rosenbergii: "ROSENBERGII",
    bioMech: "BIO + MÉCA",
    logoAuto: "LOGO! 8.3",
    freezeDry: "LYOPHILISATION",
    ready: "PRÊT",
    upTo15kg: "JUSQU'À 15 KG*",

    infrastructure: "INFRASTRUCTURE",
    systemModules: "MODULES DU SYSTÈME",
    waterLab: "LABORATOIRE DE L'EAU",
    waterQuality: "QUALITÉ DE L'EAU",
    live: "EN DIRECT",

    circular: "TRANSFORMATION CIRCULAIRE",
    zeroWaste: "UNE CREVETTE — ZÉRO DÉCHET",

    harvest: "RÉCOLTE",
    shell: "CARAPACE",
    chitin: "CHITINE / MINÉRAUX",
    frontline: "NUTRITION TERRAIN",

    missionSupport: "SOUTIEN DE LA MISSION",
    fundNext: "FINANCER LE PROCHAIN MODULE",
    minContribution: "MIN. $1 / ₴50",

    power: "PUISSANCE",
    auto: "AUTO",
    biofilter: "BIOFILTRE",

    water: "EAU",
    optimal: "OPTIMAL",

    rasTwin: "RAS / JUMEAU NUMÉRIQUE EN DIRECT",
    automatedFeeding:
      "alimentation automatique • contrôle de la qualité de l'eau",

    simulation:
      "Les valeurs de simulation sont illustratives. La composition du produit, le rendement de transformation, la sécurité et le statut réglementaire doivent être vérifiés avant toute production réelle.",

    build: "BUILD.",
    grow: "GROW.",
    protect: "PROTECT.",

    contributionSimulation: "simulation",

    minContributionMessage: "Contribution minimale : $1 / ₴50",
    apiError: "Erreur API",
    user: "UTILISATEUR",

    statusActive: "ACTIF",
    statusPlanned: "PLANIFIÉ",
    statusFunded: "FINANCÉ",
    statusInProgress: "EN COURS"
  },


  ja: {
    intro:
      "ウクライナの循環式養殖場を再現するデジタルツイン。Macrobrachium rosenbergiiを育て、収穫物のすべての部分から価値を生み出し、持続可能な食料生産を支援します。",
    start: "ミッション開始",
    note: "デジタルシミュレーション • 実プロジェクト",

    title: "ライブ・アクアファーム",
    subtitle:
      "エネルギー、水、エビの成長、加工をひとつのシステムで管理します。",

    support: "あなたの支援",
    status: "ファーム状態",

    digitalTwin: "デジタルツイン // 養殖ミッション",

    farmOnline: "ファームシステム ONLINE",
    liveProcess: "ライブプロセス",
    oneFlow: "ひとつの農場 • ひとつの流れ",

    energy: "エネルギー",
    storage: "蓄電",
    pools: "養殖池",
    filter: "ろ過",
    automation: "自動制御",
    drying: "乾燥",
    packing: "包装",
    delivery: "配送",

    online: "ONLINE",
    rosenbergii: "ROSENBERGII",
    bioMech: "BIO + MECH",
    logoAuto: "LOGO! 8.3",
    freezeDry: "フリーズドライ",
    ready: "READY",
    upTo15kg: "最大15 KG*",

    infrastructure: "インフラ",
    systemModules: "システムモジュール",
    waterLab: "ウォーターラボ",
    waterQuality: "水質",
    live: "LIVE",

    circular: "循環型加工",
    zeroWaste: "1匹のエビ — ゼロウェイスト",

    harvest: "収穫",
    shell: "殻",
    chitin: "キチン / ミネラル",
    frontline: "フロントライン栄養",

    missionSupport: "ミッション支援",
    fundNext: "次のモジュールを支援",
    minContribution: "最低 $1 / ₴50",

    power: "電力",
    auto: "AUTO",
    biofilter: "バイオフィルター",

    water: "水",
    optimal: "最適",

    rasTwin: "RAS / ライブデジタルツイン",
    automatedFeeding:
      "自動給餌 • 水質モニタリング",

    simulation:
      "シミュレーション値は説明用です。製品組成、加工歩留まり、安全性、規制上の位置付けは実際の生産前に検証する必要があります。",

    build: "BUILD.",
    grow: "GROW.",
    protect: "PROTECT.",

    contributionSimulation: "シミュレーション",

    minContributionMessage: "最低支援額: $1 / ₴50",
    apiError: "APIエラー",
    user: "USER",

    statusActive: "ACTIVE",
    statusPlanned: "PLANNED",
    statusFunded: "FUNDED",
    statusInProgress: "進行中"
  },


  zh: {
    intro:
      "乌克兰循环水养殖农场的动态数字孪生。养殖罗氏沼虾，将收获物的每一部分转化为价值，并支持具有韧性的食品生产。",
    start: "开始任务",
    note: "数字模拟 • 真实项目开发",

    title: "活体水产农场",
    subtitle:
      "能源、水、虾类生长与加工由一个完整系统连接。",

    support: "您的支持",
    status: "农场状态",

    digitalTwin: "数字孪生 // 水产养殖任务",

    farmOnline: "农场系统在线",
    liveProcess: "实时流程",
    oneFlow: "一个农场 • 一个流程",

    energy: "能源",
    storage: "储能",
    pools: "养殖池",
    filter: "过滤",
    automation: "自动化",
    drying: "干燥",
    packing: "包装",
    delivery: "配送",

    online: "在线",
    rosenbergii: "ROSENBERGII",
    bioMech: "生物 + 机械",
    logoAuto: "LOGO! 8.3",
    freezeDry: "冻干",
    ready: "就绪",
    upTo15kg: "最高 15 KG*",

    infrastructure: "基础设施",
    systemModules: "系统模块",
    waterLab: "水质实验室",
    waterQuality: "水质",
    live: "实时",

    circular: "循环加工",
    zeroWaste: "一只虾 — 零废弃",

    harvest: "收获",
    shell: "虾壳",
    chitin: "甲壳素 / 矿物质",
    frontline: "前线营养支持",

    missionSupport: "任务支持",
    fundNext: "支持下一个模块",
    minContribution: "最低 $1 / ₴50",

    power: "功率",
    auto: "自动",
    biofilter: "生物过滤器",

    water: "水",
    optimal: "最佳",

    rasTwin: "RAS / 实时数字孪生",
    automatedFeeding:
      "自动喂料 • 水质控制",

    simulation:
      "模拟数据仅用于展示。产品成分、加工产率、安全性和监管状态必须在实际生产前进行验证。",

    build: "BUILD.",
    grow: "GROW.",
    protect: "PROTECT.",

    contributionSimulation: "模拟",

    minContributionMessage: "最低支持金额：$1 / ₴50",
    apiError: "API错误",
    user: "用户",

    statusActive: "运行中",
    statusPlanned: "计划中",
    statusFunded: "已资助",
    statusInProgress: "进行中"
  }

};


/* =========================================================
   LANGUAGE LIST
========================================================= */

const langs = [
  ["en", "EN", "English"],
  ["uk", "UA", "Українська"],
  ["de", "DE", "Deutsch"],
  ["fr", "FR", "Français"],
  ["zh", "中文", "中文"],
  ["ja", "日本語", "日本語"]
];


/* =========================================================
   WATER LAB
========================================================= */

const W = [
  ["TEMP", "28.0", "°C"],
  ["pH", "7.5", ""],
  ["DO", "6.2", "mg/L"],
  ["TAN", "0.08", "mg/L"],
  ["NH₃-N", "0.01", "mg/L"],
  ["NO₂-N", "0.05", "mg/L"],
  ["NO₃-N", "4.2", "mg/L"],
  ["ALK", "60", "mg/L"],
  ["HARD", "90", "mg/L"],
  ["ORP", "245", "mV"],
  ["TDS", "420", "mg/L"],
  ["CO₂", "7.0", "mg/L"],
  ["Ca", "38", "mg/L"],
  ["Mg", "14", "mg/L"],
  ["K", "6.2", "mg/L"],
  ["PO₄", "0.12", "mg/L"],
  ["Cu", "0.01", "mg/L"],
  ["Zn", "0.02", "mg/L"]
];


/* =========================================================
   HELPERS
========================================================= */

function detect(){

  let k =
    (
      tg?.initDataUnsafe?.user?.language_code ||
      navigator.language ||
      "en"
    )
    .slice(0,2)
    .toLowerCase();

  return L[k] ? k : "en";
}


function t(key){

  return (
    L[S.lang]?.[key] ||
    L.en[key] ||
    key
  );
}


function initData(){

  return tg?.initData || "";
}


function esc(v){

  return String(v ?? "")
    .replaceAll("&","&amp;")
    .replaceAll("<","&lt;")
    .replaceAll(">","&gt;")
    .replaceAll('"',"&quot;")
    .replaceAll("'","&#039;");
}


function num(v){

  return Number(v || 0)
    .toLocaleString(
      undefined,
      {maximumFractionDigits:2}
    );
}


/* =========================================================
   API
========================================================= */

async function api(url,opt={}){

  const h = {
    "Content-Type":"application/json",
    "X-Telegram-Init-Data":initData(),
    ...(opt.headers || {})
  };

  const r = await fetch(
    url,
    {
      ...opt,
      headers:h
    }
  );

  if(!r.ok){

    const e =
      await r.json()
        .catch(() => ({}));

    throw Error(
      e.detail ||
      t("apiError")
    );
  }

  return r.json();
}


/* =========================================================
   LANGUAGE PANEL
========================================================= */

function languagePanel(){

  document.getElementById("langs").innerHTML =
    langs.map(x => `
      <button data-l="${x[0]}">
        <b>${x[1]}</b>
        <small>${x[2]}</small>
      </button>
    `).join("");

  document
    .querySelectorAll("#langs button")
    .forEach(b => {

      b.onclick = () => {

        S.lang = b.dataset.l;

        apply();

        document
          .getElementById("langs")
          .classList
          .remove("open");
      };

    });
}


/* =========================================================
   STATIC UI LOCALIZATION
========================================================= */

function localizeStatic(){

  const map = {

    ".copy label":"digitalTwin",

    ".flow span:nth-child(1)":"energy",
    ".flow span:nth-child(2)":"storage",

    ".pipeline label":"liveProcess",
    ".pipeline h3":"oneFlow",

    ".nodes span:nth-child(1) b":"energy",
    ".nodes span:nth-child(2) b":"storage",
    ".nodes span:nth-child(3) b":"pools",
    ".nodes span:nth-child(4) b":"filter",
    ".nodes span:nth-child(5) b":"automation",
    ".nodes span:nth-child(6) b":"drying",
    ".nodes span:nth-child(7) b":"packing",
    ".nodes span:nth-child(8) b":"delivery",

    ".nodes span:nth-child(1) small":"online",
    ".nodes span:nth-child(3) small":"rosenbergii",
    ".nodes span:nth-child(4) small":"bioMech",
    ".nodes span:nth-child(5) small":"logoAuto",
    ".nodes span:nth-child(6) small":"freezeDry",
    ".nodes span:nth-child(7) small":"ready",
    ".nodes span:nth-child(8) small":"upTo15kg",

    ".scene-title label":"rasTwin",
    ".scene-title small":"automatedFeeding",

    ".plant b:nth-child(1)":"power",
    ".plant b:nth-child(2)":"logoAuto",
    ".plant b:nth-child(3)":"biofilter",

    ".h1 small":"water",
    ".h2 small":"optimal",

    ".cols section:nth-child(1) header label":"infrastructure",
    ".cols section:nth-child(1) header h3":"systemModules",

    ".cols section:nth-child(2) header label":"waterLab",
    ".cols section:nth-child(2) header h3":"waterQuality",
    ".cols section:nth-child(2) .live":"live",

    ".zero header label":"circular",
    ".zero header h3":"zeroWaste",

    ".waste span:nth-of-type(1) b":"harvest",
    ".waste span:nth-of-type(2) b":"freezeDry",
    ".waste span:nth-of-type(3) b":"shell",
    ".waste span:nth-of-type(4) b":"chitin",
    ".waste span:nth-of-type(5) b":"frontline",

    ".supportbox header label":"missionSupport",
    ".supportbox header h3":"fundNext",
    ".supportbox header>b":"minContribution"

  };

  Object.entries(map).forEach(([selector,key]) => {

    const elements =
      document.querySelectorAll(selector);

    elements.forEach(el => {

      /*
        Preserve special formatting for POWER,
        LOGO and BIOFILTER blocks.
      */

      if(
        selector === ".plant b:nth-child(1)" &&
        el.innerHTML.includes("<br>")
      ){

        el.innerHTML =
          `${t("power")}<br>72%`;

        return;
      }

      if(
        selector === ".plant b:nth-child(2)"
      ){

        el.innerHTML =
          `LOGO! 8.3<br><em>● ${t("auto")}</em>`;

        return;
      }

      if(
        selector === ".plant b:nth-child(3)"
      ){

        el.innerHTML =
          `${t("biofilter")}<br><em>ONLINE</em>`;

        return;
      }

      el.textContent = t(key);

    });

  });


  /*
    Intro BUILD / GROW / PROTECT
    are deliberately kept as universal
    international branding.
  */

}


/* =========================================================
   APPLY LANGUAGE
========================================================= */

function apply(){

  document
    .querySelectorAll("[data-i]")
    .forEach(e => {

      e.textContent =
        t(e.dataset.i);

    });


  document
    .getElementById("lang")
    .textContent =
      langs.find(
        x => x[0] === S.lang
      )[1];


  document
    .getElementById("flang")
    .textContent =
      langs.find(
        x => x[0] === S.lang
      )[1];


  languagePanel();

  localizeStatic();

  document.documentElement.lang =
    S.lang;
}


/* =========================================================
   FARM PERCENTAGE
========================================================= */

function pct(m){

  const a =
    +m.total_funding_required_usd;

  return a
    ? Math.min(
        100,
        +m.current_funding_usd / a * 100
      )
    : 0;
}


function farmPct(){

  const r =
    S.infrastructure.reduce(
      (a,m) =>
        a + +m.total_funding_required_usd,
      0
    );

  const c =
    S.infrastructure.reduce(
      (a,m) =>
        a + +m.current_funding_usd,
      0
    );

  return r
    ? Math.round(c / r * 100)
    : 0;
}


/* =========================================================
   ICONS
========================================================= */

function icon(z){

  return (
    z === "energy"
      ? "☀"
      : z === "pools"
        ? "🦐"
        : z === "filtration"
          ? "♻"
          : "📦"
  );

}


/* =========================================================
   MODULES
========================================================= */

function translateStatus(status){

  if(!status) return "";

  const s =
    String(status)
      .toLowerCase()
      .trim();

  if(s === "active")
    return t("statusActive");

  if(s === "planned")
    return t("statusPlanned");

  if(s === "funded")
    return t("statusFunded");

  if(
    s === "in progress" ||
    s === "in_progress"
  )
    return t("statusInProgress");

  return status;
}


function renderModules(){

  const c =
    document.getElementById("modules");

  c.innerHTML = "";

  document.getElementById("count")
    .textContent =
      S.infrastructure.length;

  S.infrastructure.forEach(m => {

    const p = pct(m);

    const d =
      document.createElement("div");

    d.className = "module";

    d.innerHTML = `
      <span>${icon(m.zone)}</span>

      <div>
        <b>${esc(m.module_name)}</b>

        <small>
          ${esc(String(m.zone || "").toUpperCase())}
          •
          $${num(m.current_funding_usd)}
          /
          $${num(m.total_funding_required_usd)}
        </small>

        <i>
          <em style="width:${p}%"></em>
        </i>
      </div>

      <label>
        ${esc(translateStatus(m.status))}
      </label>
    `;

    c.appendChild(d);

  });

}


/* =========================================================
   SUPPORT PACKAGES
========================================================= */

function renderPackages(){

  const c =
    document.getElementById("packages");

  c.innerHTML =
    S.packages.map(p => `
      <div class="pack">

        <div>
          <b>${esc(p.name)}</b>

          <small>
            ${esc(p.description)}
          </small>
        </div>

        <strong>
          ₴${num(p.price_uah)}
          /
          $${num(p.price_usdt)}
        </strong>

        <button data-p="${p.id}">
          +
        </button>

      </div>
    `).join("");


  c.querySelectorAll("[data-p]")
    .forEach(b => {

      b.onclick = () =>
        payPackage(
          +b.dataset.p
        );

    });

}


/* =========================================================
   WATER LAB
========================================================= */

function renderWater(){

  document.getElementById("water").innerHTML =
    W.map(x => `
      <div>
        <span>${x[0]}</span>
        <b>${x[1]}</b>
        <small>${x[2]}</small>
        <i></i>
      </div>
    `).join("");

}


/* =========================================================
   CONTRIBUTIONS
========================================================= */

async function contribution(a){

  if(a < 1){

    return toast(
      t("minContributionMessage")
    );

  }


  try{

    const r =
      await api(
        "/api/payments/create",
        {
          method:"POST",
          body:JSON.stringify({
            amount:a,
            currency:"USDT",
            purpose:"Farm contribution"
          })
        }
      );


    toast(
      `$${a} • ${r.status} • ${t("contributionSimulation")}`
    );

  }catch(e){

    toast(e.message);

  }

}


/* =========================================================
   SUPPORT PACKAGE PAYMENT
========================================================= */

async function payPackage(id){

  const p =
    S.packages.find(
      x => x.id === id
    );

  if(!p) return;


  try{

    const r =
      await api(
        "/api/payments/create",
        {
          method:"POST",
          body:JSON.stringify({
            amount:p.price_usdt,
            currency:"USDT",
            purpose:p.name
          })
        }
      );


    toast(
      `${r.status} • ${t("contributionSimulation")}`
    );

  }catch(e){

    toast(e.message);

  }

}


/* =========================================================
   TOAST
========================================================= */

function toast(m){

  const x =
    document.getElementById("toast");

  x.textContent = m;

  x.className = "show";

  clearTimeout(window.tt);

  window.tt =
    setTimeout(
      () => {
        x.className = "";
      },
      4000
    );

}


/* =========================================================
   CLOCK
========================================================= */

function updateClock(){

  const clock =
    document.getElementById("clock");

  if(!clock) return;

  clock.textContent =
    new Date().toLocaleTimeString(
      [],
      {
        hour12:false
      }
    );

}


/* =========================================================
   START MISSION
========================================================= */

function setupStart(){

  const start =
    document.getElementById("start");

  if(!start) return;

  start.onclick = () => {

    document
      .getElementById("intro")
      .classList
      .add("out");

    setTimeout(() => {

      document
        .getElementById("intro")
        .classList
        .add("hidden");

      document
        .getElementById("farm")
        .classList
        .remove("hidden");

    },600);

  };

}


/* =========================================================
   LANGUAGE BUTTONS
========================================================= */

function setupLanguageButtons(){

  const lang =
    document.getElementById("lang");

  const flang =
    document.getElementById("flang");

  const panel =
    document.getElementById("langs");


  if(lang){

    lang.onclick = () =>
      panel.classList.toggle("open");

  }


  if(flang){

    flang.onclick = () =>
      panel.classList.toggle("open");

  }

}


/* =========================================================
   CONTRIBUTION BUTTONS
========================================================= */

function setupContributions(){

  document
    .querySelectorAll("[data-a]")
    .forEach(b => {

      b.onclick = () =>
        contribution(
          +b.dataset.a
        );

    });

}


/* =========================================================
   TELEGRAM
========================================================= */

function setupTelegram(){

  if(!tg) return;

  tg.ready();

  tg.expand();

  tg.setHeaderColor?.("#03111c");

  tg.setBackgroundColor?.("#03111c");

}


/* =========================================================
   BOOT
========================================================= */

async function boot(){

  setupTelegram();

  S.lang = detect();

  apply();

  renderWater();

  updateClock();

  setInterval(
    updateClock,
    1000
  );

  setupLanguageButtons();

  setupStart();

  setupContributions();


  try{

    /*
      Telegram authentication.
      The existing working backend
      and initData mechanism are preserved.
    */

    S.user =
      await api(
        "/api/auth",
        {
          method:"POST"
        }
      );


    S.infrastructure =
      await api(
        "/api/infrastructure"
      );


    S.packages =
      await api(
        "/api/support-packages"
      );


    document.getElementById("user")
      .textContent =
        S.user.username
          ? "@" + S.user.username
          : `${t("user")} ${S.user.telegram_id}`;


    document.getElementById("balance")
      .textContent =
        "$" +
        num(
          S.user.balance_crypto
        );


    document.getElementById("farmStatus")
      .textContent =
        farmPct() + "%";


    renderModules();

    renderPackages();

    /*
      Re-apply language after backend
      content has appeared.
    */

    apply();


  }catch(e){

    toast(e.message);

  }

}


boot();
