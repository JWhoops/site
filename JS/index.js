function load_intro() {
  // intro module
  let emoji = "Hi 😄<br>";
  let name = "Josiah Wu";
  let intro = `${emoji} I'm ${name} <br>
University of Wisconsin - Madison <br>
that's right, I am a badger engineer 🦡<br>
I like coding, learning, and running."`,
    i = 0,
    isTag,
    text;
  (function type() {
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
  });
}
load_intro();

async function walk_through() {
  let stage = $("#stage");
  let page = $("#browser_page");
  let intro = $("#intro");
  let browser_back = $("#browser_back");
  let browser_front = $("#browser_front");
  update_intro("For front-end:");
  await pause(2000);
  update_intro("I built responsive website like this.");
  stage.slideDown("slow");
  await pause(1000);
  await dancing_browser(false, 2);
  update_intro("And responsive fluid design.");
  await pause(1000);
  page.removeAttr("data");
  page.attr("data", "https://q835771840.github.io/Newsweek/");
  await pause(1500);
  await dancing_browser(false, 2);
  await pause(1000);
  update_intro("I also know a little bit of UI design, like tear down design.");
  await pause(1500);
  page.attr("data", "https://q835771840.github.io/Teardown-Design/");
  await pause(3000);
  page.attr("data", "");
  update_intro(
    "Since I am a full-stack developer, I also know back-end skills, here is my skill list."
  );
  stage.css("width", "600px");
  stage.css("border", "none");
  skill_list();
  await pause(2000);
  rotate_browser();

  function skill_list() {
    browser_front.append(skill_col(["HTML", "CSS", "JavaScript", "ES6"]));
    browser_front.append(skill_col(["Bootstrap", "Semantic UI", "SASS"]));
    browser_front.append(skill_col(["React", "Redux", "Optimization"]));
    browser_back.append(skill_col(["Node.js", "Java", "PHP", "Ruby"]));
    browser_back.append(skill_col(["Express", "Ruby On Rails"]));
    browser_back.append(skill_col(["MongoDB", "MySQL", "SQLite"]));
  }

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

  //make browser dance
  function dancing_browser(grow, sec) {
    return new Promise(resolve => {
      let w = stage.width();
      let inte = setInterval(() => {
        change_width(stage, w);
        if (grow && w > 1200) {
          clearInterval(inte);
          resolve(1);
        } else if (!grow && w < 375) {
          grow = true;
        }
        grow ? (w += sec) : (w -= sec);
      }, 1);
    });
    function change_width(ele, width) {
      ele.width(width + "px");
    }
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

function skill_col(skill_cards) {
  let sc = '<div class="column">';
  sc +=
    skill_cards
      .map(n => {
        return skill(n);
      })
      .join("") + "</div>";
  return sc;
}

function skill(name) {
  return `
  <div class="card">
      <h3 class="card_title">
        ${name}
      </h3>
  </div>
  `;
}
