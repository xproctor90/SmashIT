
// This code will run as soon as the page loads
window.onload = function() {

  $("#stop").on("click", stopwatch.stop);      // uses on click to stop workout
  $("#pause").on("click", stopwatch.pause);   //  displays during workout
  $("#start").on("click", stopwatch.start);   // uses on click when user starts workout
};


var counter;

var clockRunning = false;

var stopwatch = {

  time: 0,
  pause: function() {
    clearInterval(counter);
    clockRunning = false;
  
  },

  start: function() {
    if (!clockRunning) {
        counter = setInterval(stopwatch.count, 1000);
        clockRunning = true;
    }
  },

  stop: function() {
    clearInterval(counter);
    clockRunning = false;
  },
  
  count: function() {
    stopwatch.time++;
    var converted = stopwatch.timeConverter(stopwatch.time);
    console.log(converted);
    $("#display").html(converted);
  },

  timeConverter: function(t) {
    var minutes = Math.floor(t / 60);
    var seconds = t - (minutes * 60);

    if (seconds < 10) {
      seconds = "0" + seconds;
    }

    if (minutes === 0) {
      minutes = "00";
    }
    else if (minutes < 10) {
      minutes = "0" + minutes;
    }

    return minutes + ":" + seconds;
  }
};


