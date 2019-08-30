let intro = `<span id="face"> 😄 </span>Josiah Wu<br>
<span style='color:#c5050c;;'>University of Wisconsin - Madison</span> <br>
that's right, I am a badger engineer 🦡<br>
I like coding, learning, and running.<br>"`,
  i = 0,
  isTag,
  text;

(function type() {
  text = intro.slice(0, ++i);
  if (text === intro) return;

  document.getElementById("intro").innerHTML = text;

  var char = text.slice(-1);
  if (char === "<") isTag = true;
  if (char === ">") isTag = false;

  if (isTag) return type();
  setTimeout(type, 25);
})();

