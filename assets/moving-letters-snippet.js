// http://tobiasahlin.com/moving-letters/#12

var heading = document.querySelector('.object__heading');
var newContent = heading.textContent.replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>");
heading.innerHtml = newContent;

anime.timeline({loop: true})
  .add({
    targets: '.object__heading .letter',
    translateX: [40,0],
    translateZ: 0,
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 1200,
    delay: function(el, i) {
      return 500 + 30 * i;
    }
  }).add({
    targets: '.object__heading .letter',
    translateX: [0,-30],
    opacity: [1,0],
    easing: "easeInExpo",
    duration: 1100,
    delay: function(el, i) {
      return 100 + 30 * i;
    }
  });