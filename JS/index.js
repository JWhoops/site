function load_intro() {
  // intro module
  let emoji = '<span id="face">Hi 😄</span>';
  let name = "Josiah Wu";
  let intro = `${emoji} I'm ${name} <br>
<span style='color:#c5050c;;'>University of Wisconsin - Madison</span> <br>
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
  update_intro("For front-end:");
  await pause(2000);
  update_intro("I built responsive website like this.");
  stage.slideDown("slow");
  await pause(1000);
  await dance_browser(false, 2.5);
  update_intro("And responsive fluid design.");
  await pause(1000);
  page.removeAttr("data");
  page.attr("data", "https://q835771840.github.io/Newsweek/");
  await pause(1500);
  await dance_browser(false, 3);
  await pause(1000);
  update_intro("I also know a little bit of UI design, like tear down design.");
  await pause(1500);
  page.attr("data", "https://q835771840.github.io/Teardown-Design/");
  await pause(3000);
  update_intro(
    "Since I am a full-stack developer, let me show you my back-end skills:"
  );
  await pause(3000);
  rotate_browser();
}

//make browser dance
function dance_browser(grow, sec) {
  return new Promise(resolve => {
    let flip_card = $(".flip-card");
    let w = flip_card.width();
    let inte = setInterval(() => {
      change_width(flip_card, w);
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

function update_intro(txt) {
  $("#intro").fadeOut("fast", function() {
    $(this).text('" ' + txt + ' "');
    $(this).fadeIn("fast");
  });
}

// wait for audiences
function pause(sec) {
  return new Promise(resolve => {
    setTimeout(function() {
      resolve();
    }, sec);
  });
}

function rotate_browser() {
  $(".flip-card-inner").css("transform", "rotateY(180deg)");
}
