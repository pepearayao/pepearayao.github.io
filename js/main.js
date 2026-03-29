var before = document.getElementById("before");
var liner = document.getElementById("liner");
var command = document.getElementById("typer");
var textarea = document.getElementById("texter");
var terminal = document.getElementById("terminal");

var git = 0;
var pw = false;
let pwd = false;
var commands = [];

// Mobile detection
var isMobile = window.innerWidth <= 768;

setTimeout(function() {
  // Show mobile or desktop banner
  var bannerToShow = isMobile ? banner_mobile : banner;
  loopLines(bannerToShow, "", 80);

  // Only auto-focus on desktop
  if (!isMobile) {
    textarea.focus();
  }
}, 100);

window.addEventListener("keyup", enterKey);

//init
textarea.value = "";
command.innerHTML = textarea.value;

function enterKey(e) {
  if (e.keyCode == 181) {
    document.location.reload(true);
  }
  if (pw) {
    let et = "*";
    let w = textarea.value.length;
    command.innerHTML = et.repeat(w);
    if (textarea.value === '42') {
      pwd = true;
    }
    if (pwd && e.keyCode == 13) {
      loopLines(secret, "color2 margin", 120);
      command.innerHTML = "";
      textarea.value = "";
      pwd = false;
      pw = false;
      liner.classList.remove("password");
    } else if (e.keyCode == 13) {
      var wrongPwMsgs = { en: "Wrong password", es: "Contrase\u00F1a incorrecta", de: "Falsches Passwort" };
      addLine(wrongPwMsgs[currentLang] || wrongPwMsgs.en, "error", 0);
      command.innerHTML = "";
      textarea.value = "";
      pw = false;
      liner.classList.remove("password");
    }
  } else {
    if (e.keyCode == 13) {
      commands.push(command.innerHTML);
      git = commands.length;
      addLine("visitor@pepearayao.com:~$ " + command.innerHTML, "no-animation", 0);
      commander(command.innerHTML.toLowerCase());
      command.innerHTML = "";
      textarea.value = "";
    }
    if (e.keyCode == 38 && git != 0) {
      git -= 1;
      textarea.value = commands[git];
      command.innerHTML = textarea.value;
    }
    if (e.keyCode == 40 && git != commands.length) {
      git += 1;
      if (commands[git] === undefined) {
        textarea.value = "";
      } else {
        textarea.value = commands[git];
      }
      command.innerHTML = textarea.value;
    }
  }
}

function commander(cmd) {
  switch (cmd.toLowerCase()) {
    case "help":
      loopLines(help, "color2 margin", 80);
      break;
    case "whois":
      loopLines(whois, "color2 margin", 80);
      break;
    case "whoami":
      loopLines(whoami, "color2 margin", 80);
      break;
    case "sudo":
      var sudoMsgs = { en: "Oh no, you're not admin...", es: "Oh no, no eres admin...", de: "Oh nein, du bist kein Admin..." };
      addLine(sudoMsgs[currentLang] || sudoMsgs.en, "color2", 80);
      setTimeout(function() {
        window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
      }, 1000);
      break;
    case "social":
      loopLines(social, "color2 margin", 80);
      break;
    case "secret":
      liner.classList.add("password");
      pw = true;
      break;
    case "projects":
      loopLines(projects, "color2 margin", 80);
      break;
    case "skills":
      loopLines(skills, "color2 margin", 80);
      break;
    case "password":
      var pwMsgs = {
        en: "<span class=\"inherit\"> Lol! You're joking, right? You're gonna have to try harder than that!</span>",
        es: "<span class=\"inherit\"> Jaja! Es en serio? Vas a tener que esforzarte m\u00E1s!</span>",
        de: "<span class=\"inherit\"> Haha! Das ist ein Witz, oder? Da musst du dir mehr M\u00FChe geben!</span>"
      };
      addLine(pwMsgs[currentLang] || pwMsgs.en, "error", 100);
      break;
    case "history":
      addLine("<br>", "", 0);
      loopLines(commands, "color2", 80);
      addLine("<br>", "command", 80 * commands.length + 50);
      break;
    case "email":
      var emailMsgs = { en: "Opening ", es: "Abriendo ", de: "\u00D6ffne " };
      addLine((emailMsgs[currentLang] || emailMsgs.en) + 'mailto:<a href="mailto:hola@pepearayao.com">hola@pepearayao.com</a>...', "color2", 80);
      newTab(email);
      break;
    case "clear":
      setTimeout(function() {
        terminal.innerHTML = '<a id="before"></a>';
        before = document.getElementById("before");
      }, 1);
      break;
    case "banner":
      loopLines(banner, "", 80);
      break;
    // socials
    case "linkedin":
      addLine("Opening LinkedIn...", "color2", 0);
      newTab(linkedin);
      break;
    case "github":
      addLine("Opening GitHub...", "color2", 0);
      newTab(github);
      break;
    case "resume":
      var resumeMsgs = { en: "Downloading resume...", es: "Descargando CV...", de: "Lebenslauf wird heruntergeladen..." };
      addLine(resumeMsgs[currentLang] || resumeMsgs.en, 'color2', 80);
      downloadFile('assets/pepe_araya_resume.pdf', 'Pepe_Araya_Resume.pdf');
      break;
    default:
      // Handle "lang en" / "lang es"
      if (cmd.startsWith("lang ")) {
        var lang = cmd.split(" ")[1];
        if (lang === "en" || lang === "es" || lang === "de") {
          switchLang(lang);
          var msgs = { en: "Language switched to English.", es: "Idioma cambiado a Espa\u00F1ol.", de: "Sprache auf Deutsch umgestellt." };
          addLine(msgs[lang], "color2", 80);
        } else {
          addLine("<span class=\"inherit\">Usage: lang en | lang es | lang de</span>", "error", 100);
        }
        break;
      }
      var errMsgs = {
        en: "<span class=\"inherit\">Command not found. For a list of commands, type <span class=\"command\">'help'</span>.</span>",
        es: "<span class=\"inherit\">Comando no encontrado. Para ver los comandos, escribe <span class=\"command\">'help'</span>.</span>",
        de: "<span class=\"inherit\">Befehl nicht gefunden. F\u00FCr eine Liste der Befehle, tippe <span class=\"command\">'help'</span>.</span>"
      };
      var errMsg = errMsgs[currentLang] || errMsgs.en;
      addLine(errMsg, "error", 100);
      break;
  }
}

function newTab(link) {
  setTimeout(function() {
    window.open(link, "_blank");
  }, 500);
}

function addLine(text, style, time) {
  var t = "";
  for (let i = 0; i < text.length; i++) {
    if (text.charAt(i) == " " && text.charAt(i + 1) == " ") {
      t += "&nbsp;&nbsp;";
      i++;
    } else {
      t += text.charAt(i);
    }
  }
  setTimeout(function() {
    var next = document.createElement("p");
    next.innerHTML = t;
    next.className = style;

    before.parentNode.insertBefore(next, before);

    if (isMobile) {
      terminal.scrollTop = terminal.scrollHeight;
    } else {
      window.scrollTo(0, document.body.offsetHeight);
    }
  }, time);
}

function loopLines(name, style, time) {
  name.forEach(function(item, index) {
    addLine(item, style, index * time);
  });
}

function downloadFile(url, fileName) {
  var link = document.createElement('a');
  link.href = url;
  link.download = fileName;
  link.click();
}

// Mobile interactions
if (isMobile) {
  // Wait for DOM to be ready
  window.addEventListener('DOMContentLoaded', function() {
    var commandDiv = document.getElementById('command');
    var toggleBtn = document.getElementById('toggle-keyboard');

    // Keyboard toggle button
    if (toggleBtn) {
      toggleBtn.addEventListener('click', function() {
        if (document.activeElement === textarea) {
          textarea.blur();
          this.textContent = '⌨️';
        } else {
          textarea.focus();
          this.textContent = '✕';
        }
      });
    }

    // Quick command buttons
    var quickCmds = document.querySelectorAll('.quick-cmd');
    quickCmds.forEach(function(btn) {
      btn.addEventListener('click', function() {
        var cmd = this.getAttribute('data-cmd');
        if (cmd) {
          commands.push(cmd);
          git = commands.length;
          addLine("visitor@pepearayao.com:~$ " + cmd, "no-animation", 0);
          commander(cmd.toLowerCase());
        }
      });
    });

    // Update toggle button icon when keyboard shows/hides
    textarea.addEventListener('focus', function() {
      if (toggleBtn) toggleBtn.textContent = '✕';
      // Scroll terminal to bottom
      setTimeout(function() {
        terminal.scrollTop = terminal.scrollHeight;
        // Ensure command is visible
        if (commandDiv) {
          commandDiv.scrollIntoView({ behavior: 'smooth', block: 'end' });
        }
      }, 300);
    });

    textarea.addEventListener('blur', function() {
      if (toggleBtn) toggleBtn.textContent = '⌨️';
    });
  });
}
