var cnt=document.getElementById("count");
var water=document.getElementById("water");
var percent=0;

var dropdownBtns = document.querySelectorAll("#dropdown-menu button");

document.getElementById("plus-button").addEventListener("click", function(){
  var x = document.getElementById("dropdown-menu");
  x.classList.toggle("hidden");
});

document.getElementById("btn-100ml").addEventListener("click", function(){
  if (percent < 100) {
    percent += 5;
    cnt.innerHTML = percent;
    water.style.transform='translate(0'+','+(100-percent)+'%)';
  }
});

document.getElementById("btn-250ml").addEventListener("click", function(){
  if (percent < 100) {
    percent += 13;
    cnt.innerHTML = percent;
    water.style.transform='translate(0'+','+(100-percent)+'%)';
  }
});

document.getElementById("btn-500ml").addEventListener("click", function(){
  if (percent < 100) {
    percent += 25;
    cnt.innerHTML = percent;
    water.style.transform='translate(0'+','+(100-percent)+'%)';
  }
});

document.getElementById("btn-1000ml").addEventListener("click", function(){
  if (percent < 100) {
    percent += 50;
    cnt.innerHTML = percent;
    water.style.transform='translate(0'+','+(100-percent)+'%)';
  }
});

document.getElementById("btn-close").addEventListener("click", function(){
  var x = document.getElementById("dropdown-menu");
  x.classList.toggle("hidden");
});

document.getElementById("btn-clear").addEventListener("click", function(){
    percent = 0;
    cnt.innerHTML = percent;
    water.style.transform='translate(0'+','+(100-percent)+'%)';
});










/* for (var i = 0; i < dropdownBtns.length; i++) {
  dropdownBtns[i].addEventListener("click", function(event) {
    event.stopPropagation();
    var x = document.getElementById("dropdown-menu");
    x.classList.toggle("hidden");
  });
} */