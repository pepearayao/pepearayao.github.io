var twitter = "https://www.twitter.com/pepearayao/";
var password = "what is the answer to the ultimate question of life, the universe, and everything";
var linkedin = "https://www.linkedin.com/in/jose-araya-oyanedel/";
var instagram = "https://www.instagram.com/pepearayao/";
var github = "https://github.com/pepearayao/";
var email = 'mailto:pepearayao@gmail.com';
var whatsapp = "https://wa.me/4915165119309";

whois = [
  "<br>",
  "👋 Hey there, I'm Pepe! 🤗",
  "As an electronics engineer and data scientist, I'm passionate about",
  "crafting innovative products and diving deep into technology.",
  "With over 12 years of experience, I've worn many hats - from embedded C",
  "developer for ARM architecture to backend developer, data scientist,",
  "and even a stint as a product manager.",
  "In my latest role as a manager for a German startup in the healthtech",
  "sector, I found myself at the intersection of business and technology.",
  "Now, armed with a wealth of knowledge in business, product creation and ",
  "AI/ML dev, I'm lending my expertise to startups and companies through",
  "consulting and freelancing.",
  "While many of my projects are confidential, I'm always open to",
  "discussing my experiences and how I can help your venture thrive.",
  "Currently based in Munich, I'm on the lookout for exciting full-time",
  "opportunities that allow me to continue making an impact in the tech",
  "world. If you think we could collaborate or if you just want to connect,",
  "feel free to reach out via email. Let's make something amazing",
  "together! 🚀",

  "<br>"
];

whoami = [
  "<br>",
  "Sorry I don't even know what I had for breakfast. These philosofical questions",
  "can be answered elseware. Maybe ask ChatGPT?",
  "<br>"
];

social = [
  "<br>",
  'twitter        <a href="' + twitter + '" target="_blank">twitter/pepearayao' + '</a>',
  'linkedin       <a href="' + linkedin + '" target="_blank">linkedin/pepearayao' + "</a>",
  'instagram      <a href="' + instagram + '" target="_blank">instagram/pepearayao' + '</a>',
  'github         <a href="' + github + '" target="_blank">github/pepearayao' + "</a>",
  "<br>"
];

secret = [
  "<br>",
  '<span class="command">sudo</span>           Only use if you\'re admin',
  "<br>"
];

projects = [
  "<br>",
  "Working on this... confidential or offline. But will update this in due time.",
  "<br>"
];

help = [
  "<br>",
  '<span class="command">whois</span>          Who is Pepe?',
  '<span class="command">whoami</span>         Does anyone really knows?',
  '<span class="command">social</span>         Display social networks',
  '<span class="command">secret</span>         Find the easteregg',
  '<span class="command">projects</span>       View coding projects',
  '<span class="command">history</span>        View command history',
  '<span class="command">help</span>           You obviously already know what this does',
  '<span class="command">email</span>          Do not email me with BS please',
  '<span class="command">whatsapp</span>       Send me a WhatsApp message',
  '<span class="command">clear</span>          Clear terminal',
  '<span class="command">banner</span>         Display the header',
  "<br>",
];

// Desktop banner (full ASCII art)
bannerDesktop = [
  '<span class="index">Jose(Pepe) Araya personal website. Welcome.</span>',
  "<span class=\"color2 small-print\">Website design based on FKCodes</span>",
  '<br>',
  " ███████████  ██████████ ███████████  ██████████      █████████   ███████████     █████████   █████ █████   █████████",
  " ░███░░░░░███░░███░░░░░█░░███░░░░░███░░███░░░░░█     ███░░░░░███ ░░███░░░░░███   ███░░░░░███ ░░███ ░░███   ███░░░░░███",
  " ░███    ░███ ░███  █ ░  ░███    ░███ ░███  █ ░     ░███    ░███  ░███    ░███  ░███    ░███  ░░███ ███   ░███    ░███",
  " ░██████████  ░██████    ░██████████  ░██████       ░███████████  ░██████████   ░███████████   ░░█████    ░███████████",
  " ░███░░░░░░   ░███░░█    ░███░░░░░░   ░███░░█       ░███░░░░░███  ░███░░░░░███  ░███░░░░░███    ░░███     ░███░░░░░███",
  " ░███         ░███ ░   █ ░███         ░███ ░   █    ░███    ░███  ░███    ░███  ░███    ░███     ░███     ░███    ░███ ",
  " █████        ██████████ █████        ██████████    █████   █████ █████   █████ █████   █████    █████    █████   █████ ",
  " ░░░░░        ░░░░░░░░░░ ░░░░░        ░░░░░░░░░░    ░░░░░   ░░░░░ ░░░░░   ░░░░░ ░░░░░   ░░░░░    ░░░░░    ░░░░░   ░░░░░  ",

  '<br><span class="color2">Welcome to my interactive web terminal.</span>',
  "<span class=\"color2\">For a list of available commands, type</span> <span class=\"command\">'help'</span><span class=\"color2\">.</span>",
];

// Mobile banner (condensed version)
bannerMobile = [
  '<span class="index">Jose(Pepe) Araya</span>',
  "<span class=\"color2 small-print\">Design based on FKCodes</span>",
  '<br>',
  "  ____  ____  ____  ____      _    ____      _    __   __    _    ",
  " |  _ \\| __ )|  _ \\| ___|    / \\  |  _ \\    / \\   \\ \\ / /   / \\   ",
  " | |_) |  _ \\| |_) |  _|    / _ \\ | |_) |  / _ \\   \\ V /   / _ \\  ",
  " |  __/| |_) |  __/| |___  / ___ \\|  _ <  / ___ \\   | |   / ___ \\ ",
  " |_|   |____/|_|   |_____|/_/   \\_\\_| \\_\\/_/   \\_\\  |_|  /_/   \\_\\",
  '<br>',
  '<span class="color2">Interactive Web Terminal</span>',
  "<span class=\"color2\">Type</span> <span class=\"command\">'help'</span> <span class=\"color2\">for commands</span>",
];

// Set banner based on screen size
banner = window.innerWidth <= 768 ? bannerMobile : bannerDesktop;
