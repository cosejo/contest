//# Place all the behaviors and hooks related to the matching controller here.
//# All this logic will automatically be available in application.js.
//# You can use CoffeeScript in this file: http://coffeescript.org/

var options = ["Batman", "Linterna Verde", "Flash", "Capitán América"];

var startAngle = 0;
var arc = Math.PI / (options.length / 2);
var spinTimeout = null;

var spinArcStart = 10;
var spinTime = 0;
var spinTimeTotal = 0;

var ctx;


$( document ).ready(function() {
    document.getElementById("spin").addEventListener("click", spin);
    drawRouletteWheel();
});



function byte2Hex(n) {
  var nybHexString = "0123456789ABCDEF";
  return String(nybHexString.substr((n >> 4) & 0x0F, 1)) + nybHexString.substr(n & 0x0F, 1);
}

function RGB2Color(r, g, b) {
  return '#' + byte2Hex(r) + byte2Hex(g) + byte2Hex(b);
}

function getColor(item, maxitem) {
  // var phase = 0;
  // var center = 128;
  // var width = 127;
  // var frequency = Math.PI * 2 / maxitem;

  // red = Math.sin(frequency * item + 2 + phase) * width + center;
  // green = Math.sin(frequency * item + 0 + phase) * width + center;
  // blue = Math.sin(frequency * item + 4 + phase) * width + center;

  red = 0;
  green = 0;
  blue = 0;

  switch (item) {
	  case 0:
		  red = 255;
		  green = 255;
		  blue = 13;	  	
	    break;
	  case 1:
		  red = 17;
		  green = 91;
		  blue = 31;
	    break;
	  case 2:
	    	red = 144;
		  green = 0;
		  blue = 27;
	    break;
	  case 3:
	      red = 25;
		  green = 25;
		  blue = 112;
	    break;
	  default:
	    break;
	}
  return RGB2Color(red, green, blue);
}

function drawRouletteWheel() {
  var canvas = document.getElementById("canvas");
  if (canvas.getContext) {
    var outsideRadius = 200;
    var textRadius = 160;
    var insideRadius = 125;

    ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, 500, 500);

    ctx.strokeStyle = "black";
    ctx.lineWidth = 2;

    ctx.font = 'bold 12px Helvetica, Arial';

    for (var i = 0; i < options.length; i++) {
      var angle = startAngle + i * arc;
      //ctx.fillStyle = colors[i];
      ctx.fillStyle = getColor(i, options.length);

      ctx.beginPath();
      ctx.arc(250, 250, outsideRadius, angle, angle + arc, false);
      ctx.arc(250, 250, insideRadius, angle + arc, angle, true);
      ctx.stroke();
      ctx.fill();

      ctx.save();
      ctx.shadowOffsetX = -1;
      ctx.shadowOffsetY = -1;
      ctx.shadowBlur = 0;
      // ctx.shadowColor = "rgb(220,220,220)";
      ctx.fillStyle = "gray";
      ctx.translate(250 + Math.cos(angle + arc / 2) * textRadius,
        250 + Math.sin(angle + arc / 2) * textRadius);
      ctx.rotate(angle + arc / 2 + Math.PI / 2);
      var text = options[i];
      ctx.fillText(text, -ctx.measureText(text).width / 2, 0);
      ctx.restore();
    }

    //Arrow
    ctx.fillStyle = "white";
    ctx.beginPath();
    ctx.moveTo(250 - 4, 250 - (outsideRadius + 5));
    ctx.lineTo(250 + 4, 250 - (outsideRadius + 5));
    ctx.lineTo(250 + 4, 250 - (outsideRadius - 5));
    ctx.lineTo(250 + 9, 250 - (outsideRadius - 5));
    ctx.lineTo(250 + 0, 250 - (outsideRadius - 13));
    ctx.lineTo(250 - 9, 250 - (outsideRadius - 5));
    ctx.lineTo(250 - 4, 250 - (outsideRadius - 5));
    ctx.lineTo(250 - 4, 250 - (outsideRadius + 5));
    ctx.fill();
  }
}

function spin() {
  spinAngleStart = 1 * 10 + 10;
  spinTime = 0;
  spinTimeTotal = 400 * 3 + 4 * 1000;
  // 100 - 50 - 200 - 400
  rotateWheel();
}

function rotateWheel() {
  spinTime += 10;
  if (spinTime == 2200) {
  	$.ajax({
			url: 'dice/throw',
			method: 'get',
			beforeSend: function(){
				// $("#loading").fadeIn(100);
    //   			$("#loading-background").fadeIn(100);
			},
			success: function(data) {
				window.location.replace(data.response);
		    }
		});
  }
  if (spinTime >= spinTimeTotal) {
    stopRotateWheel();
    return;
  }
  var spinAngle = spinAngleStart - easeOut(spinTime, 0, spinAngleStart, spinTimeTotal);
  startAngle += (spinAngle * Math.PI / 180);
  drawRouletteWheel();
  spinTimeout = setTimeout('rotateWheel()', 10);
}

function stopRotateWheel() {
  clearTimeout(spinTimeout);
  var degrees = startAngle * 180 / Math.PI + 90;
  var arcd = arc * 180 / Math.PI;
  var index = Math.floor((360 - degrees % 360) / arcd);
  ctx.save();
  ctx.font = 'bold 30px Helvetica, Arial';
  var text = options[index]
  ctx.fillText(text, 250 - ctx.measureText(text).width / 2, 250 + 10);
  ctx.restore();
}

function easeOut(t, b, c, d) {
  var ts = (t /= d) * t;
  var tc = ts * t;
  return b + c * (tc + -3 * ts + 3 * t);
}



