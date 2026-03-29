var password = "what is the answer to the ultimate question of life, the universe, and everything";
var linkedin = "https://www.linkedin.com/in/pepearayao/";
var github = "https://github.com/pepearayao/";
var email = 'mailto:hola@pepearayao.com';
var rondia_url = "https://www.rondia.app";
var entremed_url = "https://entremed.io";

// Current language — default English
var currentLang = "en";

// ==================== ENGLISH ====================

var en = {};

en.whois = [
  "<br>",
  "Hey there, I'm Pepe!",
  "I'm a Tradecraft Engineering Manager leading the Data Acquisition Team",
  "at Maltego Technologies GmbH in Munich, Germany, where I build and manage",
  "teams that reverse-engineer undocumented APIs, develop large-scale data",
  "pipelines, and deliver OSINT intelligence capabilities for investigative",
  "professionals worldwide.",
  "<br>",
  "With 12+ years of experience spanning embedded systems, data engineering,",
  "product management, and founding startups, I bring a unique blend of deep",
  "technical expertise and business acumen. As a founder and former CEO, I've",
  "scaled products and teams, secured investment, and grew user bases by 60X",
  "through data-driven strategies and relentless execution.",
  "<br>",
  "Outside of Maltego, I build and operate my own products:",
  '<a href="' + rondia_url + '" target="_blank">Rondia</a> \u2014 a shift management and financial reconciliation platform',
  "for the Chilean hospitality industry.",
  '<a href="' + entremed_url + '" target="_blank">EntreMed</a> \u2014 a healthcare job aggregation system that scrapes, classifies,',
  "and distributes job listings to thousands of medical professionals via WhatsApp.",
  "Scraper Engine \u2014 a production-grade web scraping orchestration engine",
  "for private clients.",
  "<br>",
  "Always interested in connecting with fellow builders, Python developers,",
  "data professionals, and OSINT enthusiasts. Feel free to reach out!",
  "<br>"
];

en.whoami = [
  "<br>",
  "Sorry I don't even know what I had for breakfast. These philosophical questions",
  "can be answered elsewhere. Maybe ask ChatGPT?",
  "<br>"
];

en.social = [
  "<br>",
  'linkedin       <a href="' + linkedin + '" target="_blank">linkedin/pepearayao</a>',
  'github         <a href="' + github + '" target="_blank">github/pepearayao</a>',
  "<br>"
];

en.secret = [
  "<br>",
  '<span class="command">sudo</span>           Only use if you\'re admin',
  "<br>"
];

en.projects = [
  "<br>",
  '<span class="command">Current Role:</span>',
  "Tradecraft Engineering Manager @ Maltego Technologies (Jan 2026 - Present)",
  "- Leading the newly formed Data Acquisition Team",
  "- Managing engineers who reverse-engineer APIs of major platforms",
  "- Architecting large-scale data pipelines for OSINT intelligence",
  "- Driving tradecraft strategy for investigative data collection",
  "<br>",
  '<span class="command">Previous Role:</span>',
  "Python Developer @ Maltego Technologies (Jul 2024 - Dec 2025)",
  "- Reverse-engineered APIs of major social media platforms",
  "- Enhanced data intelligence capabilities through advanced scraping",
  "- Built automated test coverage and data pipeline optimizations",
  "<br>",
  '<span class="command">Personal Projects:</span>',
  "<br>",
  'Rondia \u2014 Shift Management & Financial Reconciliation \u2014 <a href="' + rondia_url + '" target="_blank">rondia.app</a>',
  "- Full-stack platform for Chilean hospitality industry",
  "- Django + React with HMAC-sealed audit trails and e-signatures",
  "- Automated shift workflows: request \u2192 approval \u2192 signing \u2192 payment",
  "- Weekly financial close with tamper-proof sealed records",
  "- Used by hotel chains in Chile with multi-branch support",
  "<br>",
  "Scraper Engine \u2014 Web Scraping Orchestration Platform",
  "- YAML-based scraping platform for private clients",
  "- Dual engines: HTTP (curl-cffi) + Browser (Playwright)",
  "- Built-in proxy rotation, rate limiting, and circuit breakers",
  "- Real-time observability dashboard with incident detection",
  "- Celery workers, S3 artifact storage, and cron scheduling",
  "<br>",
  'EntreMed \u2014 Healthcare Job Aggregation System \u2014 <a href="' + entremed_url + '" target="_blank">entremed.io</a>',
  "- Distributed scraping system targeting 7+ Chilean job portals",
  "- 13 Scrapy spiders with intelligent job classification pipeline",
  "- Automated WhatsApp distribution to thousands of medical professionals",
  "- Microservices architecture: scraper, classifier, API, and watchdog",
  "<br>",
  '<span class="command">Previous Ventures:</span>',
  "<br>",
  "sqrpop (Co-Founder, 2023-2024)",
  "- AI matching platform for hospitals and nurses",
  "- Won \u20AC25K grant from the state of Bavaria (AI+ Munich)",
  "<br>",
  "Medinet (CEO & Co-founder, 2019-2023)",
  "- Built from idea to product-market fit, grew user base 5X",
  "- Secured investment for expansion in Mexico and Europe",
  "<br>"
];

en.skills = [
  "<br>",
  '<span class="command">Web Scraping & Data Acquisition:</span>',
  "\u2022 Advanced webscraping (Scrapy, Playwright, Puppeteer, Selenium)",
  "\u2022 Reverse engineering undocumented APIs",
  "\u2022 OSINT data collection and intelligence analysis",
  "\u2022 Proxy rotation, rate limiting, and anti-detection",
  "\u2022 Large-scale data processing (2M+ records)",
  "<br>",
  '<span class="command">Backend & Infrastructure:</span>',
  "Python | Django | Django Ninja | FastAPI | Celery",
  "PostgreSQL | Redis | Docker Swarm | Traefik",
  "S3/MinIO | GitHub Actions CI/CD | Sentry",
  "<br>",
  '<span class="command">Frontend:</span>',
  "React | TypeScript | Vite | Tailwind CSS",
  "<br>",
  '<span class="command">Architecture & Systems:</span>',
  "\u2022 Microservices design and orchestration",
  "\u2022 HMAC-sealed audit trails and e-signature workflows",
  "\u2022 State machines for complex business logic",
  "\u2022 YAML-driven declarative configuration systems",
  "\u2022 Real-time observability and incident detection",
  "<br>",
  '<span class="command">Engineering Management:</span>',
  "Team Leadership | Tradecraft Strategy | Technical Hiring",
  "Sprint Planning | Code Review | Mentoring",
  "<br>",
  '<span class="command">Business & Founder Skills:</span>',
  "Product Strategy | Marketing | Sales | Fundraising",
  "Go-to-Market | Business Development",
  "<br>",
  '<span class="command">Languages:</span>',
  "Spanish (Native) | English (Native) | German (Limited Working)",
  "<br>",
  '<span class="command">Education:</span>',
  "Universidad T\u00E9cnica Federico Santa Mar\u00EDa",
  "Electronics Engineering, Computer Science (2008-2013)",
  "<br>",
  "Le Wagon - Data Science Bootcamp (Certified)",
  "<br>"
];

en.help = [
  "<br>",
  '<span class="command">whois</span>          Who is Pepe?',
  '<span class="command">whoami</span>         Does anyone really knows?',
  '<span class="command">social</span>         Display social networks',
  '<span class="command">secret</span>         Find the easteregg',
  '<span class="command">projects</span>       View coding projects',
  '<span class="command">skills</span>         View technical skills and expertise',
  '<span class="command">resume</span>         Download my resume',
  '<span class="command">history</span>        View command history',
  '<span class="command">help</span>           You obviously already know what this does',
  '<span class="command">email</span>          Do not email me with BS please',
  '<span class="command">lang</span>           Switch language (lang en / lang es / lang de)',
  '<span class="command">clear</span>          Clear terminal',
  '<span class="command">banner</span>         Display the header',
  "<br>",
];

en.banner = [
  '<span class="index">Jose(Pepe) Araya personal website. Welcome.</span>',
  "<span class=\"color2 small-print\">Website design based on FKCodes</span>",
  '<br>',
  " \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588  \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588 \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588  \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588      \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588   \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588     \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588   \u2588\u2588\u2588\u2588\u2588 \u2588\u2588\u2588\u2588\u2588   \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588",
  " \u2591\u2588\u2588\u2588\u2591\u2591\u2591\u2591\u2591\u2588\u2588\u2588\u2591\u2591\u2588\u2588\u2588\u2591\u2591\u2591\u2591\u2591\u2588\u2591\u2591\u2588\u2588\u2588\u2591\u2591\u2591\u2591\u2591\u2588\u2588\u2588\u2591\u2591\u2588\u2588\u2588\u2591\u2591\u2591\u2591\u2591\u2588     \u2588\u2588\u2588\u2591\u2591\u2591\u2591\u2591\u2588\u2588\u2588 \u2591\u2591\u2588\u2588\u2588\u2591\u2591\u2591\u2591\u2591\u2588\u2588\u2588   \u2588\u2588\u2588\u2591\u2591\u2591\u2591\u2591\u2588\u2588\u2588 \u2591\u2591\u2588\u2588\u2588 \u2591\u2591\u2588\u2588\u2588   \u2588\u2588\u2588\u2591\u2591\u2591\u2591\u2591\u2588\u2588\u2588",
  " \u2591\u2588\u2588\u2588    \u2591\u2588\u2588\u2588 \u2591\u2588\u2588\u2588  \u2588 \u2591  \u2591\u2588\u2588\u2588    \u2591\u2588\u2588\u2588 \u2591\u2588\u2588\u2588  \u2588 \u2591     \u2591\u2588\u2588\u2588    \u2591\u2588\u2588\u2588  \u2591\u2588\u2588\u2588    \u2591\u2588\u2588\u2588  \u2591\u2588\u2588\u2588    \u2591\u2588\u2588\u2588  \u2591\u2591\u2588\u2588\u2588 \u2588\u2588\u2588   \u2591\u2588\u2588\u2588    \u2591\u2588\u2588\u2588",
  " \u2591\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588  \u2591\u2588\u2588\u2588\u2588\u2588\u2588    \u2591\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588  \u2591\u2588\u2588\u2588\u2588\u2588\u2588       \u2591\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588  \u2591\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588   \u2591\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588   \u2591\u2591\u2588\u2588\u2588\u2588\u2588    \u2591\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588",
  " \u2591\u2588\u2588\u2588\u2591\u2591\u2591\u2591\u2591\u2591   \u2591\u2588\u2588\u2588\u2591\u2591\u2588    \u2591\u2588\u2588\u2588\u2591\u2591\u2591\u2591\u2591\u2591   \u2591\u2588\u2588\u2588\u2591\u2591\u2588       \u2591\u2588\u2588\u2588\u2591\u2591\u2591\u2591\u2591\u2588\u2588\u2588  \u2591\u2588\u2588\u2588\u2591\u2591\u2591\u2591\u2591\u2588\u2588\u2588  \u2591\u2588\u2588\u2588\u2591\u2591\u2591\u2591\u2591\u2588\u2588\u2588    \u2591\u2591\u2588\u2588\u2588     \u2591\u2588\u2588\u2588\u2591\u2591\u2591\u2591\u2591\u2588\u2588\u2588",
  " \u2591\u2588\u2588\u2588         \u2591\u2588\u2588\u2588 \u2591   \u2588 \u2591\u2588\u2588\u2588         \u2591\u2588\u2588\u2588 \u2591   \u2588    \u2591\u2588\u2588\u2588    \u2591\u2588\u2588\u2588  \u2591\u2588\u2588\u2588    \u2591\u2588\u2588\u2588  \u2591\u2588\u2588\u2588    \u2591\u2588\u2588\u2588     \u2591\u2588\u2588\u2588     \u2591\u2588\u2588\u2588    \u2591\u2588\u2588\u2588 ",
  " \u2588\u2588\u2588\u2588\u2588        \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588 \u2588\u2588\u2588\u2588\u2588        \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588    \u2588\u2588\u2588\u2588\u2588   \u2588\u2588\u2588\u2588\u2588 \u2588\u2588\u2588\u2588\u2588   \u2588\u2588\u2588\u2588\u2588 \u2588\u2588\u2588\u2588\u2588   \u2588\u2588\u2588\u2588\u2588    \u2588\u2588\u2588\u2588\u2588    \u2588\u2588\u2588\u2588\u2588   \u2588\u2588\u2588\u2588\u2588 ",
  " \u2591\u2591\u2591\u2591\u2591        \u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591 \u2591\u2591\u2591\u2591\u2591        \u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591    \u2591\u2591\u2591\u2591\u2591   \u2591\u2591\u2591\u2591\u2591 \u2591\u2591\u2591\u2591\u2591   \u2591\u2591\u2591\u2591\u2591 \u2591\u2591\u2591\u2591\u2591   \u2591\u2591\u2591\u2591\u2591    \u2591\u2591\u2591\u2591\u2591    \u2591\u2591\u2591\u2591\u2591   \u2591\u2591\u2591\u2591\u2591  ",
  '<br><span class="color2">Welcome to my interactive web terminal.</span>',
  "<span class=\"color2\">For a list of available commands, type</span> <span class=\"command\">'help'</span><span class=\"color2\">.</span>",
];

en.banner_mobile = [
  '<span class="index">Jose(Pepe) Araya</span>',
  "<span class=\"color2 small-print\">Website design based on FKCodes</span>",
  '<br>',
  "\u2588\u2588\u2588\u2588\u2588\u2588\u2557 \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557\u2588\u2588\u2588\u2588\u2588\u2588\u2557 \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557",
  "\u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2557\u2588\u2588\u2554\u2550\u2550\u2550\u2550\u255D\u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2557\u2588\u2588\u2554\u2550\u2550\u2550\u2550\u255D",
  "\u2588\u2588\u2588\u2588\u2588\u2588\u2554\u255D\u2588\u2588\u2588\u2588\u2588\u2557  \u2588\u2588\u2588\u2588\u2588\u2588\u2554\u255D\u2588\u2588\u2588\u2588\u2588\u2557",
  "\u2588\u2588\u2554\u2550\u2550\u2550\u255D \u2588\u2588\u2554\u2550\u2550\u255D  \u2588\u2588\u2554\u2550\u2550\u2550\u255D \u2588\u2588\u2554\u2550\u2550\u255D",
  "\u2588\u2588\u2551     \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557\u2588\u2588\u2551     \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557",
  "\u255A\u2550\u255D     \u255A\u2550\u2550\u2550\u2550\u2550\u2550\u255D\u255A\u2550\u255D     \u255A\u2550\u2550\u2550\u2550\u2550\u2550\u255D",
  '<br>',
  " \u2588\u2588\u2588\u2588\u2588\u2557 \u2588\u2588\u2588\u2588\u2588\u2588\u2557  \u2588\u2588\u2588\u2588\u2588\u2557 \u2588\u2588\u2557   \u2588\u2588\u2557 \u2588\u2588\u2588\u2588\u2588\u2557",
  "\u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2557\u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2557\u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2557\u255A\u2588\u2588\u2557 \u2588\u2588\u2554\u255D\u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2557",
  "\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2551\u2588\u2588\u2588\u2588\u2588\u2588\u2554\u255D\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2551 \u255A\u2588\u2588\u2588\u2588\u2554\u255D \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2551",
  "\u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2551\u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2557\u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2551  \u255A\u2588\u2588\u2554\u255D  \u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2551",
  "\u2588\u2588\u2551  \u2588\u2588\u2551\u2588\u2588\u2551  \u2588\u2588\u2551\u2588\u2588\u2551  \u2588\u2588\u2551   \u2588\u2588\u2551   \u2588\u2588\u2551  \u2588\u2588\u2551",
  "\u255A\u2550\u255D  \u255A\u2550\u255D\u255A\u2550\u255D  \u255A\u2550\u255D\u255A\u2550\u255D  \u255A\u2550\u255D   \u255A\u2550\u255D   \u255A\u2550\u255D  \u255A\u2550\u255D",
  '<br>',
  '<span class="color2">Welcome to my terminal.</span>',
  "<span class=\"color2\">Type</span> <span class=\"command\">'help'</span><span class=\"color2\"> for commands.</span>",
  '<br>',
];

// ==================== SPANISH ====================

var es = {};

es.whois = [
  "<br>",
  "Hola, soy Pepe!",
  "Soy Tradecraft Engineering Manager liderando el equipo de Data Acquisition",
  "en Maltego Technologies GmbH en M\u00FAnich, Alemania, donde construyo y gestiono",
  "equipos que hacen ingenier\u00EDa inversa de APIs no documentadas, desarrollan",
  "pipelines de datos a gran escala, y entregan capacidades de inteligencia",
  "OSINT para profesionales de investigaci\u00F3n en todo el mundo.",
  "<br>",
  "Con m\u00E1s de 12 a\u00F1os de experiencia en sistemas embebidos, ingenier\u00EDa de datos,",
  "gesti\u00F3n de producto y fundaci\u00F3n de startups, combino experiencia t\u00E9cnica",
  "profunda con visi\u00F3n de negocio. Como fundador y ex-CEO, he escalado productos",
  "y equipos, conseguido inversi\u00F3n, y crecido bases de usuarios 60X mediante",
  "estrategias basadas en datos y ejecuci\u00F3n implacable.",
  "<br>",
  "Fuera de Maltego, construyo y opero mis propios productos:",
  '<a href="' + rondia_url + '" target="_blank">Rondia</a> \u2014 plataforma de gesti\u00F3n de turnos y conciliaci\u00F3n financiera',
  "para la industria hotelera chilena.",
  '<a href="' + entremed_url + '" target="_blank">EntreMed</a> \u2014 sistema de agregaci\u00F3n de empleos de salud que extrae, clasifica',
  "y distribuye ofertas laborales a miles de profesionales m\u00E9dicos v\u00EDa WhatsApp.",
  "Scraper Engine \u2014 motor de orquestaci\u00F3n de web scraping para clientes privados.",
  "<br>",
  "Siempre abierto a conectar con otros builders, desarrolladores Python,",
  "profesionales de datos y entusiastas de OSINT. \u00A1No dudes en contactarme!",
  "<br>"
];

es.whoami = [
  "<br>",
  "Ni s\u00E9 qu\u00E9 desayun\u00E9 hoy. Estas preguntas filos\u00F3ficas se responden",
  "en otro lado. \u00BFPor qu\u00E9 no le preguntas a ChatGPT?",
  "<br>"
];

es.social = [
  "<br>",
  'linkedin       <a href="' + linkedin + '" target="_blank">linkedin/pepearayao</a>',
  'github         <a href="' + github + '" target="_blank">github/pepearayao</a>',
  "<br>"
];

es.secret = [
  "<br>",
  '<span class="command">sudo</span>           Solo usa esto si eres admin',
  "<br>"
];

es.projects = [
  "<br>",
  '<span class="command">Rol Actual:</span>',
  "Tradecraft Engineering Manager @ Maltego Technologies (Ene 2026 - Presente)",
  "- Liderando el nuevo equipo de Data Acquisition",
  "- Gestionando ingenieros que hacen ingenier\u00EDa inversa de APIs",
  "- Arquitectando pipelines de datos a gran escala para inteligencia OSINT",
  "- Definiendo estrategia de tradecraft para recolecci\u00F3n de datos",
  "<br>",
  '<span class="command">Rol Anterior:</span>',
  "Python Developer @ Maltego Technologies (Jul 2024 - Dic 2025)",
  "- Ingenier\u00EDa inversa de APIs de grandes plataformas sociales",
  "- Mejora de capacidades de inteligencia de datos mediante scraping avanzado",
  "- Construcci\u00F3n de cobertura de tests y optimizaci\u00F3n de pipelines de datos",
  "<br>",
  '<span class="command">Proyectos Personales:</span>',
  "<br>",
  'Rondia \u2014 Gesti\u00F3n de Turnos y Conciliaci\u00F3n Financiera \u2014 <a href="' + rondia_url + '" target="_blank">rondia.app</a>',
  "- Plataforma full-stack para la industria hotelera chilena",
  "- Django + React con registros sellados con HMAC y firma electr\u00F3nica",
  "- Flujos automatizados: solicitud \u2192 aprobaci\u00F3n \u2192 firma \u2192 pago",
  "- Cierre semanal financiero con registros a prueba de manipulaci\u00F3n",
  "- Usado por cadenas hoteleras en Chile con soporte multi-sucursal",
  "<br>",
  "Scraper Engine \u2014 Plataforma de Orquestaci\u00F3n de Web Scraping",
  "- Plataforma de scraping basada en YAML para clientes privados",
  "- Motores duales: HTTP (curl-cffi) + Browser (Playwright)",
  "- Rotaci\u00F3n de proxies, rate limiting y circuit breakers integrados",
  "- Dashboard de observabilidad en tiempo real con detecci\u00F3n de incidentes",
  "- Workers Celery, almacenamiento S3 y programaci\u00F3n cron",
  "<br>",
  'EntreMed \u2014 Sistema de Agregaci\u00F3n de Empleos de Salud \u2014 <a href="' + entremed_url + '" target="_blank">entremed.io</a>',
  "- Sistema distribuido de scraping para 7+ portales de empleo chilenos",
  "- 13 spiders Scrapy con pipeline inteligente de clasificaci\u00F3n",
  "- Distribuci\u00F3n autom\u00E1tica por WhatsApp a miles de profesionales m\u00E9dicos",
  "- Arquitectura de microservicios: scraper, clasificador, API y watchdog",
  "<br>",
  '<span class="command">Emprendimientos Anteriores:</span>',
  "<br>",
  "sqrpop (Co-Fundador, 2023-2024)",
  "- Plataforma de matching con IA para hospitales y enfermeras",
  "- Ganador de \u20AC25K del estado de Baviera (AI+ Munich)",
  "<br>",
  "Medinet (CEO y Co-fundador, 2019-2023)",
  "- De idea a product-market fit, crecimiento de usuarios 5X",
  "- Inversi\u00F3n asegurada para expansi\u00F3n en M\u00E9xico y Europa",
  "<br>"
];

es.skills = [
  "<br>",
  '<span class="command">Web Scraping y Adquisici\u00F3n de Datos:</span>',
  "\u2022 Webscraping avanzado (Scrapy, Playwright, Puppeteer, Selenium)",
  "\u2022 Ingenier\u00EDa inversa de APIs no documentadas",
  "\u2022 Recolecci\u00F3n de datos OSINT y an\u00E1lisis de inteligencia",
  "\u2022 Rotaci\u00F3n de proxies, rate limiting y anti-detecci\u00F3n",
  "\u2022 Procesamiento de datos a gran escala (2M+ registros)",
  "<br>",
  '<span class="command">Backend e Infraestructura:</span>',
  "Python | Django | Django Ninja | FastAPI | Celery",
  "PostgreSQL | Redis | Docker Swarm | Traefik",
  "S3/MinIO | GitHub Actions CI/CD | Sentry",
  "<br>",
  '<span class="command">Frontend:</span>',
  "React | TypeScript | Vite | Tailwind CSS",
  "<br>",
  '<span class="command">Arquitectura y Sistemas:</span>',
  "\u2022 Dise\u00F1o y orquestaci\u00F3n de microservicios",
  "\u2022 Registros de auditor\u00EDa sellados con HMAC y firma electr\u00F3nica",
  "\u2022 M\u00E1quinas de estado para l\u00F3gica de negocio compleja",
  "\u2022 Sistemas de configuraci\u00F3n declarativa basados en YAML",
  "\u2022 Observabilidad en tiempo real y detecci\u00F3n de incidentes",
  "<br>",
  '<span class="command">Gesti\u00F3n de Ingenier\u00EDa:</span>',
  "Liderazgo de Equipo | Estrategia de Tradecraft | Contrataci\u00F3n T\u00E9cnica",
  "Planificaci\u00F3n de Sprints | Code Review | Mentor\u00EDa",
  "<br>",
  '<span class="command">Habilidades de Negocio y Fundador:</span>',
  "Estrategia de Producto | Marketing | Ventas | Fundraising",
  "Go-to-Market | Desarrollo de Negocios",
  "<br>",
  '<span class="command">Idiomas:</span>',
  "Espa\u00F1ol (Nativo) | Ingl\u00E9s (Nativo) | Alem\u00E1n (Nivel Laboral Limitado)",
  "<br>",
  '<span class="command">Educaci\u00F3n:</span>',
  "Universidad T\u00E9cnica Federico Santa Mar\u00EDa",
  "Ingenier\u00EDa Electr\u00F3nica, Ciencias de la Computaci\u00F3n (2008-2013)",
  "<br>",
  "Le Wagon - Bootcamp de Data Science (Certificado)",
  "<br>"
];

es.help = [
  "<br>",
  '<span class="command">whois</span>          \u00BFQui\u00E9n es Pepe?',
  '<span class="command">whoami</span>         \u00BFAlguien realmente sabe?',
  '<span class="command">social</span>         Mostrar redes sociales',
  '<span class="command">secret</span>         Encuentra el easteregg',
  '<span class="command">projects</span>       Ver proyectos',
  '<span class="command">skills</span>         Ver habilidades t\u00E9cnicas',
  '<span class="command">resume</span>         Descargar mi CV',
  '<span class="command">history</span>        Ver historial de comandos',
  '<span class="command">help</span>           Obviamente ya sabes qu\u00E9 hace esto',
  '<span class="command">email</span>          No me mandes correos tontos por favor',
  '<span class="command">lang</span>           Cambiar idioma (lang en / lang es / lang de)',
  '<span class="command">clear</span>          Limpiar terminal',
  '<span class="command">banner</span>         Mostrar el encabezado',
  "<br>",
];

es.banner = [
  '<span class="index">Sitio personal de Jose(Pepe) Araya. Bienvenido.</span>',
  "<span class=\"color2 small-print\">Dise\u00F1o web basado en FKCodes</span>",
  '<br>',
  " \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588  \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588 \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588  \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588      \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588   \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588     \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588   \u2588\u2588\u2588\u2588\u2588 \u2588\u2588\u2588\u2588\u2588   \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588",
  " \u2591\u2588\u2588\u2588\u2591\u2591\u2591\u2591\u2591\u2588\u2588\u2588\u2591\u2591\u2588\u2588\u2588\u2591\u2591\u2591\u2591\u2591\u2588\u2591\u2591\u2588\u2588\u2588\u2591\u2591\u2591\u2591\u2591\u2588\u2588\u2588\u2591\u2591\u2588\u2588\u2588\u2591\u2591\u2591\u2591\u2591\u2588     \u2588\u2588\u2588\u2591\u2591\u2591\u2591\u2591\u2588\u2588\u2588 \u2591\u2591\u2588\u2588\u2588\u2591\u2591\u2591\u2591\u2591\u2588\u2588\u2588   \u2588\u2588\u2588\u2591\u2591\u2591\u2591\u2591\u2588\u2588\u2588 \u2591\u2591\u2588\u2588\u2588 \u2591\u2591\u2588\u2588\u2588   \u2588\u2588\u2588\u2591\u2591\u2591\u2591\u2591\u2588\u2588\u2588",
  " \u2591\u2588\u2588\u2588    \u2591\u2588\u2588\u2588 \u2591\u2588\u2588\u2588  \u2588 \u2591  \u2591\u2588\u2588\u2588    \u2591\u2588\u2588\u2588 \u2591\u2588\u2588\u2588  \u2588 \u2591     \u2591\u2588\u2588\u2588    \u2591\u2588\u2588\u2588  \u2591\u2588\u2588\u2588    \u2591\u2588\u2588\u2588  \u2591\u2588\u2588\u2588    \u2591\u2588\u2588\u2588  \u2591\u2591\u2588\u2588\u2588 \u2588\u2588\u2588   \u2591\u2588\u2588\u2588    \u2591\u2588\u2588\u2588",
  " \u2591\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588  \u2591\u2588\u2588\u2588\u2588\u2588\u2588    \u2591\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588  \u2591\u2588\u2588\u2588\u2588\u2588\u2588       \u2591\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588  \u2591\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588   \u2591\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588   \u2591\u2591\u2588\u2588\u2588\u2588\u2588    \u2591\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588",
  " \u2591\u2588\u2588\u2588\u2591\u2591\u2591\u2591\u2591\u2591   \u2591\u2588\u2588\u2588\u2591\u2591\u2588    \u2591\u2588\u2588\u2588\u2591\u2591\u2591\u2591\u2591\u2591   \u2591\u2588\u2588\u2588\u2591\u2591\u2588       \u2591\u2588\u2588\u2588\u2591\u2591\u2591\u2591\u2591\u2588\u2588\u2588  \u2591\u2588\u2588\u2588\u2591\u2591\u2591\u2591\u2591\u2588\u2588\u2588  \u2591\u2588\u2588\u2588\u2591\u2591\u2591\u2591\u2591\u2588\u2588\u2588    \u2591\u2591\u2588\u2588\u2588     \u2591\u2588\u2588\u2588\u2591\u2591\u2591\u2591\u2591\u2588\u2588\u2588",
  " \u2591\u2588\u2588\u2588         \u2591\u2588\u2588\u2588 \u2591   \u2588 \u2591\u2588\u2588\u2588         \u2591\u2588\u2588\u2588 \u2591   \u2588    \u2591\u2588\u2588\u2588    \u2591\u2588\u2588\u2588  \u2591\u2588\u2588\u2588    \u2591\u2588\u2588\u2588  \u2591\u2588\u2588\u2588    \u2591\u2588\u2588\u2588     \u2591\u2588\u2588\u2588     \u2591\u2588\u2588\u2588    \u2591\u2588\u2588\u2588 ",
  " \u2588\u2588\u2588\u2588\u2588        \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588 \u2588\u2588\u2588\u2588\u2588        \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588    \u2588\u2588\u2588\u2588\u2588   \u2588\u2588\u2588\u2588\u2588 \u2588\u2588\u2588\u2588\u2588   \u2588\u2588\u2588\u2588\u2588 \u2588\u2588\u2588\u2588\u2588   \u2588\u2588\u2588\u2588\u2588    \u2588\u2588\u2588\u2588\u2588    \u2588\u2588\u2588\u2588\u2588   \u2588\u2588\u2588\u2588\u2588 ",
  " \u2591\u2591\u2591\u2591\u2591        \u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591 \u2591\u2591\u2591\u2591\u2591        \u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591    \u2591\u2591\u2591\u2591\u2591   \u2591\u2591\u2591\u2591\u2591 \u2591\u2591\u2591\u2591\u2591   \u2591\u2591\u2591\u2591\u2591 \u2591\u2591\u2591\u2591\u2591   \u2591\u2591\u2591\u2591\u2591    \u2591\u2591\u2591\u2591\u2591    \u2591\u2591\u2591\u2591\u2591   \u2591\u2591\u2591\u2591\u2591  ",
  '<br><span class="color2">Bienvenido a mi terminal web interactiva.</span>',
  "<span class=\"color2\">Para ver los comandos disponibles, escribe</span> <span class=\"command\">'help'</span><span class=\"color2\">.</span>",
];

es.banner_mobile = [
  '<span class="index">Jose(Pepe) Araya</span>',
  "<span class=\"color2 small-print\">Dise\u00F1o web basado en FKCodes</span>",
  '<br>',
  "\u2588\u2588\u2588\u2588\u2588\u2588\u2557 \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557\u2588\u2588\u2588\u2588\u2588\u2588\u2557 \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557",
  "\u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2557\u2588\u2588\u2554\u2550\u2550\u2550\u2550\u255D\u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2557\u2588\u2588\u2554\u2550\u2550\u2550\u2550\u255D",
  "\u2588\u2588\u2588\u2588\u2588\u2588\u2554\u255D\u2588\u2588\u2588\u2588\u2588\u2557  \u2588\u2588\u2588\u2588\u2588\u2588\u2554\u255D\u2588\u2588\u2588\u2588\u2588\u2557",
  "\u2588\u2588\u2554\u2550\u2550\u2550\u255D \u2588\u2588\u2554\u2550\u2550\u255D  \u2588\u2588\u2554\u2550\u2550\u2550\u255D \u2588\u2588\u2554\u2550\u2550\u255D",
  "\u2588\u2588\u2551     \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557\u2588\u2588\u2551     \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557",
  "\u255A\u2550\u255D     \u255A\u2550\u2550\u2550\u2550\u2550\u2550\u255D\u255A\u2550\u255D     \u255A\u2550\u2550\u2550\u2550\u2550\u2550\u255D",
  '<br>',
  " \u2588\u2588\u2588\u2588\u2588\u2557 \u2588\u2588\u2588\u2588\u2588\u2588\u2557  \u2588\u2588\u2588\u2588\u2588\u2557 \u2588\u2588\u2557   \u2588\u2588\u2557 \u2588\u2588\u2588\u2588\u2588\u2557",
  "\u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2557\u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2557\u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2557\u255A\u2588\u2588\u2557 \u2588\u2588\u2554\u255D\u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2557",
  "\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2551\u2588\u2588\u2588\u2588\u2588\u2588\u2554\u255D\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2551 \u255A\u2588\u2588\u2588\u2588\u2554\u255D \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2551",
  "\u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2551\u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2557\u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2551  \u255A\u2588\u2588\u2554\u255D  \u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2551",
  "\u2588\u2588\u2551  \u2588\u2588\u2551\u2588\u2588\u2551  \u2588\u2588\u2551\u2588\u2588\u2551  \u2588\u2588\u2551   \u2588\u2588\u2551   \u2588\u2588\u2551  \u2588\u2588\u2551",
  "\u255A\u2550\u255D  \u255A\u2550\u255D\u255A\u2550\u255D  \u255A\u2550\u255D\u255A\u2550\u255D  \u255A\u2550\u255D   \u255A\u2550\u255D   \u255A\u2550\u255D  \u255A\u2550\u255D",
  '<br>',
  '<span class="color2">Bienvenido a mi terminal.</span>',
  "<span class=\"color2\">Escribe</span> <span class=\"command\">'help'</span><span class=\"color2\"> para ver comandos.</span>",
  '<br>',
];

// ==================== GERMAN ====================

var de = {};

de.whois = [
  "<br>",
  "Hallo, ich bin Pepe!",
  "Ich bin Tradecraft Engineering Manager und leite das Data Acquisition Team",
  "bei Maltego Technologies GmbH in M\u00FCnchen, wo ich Teams aufbaue und f\u00FChre,",
  "die undokumentierte APIs reverse-engineeren, gro\u00DFangelegte Datenpipelines",
  "entwickeln und OSINT-Intelligence-F\u00E4higkeiten f\u00FCr Ermittlungsprofis",
  "weltweit bereitstellen.",
  "<br>",
  "Mit \u00FCber 12 Jahren Erfahrung in Embedded Systems, Data Engineering,",
  "Produktmanagement und Startup-Gr\u00FCndungen bringe ich eine einzigartige",
  "Kombination aus tiefem technischem Know-how und Gesch\u00E4ftssinn mit.",
  "Als Gr\u00FCnder und ehemaliger CEO habe ich Produkte und Teams skaliert,",
  "Investitionen gesichert und Nutzerbasen um das 60-fache gesteigert.",
  "<br>",
  "Neben Maltego entwickle und betreibe ich eigene Produkte:",
  '<a href="' + rondia_url + '" target="_blank">Rondia</a> \u2014 Schichtverwaltungs- und Finanzabstimmungsplattform',
  "f\u00FCr die chilenische Hotelbranche.",
  '<a href="' + entremed_url + '" target="_blank">EntreMed</a> \u2014 Jobportal-Aggregationssystem f\u00FCr das Gesundheitswesen,',
  "das Stellenangebote scrapt, klassifiziert und per WhatsApp an tausende",
  "medizinische Fachkr\u00E4fte verteilt.",
  "Scraper Engine \u2014 produktionsreife Web-Scraping-Orchestrierungsengine",
  "f\u00FCr private Kunden.",
  "<br>",
  "Immer offen f\u00FCr Austausch mit anderen Buildern, Python-Entwicklern,",
  "Datenprofis und OSINT-Enthusiasten. Schreib mir gerne!",
  "<br>"
];

de.whoami = [
  "<br>",
  "Ich wei\u00DF nicht mal, was ich zum Fr\u00FChst\u00FCck hatte. Solche philosophischen",
  "Fragen werden woanders beantwortet. Vielleicht ChatGPT fragen?",
  "<br>"
];

de.social = [
  "<br>",
  'linkedin       <a href="' + linkedin + '" target="_blank">linkedin/pepearayao</a>',
  'github         <a href="' + github + '" target="_blank">github/pepearayao</a>',
  "<br>"
];

de.secret = [
  "<br>",
  '<span class="command">sudo</span>           Nur benutzen, wenn du Admin bist',
  "<br>"
];

de.projects = [
  "<br>",
  '<span class="command">Aktuelle Rolle:</span>',
  "Tradecraft Engineering Manager @ Maltego Technologies (Jan 2026 - Heute)",
  "- Leitung des neu gegr\u00FCndeten Data Acquisition Teams",
  "- F\u00FChrung von Ingenieuren, die APIs gro\u00DFer Plattformen reverse-engineeren",
  "- Architektur gro\u00DFangelegter Datenpipelines f\u00FCr OSINT-Intelligence",
  "- Entwicklung der Tradecraft-Strategie f\u00FCr Datenerfassung",
  "<br>",
  '<span class="command">Vorherige Rolle:</span>',
  "Python Developer @ Maltego Technologies (Jul 2024 - Dez 2025)",
  "- Reverse Engineering von APIs gro\u00DFer Social-Media-Plattformen",
  "- Verbesserung der Daten-Intelligence durch fortgeschrittenes Scraping",
  "- Aufbau automatisierter Testabdeckung und Pipeline-Optimierungen",
  "<br>",
  '<span class="command">Pers\u00F6nliche Projekte:</span>',
  "<br>",
  'Rondia \u2014 Schichtverwaltung & Finanzabstimmung \u2014 <a href="' + rondia_url + '" target="_blank">rondia.app</a>',
  "- Full-Stack-Plattform f\u00FCr die chilenische Hotelbranche",
  "- Django + React mit HMAC-versiegelten Audit-Trails und E-Signaturen",
  "- Automatisierte Schicht-Workflows: Anfrage \u2192 Genehmigung \u2192 Unterschrift \u2192 Zahlung",
  "- W\u00F6chentlicher Finanzabschluss mit manipulationssicheren Datens\u00E4tzen",
  "- Im Einsatz bei Hotelketten in Chile mit Multi-Filial-Unterst\u00FCtzung",
  "<br>",
  "Scraper Engine \u2014 Web-Scraping-Orchestrierungsplattform",
  "- YAML-basierte Scraping-Plattform f\u00FCr private Kunden",
  "- Duale Engines: HTTP (curl-cffi) + Browser (Playwright)",
  "- Integrierte Proxy-Rotation, Rate Limiting und Circuit Breakers",
  "- Echtzeit-Observability-Dashboard mit Incident-Erkennung",
  "- Celery Workers, S3-Artefaktspeicher und Cron-Scheduling",
  "<br>",
  'EntreMed \u2014 Jobportal-Aggregation im Gesundheitswesen \u2014 <a href="' + entremed_url + '" target="_blank">entremed.io</a>',
  "- Verteiltes Scraping-System f\u00FCr 7+ chilenische Jobportale",
  "- 13 Scrapy-Spiders mit intelligenter Klassifizierungs-Pipeline",
  "- Automatische WhatsApp-Verteilung an tausende medizinische Fachkr\u00E4fte",
  "- Microservices-Architektur: Scraper, Klassifizierer, API und Watchdog",
  "<br>",
  '<span class="command">Fr\u00FChere Unternehmungen:</span>',
  "<br>",
  "sqrpop (Mitgr\u00FCnder, 2023-2024)",
  "- KI-Matching-Plattform f\u00FCr Krankenh\u00E4user und Pflegekr\u00E4fte",
  "- \u20AC25K F\u00F6rderung vom Freistaat Bayern (AI+ M\u00FCnchen)",
  "<br>",
  "Medinet (CEO & Mitgr\u00FCnder, 2019-2023)",
  "- Von der Idee zum Product-Market Fit, Nutzerbasis 5X gesteigert",
  "- Investitionen f\u00FCr Expansion in Mexiko und Europa gesichert",
  "<br>"
];

de.skills = [
  "<br>",
  '<span class="command">Web Scraping & Datenerfassung:</span>',
  "\u2022 Fortgeschrittenes Webscraping (Scrapy, Playwright, Puppeteer, Selenium)",
  "\u2022 Reverse Engineering undokumentierter APIs",
  "\u2022 OSINT-Datenerhebung und Intelligence-Analyse",
  "\u2022 Proxy-Rotation, Rate Limiting und Anti-Detection",
  "\u2022 Gro\u00DFangelegte Datenverarbeitung (2M+ Datens\u00E4tze)",
  "<br>",
  '<span class="command">Backend & Infrastruktur:</span>',
  "Python | Django | Django Ninja | FastAPI | Celery",
  "PostgreSQL | Redis | Docker Swarm | Traefik",
  "S3/MinIO | GitHub Actions CI/CD | Sentry",
  "<br>",
  '<span class="command">Frontend:</span>',
  "React | TypeScript | Vite | Tailwind CSS",
  "<br>",
  '<span class="command">Architektur & Systeme:</span>',
  "\u2022 Microservices-Design und -Orchestrierung",
  "\u2022 HMAC-versiegelte Audit-Trails und E-Signatur-Workflows",
  "\u2022 State Machines f\u00FCr komplexe Gesch\u00E4ftslogik",
  "\u2022 YAML-gesteuerte deklarative Konfigurationssysteme",
  "\u2022 Echtzeit-Observability und Incident-Erkennung",
  "<br>",
  '<span class="command">Engineering Management:</span>',
  "Teamf\u00FChrung | Tradecraft-Strategie | Technisches Recruiting",
  "Sprint-Planung | Code Review | Mentoring",
  "<br>",
  '<span class="command">Business & Gr\u00FCnder-Skills:</span>',
  "Produktstrategie | Marketing | Vertrieb | Fundraising",
  "Go-to-Market | Gesch\u00E4ftsentwicklung",
  "<br>",
  '<span class="command">Sprachen:</span>',
  "Spanisch (Muttersprache) | Englisch (Muttersprache) | Deutsch (Grundkenntnisse)",
  "<br>",
  '<span class="command">Ausbildung:</span>',
  "Universidad T\u00E9cnica Federico Santa Mar\u00EDa",
  "Elektrotechnik, Informatik (2008-2013)",
  "<br>",
  "Le Wagon - Data Science Bootcamp (Zertifiziert)",
  "<br>"
];

de.help = [
  "<br>",
  '<span class="command">whois</span>          Wer ist Pepe?',
  '<span class="command">whoami</span>         Wei\u00DF das \u00FCberhaupt jemand?',
  '<span class="command">social</span>         Soziale Netzwerke anzeigen',
  '<span class="command">secret</span>         Finde das Easteregg',
  '<span class="command">projects</span>       Projekte anzeigen',
  '<span class="command">skills</span>         Technische F\u00E4higkeiten anzeigen',
  '<span class="command">resume</span>         Meinen Lebenslauf herunterladen',
  '<span class="command">history</span>        Befehlsverlauf anzeigen',
  '<span class="command">help</span>           Du wei\u00DFt offensichtlich schon, was das macht',
  '<span class="command">email</span>          Bitte keinen Spam schicken',
  '<span class="command">lang</span>           Sprache wechseln (lang de / lang en / lang es)',
  '<span class="command">clear</span>          Terminal leeren',
  '<span class="command">banner</span>         Header anzeigen',
  "<br>",
];

de.banner = [
  '<span class="index">Pers\u00F6nliche Website von Jose(Pepe) Araya. Willkommen.</span>',
  "<span class=\"color2 small-print\">Webdesign basiert auf FKCodes</span>",
  '<br>',
  " \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588  \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588 \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588  \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588      \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588   \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588     \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588   \u2588\u2588\u2588\u2588\u2588 \u2588\u2588\u2588\u2588\u2588   \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588",
  " \u2591\u2588\u2588\u2588\u2591\u2591\u2591\u2591\u2591\u2588\u2588\u2588\u2591\u2591\u2588\u2588\u2588\u2591\u2591\u2591\u2591\u2591\u2588\u2591\u2591\u2588\u2588\u2588\u2591\u2591\u2591\u2591\u2591\u2588\u2588\u2588\u2591\u2591\u2588\u2588\u2588\u2591\u2591\u2591\u2591\u2591\u2588     \u2588\u2588\u2588\u2591\u2591\u2591\u2591\u2591\u2588\u2588\u2588 \u2591\u2591\u2588\u2588\u2588\u2591\u2591\u2591\u2591\u2591\u2588\u2588\u2588   \u2588\u2588\u2588\u2591\u2591\u2591\u2591\u2591\u2588\u2588\u2588 \u2591\u2591\u2588\u2588\u2588 \u2591\u2591\u2588\u2588\u2588   \u2588\u2588\u2588\u2591\u2591\u2591\u2591\u2591\u2588\u2588\u2588",
  " \u2591\u2588\u2588\u2588    \u2591\u2588\u2588\u2588 \u2591\u2588\u2588\u2588  \u2588 \u2591  \u2591\u2588\u2588\u2588    \u2591\u2588\u2588\u2588 \u2591\u2588\u2588\u2588  \u2588 \u2591     \u2591\u2588\u2588\u2588    \u2591\u2588\u2588\u2588  \u2591\u2588\u2588\u2588    \u2591\u2588\u2588\u2588  \u2591\u2588\u2588\u2588    \u2591\u2588\u2588\u2588  \u2591\u2591\u2588\u2588\u2588 \u2588\u2588\u2588   \u2591\u2588\u2588\u2588    \u2591\u2588\u2588\u2588",
  " \u2591\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588  \u2591\u2588\u2588\u2588\u2588\u2588\u2588    \u2591\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588  \u2591\u2588\u2588\u2588\u2588\u2588\u2588       \u2591\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588  \u2591\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588   \u2591\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588   \u2591\u2591\u2588\u2588\u2588\u2588\u2588    \u2591\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588",
  " \u2591\u2588\u2588\u2588\u2591\u2591\u2591\u2591\u2591\u2591   \u2591\u2588\u2588\u2588\u2591\u2591\u2588    \u2591\u2588\u2588\u2588\u2591\u2591\u2591\u2591\u2591\u2591   \u2591\u2588\u2588\u2588\u2591\u2591\u2588       \u2591\u2588\u2588\u2588\u2591\u2591\u2591\u2591\u2591\u2588\u2588\u2588  \u2591\u2588\u2588\u2588\u2591\u2591\u2591\u2591\u2591\u2588\u2588\u2588  \u2591\u2588\u2588\u2588\u2591\u2591\u2591\u2591\u2591\u2588\u2588\u2588    \u2591\u2591\u2588\u2588\u2588     \u2591\u2588\u2588\u2588\u2591\u2591\u2591\u2591\u2591\u2588\u2588\u2588",
  " \u2591\u2588\u2588\u2588         \u2591\u2588\u2588\u2588 \u2591   \u2588 \u2591\u2588\u2588\u2588         \u2591\u2588\u2588\u2588 \u2591   \u2588    \u2591\u2588\u2588\u2588    \u2591\u2588\u2588\u2588  \u2591\u2588\u2588\u2588    \u2591\u2588\u2588\u2588  \u2591\u2588\u2588\u2588    \u2591\u2588\u2588\u2588     \u2591\u2588\u2588\u2588     \u2591\u2588\u2588\u2588    \u2591\u2588\u2588\u2588 ",
  " \u2588\u2588\u2588\u2588\u2588        \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588 \u2588\u2588\u2588\u2588\u2588        \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588    \u2588\u2588\u2588\u2588\u2588   \u2588\u2588\u2588\u2588\u2588 \u2588\u2588\u2588\u2588\u2588   \u2588\u2588\u2588\u2588\u2588 \u2588\u2588\u2588\u2588\u2588   \u2588\u2588\u2588\u2588\u2588    \u2588\u2588\u2588\u2588\u2588    \u2588\u2588\u2588\u2588\u2588   \u2588\u2588\u2588\u2588\u2588 ",
  " \u2591\u2591\u2591\u2591\u2591        \u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591 \u2591\u2591\u2591\u2591\u2591        \u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591    \u2591\u2591\u2591\u2591\u2591   \u2591\u2591\u2591\u2591\u2591 \u2591\u2591\u2591\u2591\u2591   \u2591\u2591\u2591\u2591\u2591 \u2591\u2591\u2591\u2591\u2591   \u2591\u2591\u2591\u2591\u2591    \u2591\u2591\u2591\u2591\u2591    \u2591\u2591\u2591\u2591\u2591   \u2591\u2591\u2591\u2591\u2591  ",
  '<br><span class="color2">Willkommen in meinem interaktiven Web-Terminal.</span>',
  "<span class=\"color2\">F\u00FCr eine Liste der verf\u00FCgbaren Befehle, tippe</span> <span class=\"command\">'help'</span><span class=\"color2\">.</span>",
];

de.banner_mobile = [
  '<span class="index">Jose(Pepe) Araya</span>',
  "<span class=\"color2 small-print\">Webdesign basiert auf FKCodes</span>",
  '<br>',
  "\u2588\u2588\u2588\u2588\u2588\u2588\u2557 \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557\u2588\u2588\u2588\u2588\u2588\u2588\u2557 \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557",
  "\u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2557\u2588\u2588\u2554\u2550\u2550\u2550\u2550\u255D\u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2557\u2588\u2588\u2554\u2550\u2550\u2550\u2550\u255D",
  "\u2588\u2588\u2588\u2588\u2588\u2588\u2554\u255D\u2588\u2588\u2588\u2588\u2588\u2557  \u2588\u2588\u2588\u2588\u2588\u2588\u2554\u255D\u2588\u2588\u2588\u2588\u2588\u2557",
  "\u2588\u2588\u2554\u2550\u2550\u2550\u255D \u2588\u2588\u2554\u2550\u2550\u255D  \u2588\u2588\u2554\u2550\u2550\u2550\u255D \u2588\u2588\u2554\u2550\u2550\u255D",
  "\u2588\u2588\u2551     \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557\u2588\u2588\u2551     \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557",
  "\u255A\u2550\u255D     \u255A\u2550\u2550\u2550\u2550\u2550\u2550\u255D\u255A\u2550\u255D     \u255A\u2550\u2550\u2550\u2550\u2550\u2550\u255D",
  '<br>',
  " \u2588\u2588\u2588\u2588\u2588\u2557 \u2588\u2588\u2588\u2588\u2588\u2588\u2557  \u2588\u2588\u2588\u2588\u2588\u2557 \u2588\u2588\u2557   \u2588\u2588\u2557 \u2588\u2588\u2588\u2588\u2588\u2557",
  "\u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2557\u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2557\u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2557\u255A\u2588\u2588\u2557 \u2588\u2588\u2554\u255D\u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2557",
  "\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2551\u2588\u2588\u2588\u2588\u2588\u2588\u2554\u255D\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2551 \u255A\u2588\u2588\u2588\u2588\u2554\u255D \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2551",
  "\u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2551\u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2557\u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2551  \u255A\u2588\u2588\u2554\u255D  \u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2551",
  "\u2588\u2588\u2551  \u2588\u2588\u2551\u2588\u2588\u2551  \u2588\u2588\u2551\u2588\u2588\u2551  \u2588\u2588\u2551   \u2588\u2588\u2551   \u2588\u2588\u2551  \u2588\u2588\u2551",
  "\u255A\u2550\u255D  \u255A\u2550\u255D\u255A\u2550\u255D  \u255A\u2550\u255D\u255A\u2550\u255D  \u255A\u2550\u255D   \u255A\u2550\u255D   \u255A\u2550\u255D  \u255A\u2550\u255D",
  '<br>',
  '<span class="color2">Willkommen in meinem Terminal.</span>',
  "<span class=\"color2\">Tippe</span> <span class=\"command\">'help'</span><span class=\"color2\"> f\u00FCr Befehle.</span>",
  '<br>',
];

// ==================== ACTIVE CONTENT (starts as English) ====================

var whois = en.whois;
var whoami = en.whoami;
var social = en.social;
var secret = en.secret;
var projects = en.projects;
var skills = en.skills;
var help = en.help;
var banner = en.banner;
var banner_mobile = en.banner_mobile;

function switchLang(lang) {
  var packs = { en: en, es: es, de: de };
  var pack = packs[lang] || en;
  currentLang = packs[lang] ? lang : "en";
  whois = pack.whois;
  whoami = pack.whoami;
  social = pack.social;
  secret = pack.secret;
  projects = pack.projects;
  skills = pack.skills;
  help = pack.help;
  banner = pack.banner;
  banner_mobile = pack.banner_mobile;
}
