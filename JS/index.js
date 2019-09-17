function load_intro() {
  // intro module
  let stop = false;
  let intro = `Hi 😄<br> I'm Josiah Wu <br>
A senior student in University of Wisconsin - Madison <br>
That's right, I am a badger engineer 🦡<br>
I like coding, learning, and running.<br>Current Status:
<br> Actively looking for a full time software engineering
position for 2020<br> Check my <a style="color:blue;" 
target="_blank" href="./meta/Josiah_Wu.pdf">Resume</a> for contact info.😄
"`,
    i = 0,
    isTag,
    text;
  (function type() {
    if (stop) return;
    text = intro.slice(0, ++i);
    if (text === intro) return;
    $("#intro").html(text);
    var char = text.slice(-1);
    if (char === "<") isTag = true;
    if (char === ">") isTag = false;

    if (isTag) return type();
    setTimeout(type, 25);
  })();

  $("#start_button").click(function() {
    $(this).fadeOut("fast");
    walk_through();
    stop = true;
  });
  // wake server
  $.get(
    "https://q835771840.github.io/Madmap/views/result.html?sValue=Microwave"
  );
}

load_intro();

async function walk_through() {
  let stage = $("#stage");
  let browser = $("#browser");
  let browser_content = $("#browser_content");
  let intro = $("#intro");
  let browser_back = $("#card-container");
  update_intro("For front-end:");
  await pause(2000);
  update_intro("I built responsive website like this.");
  browser_content.attr("src", "https://q835771840.github.io/The-Next-Web/");
  stage.slideDown("slow");
  await pause(1000);
  browser.css("width", "375px");
  await pause(4000);
  browser.css("width", "100%");
  await pause(4000);
  update_intro("And responsive fluid design.");
  await pause(1000);
  browser_content.attr("src", "https://q835771840.github.io/Newsweek/");
  await pause(1500);
  browser.css("width", "375px");
  await pause(4000);
  browser.css("width", "100%");
  await pause(5000);
  update_intro("I also know a little bit of UI design, like tear down design.");
  await pause(1500);
  browser_content.attr("src", "https://q835771840.github.io/Teardown-Design/");
  await pause(3000);
  browser_content.attr("src", "");
  update_intro(
    "Since I am a full-stack developer, I also know back-end skills, here is my project list."
  );
  browser_back.append(get_all_skills());
  browser_back.css("width", "630px");
  $("#browser_header").remove();
  rotate_browser();

  // utility function
  function update_intro(txt) {
    intro.fadeOut("fast", function() {
      $(this).text('" ' + txt + ' "');
      $(this).fadeIn("fast");
    });
  }

  function rotate_browser() {
    $(".flip-card-inner").css("transform", "rotateY(180deg)");
  }
}

// wait for audiences
function pause(sec) {
  return new Promise(resolve => {
    setTimeout(function() {
      resolve();
    }, sec);
  });
}

function get_all_skills() {
  let skills = [
    {
      name: "MadMap",
      description: `Since UW-Madison is huge, I built and
      designed this website that can help new students of
      UW-Madison find nearby utilities like Microwave, Printer,
      and Lab.`,
      stack: "HTML, CSS, Javascript, Node.js, Express, MongoDB, and Heroku",
      link: "https://q835771840.github.io/Madmap/"
    },
    {
      name: "Jianshu",
      description: `A web application I built to practice my React and Redux
      development skills.`,
      stack: "React and Redux",
      link: "https://github.com/q835771840/Jianshu"
    },
    {
      name: "Jhin",
      description: `A grid-based CSS framework I created for responsive design.`,
      stack: "SASS and CSS Flex-box",
      link: "https://github.com/q835771840/jHin"
    },
    {
      name: "Yelp Camp",
      description: `A web application to practice my full stack development skill.`,
      stack: "Express.js, MongoDB, and Node.js, passport.js",
      link: "https://github.com/q835771840/yelp-camp"
    },
    {
      name: "Neck Guard",
      description: `A web-based mobile application that can help people protect their neck.`,
      stack: "MUI, Javascript, HTML, CSS",
      link: "https://github.com/q835771840/NeckG"
    }
  ];

  return skills
    .map(s => {
      return skill(s);
    })
    .join("");
}

function skill(obj) {
  return `
  <div class="card">
  <div class="content">
    <div class="header">${obj.name}</div>
    <div class="description">
      Project Description: ${obj.description}
    </div>
    <div id="tech-stack">
      Tech Stack: ${obj.stack}
    </div>
  </div>
  <a target='_blank' href="${obj.link}">
    <div id="skill-button" class="ui bottom attached button">
      <i class="github icon"></i>
      Visit Project
    </div>
  </a>
</div>
  `;
}
