function load_intro() {
  // intro module
  let emoji = '<span id="face">😄</span>';
  let name = "Josiah Wu";
  let intro = `${emoji} ${name} <br>
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
    $(this).hide();
    walk_through();
  });
}
load_intro();

function walk_through() {
  let intro = $("#intro");
  let stage = $("#stage");
  update_intro("I can make website responsive");
  scrollTo("#stage");
  stage.slideDown("slow");
  dance_browser(false);
  function update_intro(txt) {
    intro.fadeOut("fast", function() {
      $(this).text('" ' + txt + ' "');
      $(this).fadeIn("fast");
    });
  }
}

function scrollTo(selector) {
  document.querySelector(selector).scrollIntoView({ behavior: "smooth" });
}

//make browser dance
function dance_browser(grow) {
  let flip_card = $(".flip-card");
  let w = flip_card.width();
  let inte = setInterval(() => {
    change_width(flip_card, w);
    if (grow && w > 1200) clearInterval(inte);
    else if (!grow && w < 375) {
      clearInterval(inte);
      dance_browser(true);
    }
    grow ? (w += 2) : (w -= 2);
  }, 1);
  function change_width(ele, width) {
    ele.width(width + "px");
  }
}
