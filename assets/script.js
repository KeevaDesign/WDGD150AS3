//? *********** Calculator ***********//
//? *********** Calculator ***********//
//? *********** Calculator ***********//

document.querySelector("button").addEventListener("click", function () {
  var Year = document.getElementById("catYear").value;
  var Month = document.getElementById("catMonth").value;

  var yearValue = parseInt(Year, 10) || 0;
  var monthValue = parseInt(Month, 10) || 0;

  // Convert the input into months
  var cat_toMonth = yearValue * 12 + monthValue;

  function catAgeToHumanAge(months) {
    if (months <= 1) return 1;
    if (months <= 2) return 2;
    if (months <= 3) return 4;
    if (months <= 4) return 6;
    if (months <= 5) return 8;
    if (months <= 6) return 9;
    if (months <= 7) return 10;
    if (months <= 8) return 11;
    if (months <= 9) return 12;
    if (months <= 10) return 13;
    if (months <= 11) return 14;
    if (months <= 12) return 15;
    if (months <= 24) return 25;
    if (months <= 36) return 29;
    if (months <= 48) return 33;
    if (months <= 60) return 37;
    if (months <= 72) return 41;
    if (months <= 84) return 45;
    if (months <= 96) return 49;
    if (months <= 108) return 53;
    if (months <= 120) return 57;
    if (months <= 132) return 61;
    if (months <= 144) return 65;
    if (months <= 156) return 69;
    if (months <= 168) return 73;
    if (months <= 180) return 77;
    if (months <= 192) return 81;
    if (months <= 204) return 85;
    if (months <= 216) return 89;
    if (months <= 228) return 93;
    if (months <= 240) return 97;
    return "Older than 97 in human years";
  }

  var humanAge = catAgeToHumanAge(cat_toMonth);

  // document.getElementById(
  //   "showTotalMonth"
  // ).textContent = `The cat is ${cat_toMonth} months old.`;

  var message;

  if (cat_toMonth <= 12) {
    message = "Kitten";
  } else if (cat_toMonth > 12 && cat_toMonth <= 120) {
    message = "Adult";
  } else {
    message = "Senior";
  }

  drawCat();
  drawBadge(message, humanAge);

  // document.getElementById("humanAge").textContent = humanAges;

  // document.getElementById("lifeStage").textContent = message;
  // showCatAnimation(message);
});

// ? ************** Draw the Cat on Canvas ************** //
// ? ************** Draw the Cat on Canvas ************** //
// ? ************** Draw the Cat on Canvas ************** //

var canvas = document.getElementById("catStageAnimation");
var ctx = canvas.getContext("2d");

// set colors for changing color of the cat head every 2s
var colors = ["#D7D3BC", "#E7DFD4", "#C7B198", "#F5C17A"];
var currentColorIndex = 0;

function drawCat(color) {
  // Clear the entire canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // To draw the cat's head
  drawRoundedRect(100, 100, 200, 150, 80, 80, 60, 60, color); // X, Y, width, height

  // Draw mouth
  ctx.beginPath();
  ctx.arc(192, 200, 10, Math.PI * 0.2, Math.PI * 0.8);
  ctx.strokeStyle = "black";
  ctx.stroke();
  ctx.closePath();

  ctx.beginPath();
  ctx.arc(208, 200, 10, Math.PI * 0.2, Math.PI * 0.8);
  ctx.strokeStyle = "black";
  ctx.stroke();
  ctx.closePath();

  // To draw the cat's eyes
  drawCircle(145, 180, 8, "black"); // Left eye
  drawCircle(255, 180, 8, "black"); // Right eye

  // To draw the cat's eyes
  function drawCircle(x, y, radius, color) {
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.fillStyle = color;
    ctx.fill();
    ctx.closePath();
  }

  // To draw the cat's ears
  drawTriangle(110, 140, 110, 90, 140, 112, "#706159"); // Left ear
  drawTriangle(260, 110, 290, 90, 290, 140, "#000000"); // Right ear

  // To draw the cat's ears
  function drawTriangle(x1, y1, x2, y2, x3, y3, color) {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.lineTo(x3, y3);
    ctx.fillStyle = color;
    ctx.fill();
    ctx.closePath();
  }

  // To draw the cat's head
  function drawRoundedRect(
    x,
    y,
    width,
    height,
    radiusTL,
    radiusTR,
    radiusBR,
    radiusBL,
    color
  ) {
    ctx.beginPath();
    ctx.moveTo(x + radiusTL, y);
    ctx.arcTo(x + width, y, x + width, y + height, radiusTR);
    ctx.arcTo(x + width, y + height, x, y + height, radiusBR);
    ctx.arcTo(x, y + height, x, y, radiusBL);
    ctx.arcTo(x, y, x + width, y, radiusTL);
    ctx.fillStyle = color;
    ctx.fill();
    ctx.closePath();
  }

  // To draw the cat's head nose
  drawRoundedTriangle(190, 180, 210, 180, 200, 193, 2, "#706159");
  // To draw the cat's head nose
  function drawRoundedTriangle(x1, y1, x2, y2, x3, y3, radius, color) {
    ctx.beginPath();
    ctx.moveTo(x1 + radius, y1);
    ctx.arcTo(x2, y2, x3, y3, radius);
    ctx.arcTo(x3, y3, x1, y1, radius);
    ctx.arcTo(x1, y1, x2, y2, radius);
    ctx.closePath();
    ctx.fillStyle = color;
    ctx.fill();
  }

  ctx.font = "40px Josefin Sans";
  ctx.fillStyle = "black";
  ctx.textAlign = "center";
  ctx.fillText("Cat Age Calculator", 200, 40);
}

function changeColor() {
  currentColorIndex = (currentColorIndex + 1) % colors.length; // Cycle through the color array
  drawCat(colors[currentColorIndex]); // Pass the new color to drawCat
}

// Change the cat's color every 2 seconds
setInterval(changeColor, 2000);

drawCat(colors[currentColorIndex]);

// ? ************** Result Badge ************** //
// ? ************** Result Badge ************** //
// ? ************** Result Badge ************** //

var canvasBadge = document.getElementById("badgeCanvas");
var ctxBadge = canvasBadge.getContext("2d");

var radius = 120;
var growing = true;
var animationSpeed = 1;

function drawBadge(lifeStage, humanAge) {
  var centerX = canvasBadge.width / 2;
  var centerY = canvasBadge.height / 2;

  ctxBadge.clearRect(0, 0, canvasBadge.width, canvasBadge.height);

  // change radius and direction for animation
  if (growing) {
    radius += animationSpeed;
    if (radius > 120) growing = false;
  } else {
    radius -= animationSpeed;
    if (radius < 100) growing = true;
  }

  // Drawing the badge
  ctxBadge.beginPath();
  ctxBadge.arc(centerX, centerY, radius, 0, 2 * Math.PI);
  ctxBadge.fillStyle = "#FFE85F";
  ctxBadge.fill();
  ctxBadge.lineWidth = 5;
  ctxBadge.strokeStyle = "#E0CD6C";
  ctxBadge.stroke();

  // Showing text
  ctxBadge.font = "26px Josefin Sans";
  ctxBadge.fillStyle = "black";
  ctxBadge.textAlign = "center";
  ctxBadge.fillText(lifeStage, centerX, centerY - 10);
  ctxBadge.font = "24px Josefin Sans";
  ctxBadge.fillText(`Human Age: ${humanAge}`, centerX, centerY + 20);

  requestAnimationFrame(() => drawBadge(lifeStage, humanAge));
}

// adding a mouse effect when mouse over and left
canvasBadge.addEventListener("mouseenter", function () {
  animationSpeed = 3; // Increase speed when mouse enters
});

canvasBadge.addEventListener("mouseleave", function () {
  animationSpeed = 1; // Reset speed when mouse leaves
});

// Reset the input field to empty
document.getElementById("resetButton").addEventListener("click", function () {
  document.getElementById("catYear").value = ""; // Set to default or empty
  document.getElementById("catMonth").value = ""; // Set to default or empty

  var canvasBadge = document.getElementById("badgeCanvas");
  var ctxBadge = canvasBadge.getContext("2d");
  ctxBadge.clearRect(0, 0, canvasBadge.width, canvasBadge.height);
});
