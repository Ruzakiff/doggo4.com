function move() {
  var elem = document.getElementById("myBar");
  var text = document.getElementById('d');
  text.style.opacity = 0;
  var width = 1;
  var id = setInterval(frame, 10);

  function frame() {
    if (width >= 100) {
      var text = document.getElementById('d');
      text.style.transition = "opacity 1s linear 0s";
      text.style.opacity = 1;
      clearInterval(id);
    } else {
      width++;
      elem.style.width = width + '%';
      elem.innerHTML = width * 1 + '% Dumb';
      if(width%10==0){
        elem.style.backgroundColor=getRandomColor();
      }
    }
  }
}
function getRandomColor() {
var letters = '0123456789ABCDEF';
var color = '#';
for (var i = 0; i < 6; i++) {
color += letters[Math.floor(Math.random() * 16)];
}
return color;
}
