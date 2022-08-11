var r, g, b, color1, color2, exclude_box;
var count = 0;
var interval;

function playGame(event) {

  var clicked = event.target.id;
  if (clicked == "box" + exclude_box) {
    count++;
    document.getElementById("point").textContent = "Points :" + count;
    changeColor();
  } else {
    window.alert("Game Over");
    count = 0;
    document.getElementById("point").textContent = "Points :" + count;
    location.reload();
  }
}

function changeColor() {
  r = Math.floor(Math.random() * 256);
  g = Math.floor(Math.random() * 256);
  b = Math.floor(Math.random() * 256);
  color1 = "rgb(" + r + " , " + g + " , " + b + ")";
  color2 =
    "rgb(" +
    Math.floor(Math.random() * 256) +
    " , " +
    Math.floor(Math.random() * 256) +
    " , " +
    Math.floor(Math.random() * 256) +
    ")";

  exclude_box = Math.floor(Math.random() * 9 + 1);

  for (var i = 1; i <= 9; i++) {
    if (i == exclude_box) {
      continue;
    } else {
      var box_id = "box" + i;
      document.getElementById(box_id).style.backgroundColor = color1;
    }

    document.getElementById("box" + exclude_box).style.backgroundColor = color2;
  }
}