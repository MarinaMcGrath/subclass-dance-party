let allDancers = [];
let pushed = false;
let interval;


$(document).ready(function() {
  window.dancers = [];

  const danceFloors = ['gifs/Dancefloor.jpg', 'gifs/dancefloor2.jpg', 'gifs/dancefloor3.jpg'];
  const tunes = [sound1, sound2, sound3];

  let cur = 0;
  $('.change').click(function() {
    tunes[cur].pause();
    cur++;
    if (cur === danceFloors.length) {
      cur = 0;
    }
    tunes[cur].play();
    $('body').css({
      backgroundImage: `url(${danceFloors[cur]})`
    });
  });

  $('.lineUp').click(function(e) {
    let left = 10;
    allDancers.forEach(dancer => {
      dancer.setPosition(300, left);
      left += 100;
    });
  });

  $('.mouseMove').click(function(e) {
    if (!pushed) {
      pushed = true;
    } else {
      clearInterval(interval);
      pushed = false;
    }
  });

  $(window).on('mousemove', function(e) {
    if (pushed) {
      allDancers.forEach(dancer => {
        dancer.setPosition(e.clientY + 50, e.clientX + 50);
      });
    }
  })

  $('.addDancerButton').on('click', function(event) {
    var dancerMakerFunction = window[$(this).data('dancer-maker-function-name')];
    var dancer = new dancerMakerFunction(
      ((($("body").height()-200) - 50) * Math.random()) + 50,
      ((($("body").width()-100) - 100) * Math.random()) + 100,
      Math.random() * 1000
    );
    allDancers.push(dancer);
    $('body').append(dancer.$node);
  });
});

