// This code will run as soon as the page loads
window.onload = function() {

  $("#stop").on("click", stopwatch.stop);      // uses on click to stop workout
  $("#pause").on("click", stopwatch.pause);   //  displays during workout
  $("#startWorkout").on("click", stopwatch.start);   // uses on click when user starts workout
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

 $(document).ready(function(){
 var config = {
    apiKey: "AIzaSyAzda9qEPbmQKSdXCfY5ZjxaLjvS0lLZh4",
    authDomain: "burpees-and-stuff.firebaseapp.com",
    databaseURL: "https://burpees-and-stuff.firebaseio.com",
    projectId: "burpees-and-stuff",
    storageBucket: "",
    messagingSenderId: "135624626399"
  };

  firebase.initializeApp(config);
  console.log("loaded")
  var database = firebase.database();
  function writeUserData(score) {
    database.ref('scores/').push({
      score: score
    });
  }
  var score = counter;
var userscores = [];
userscores.push(score);
  
  for(var i=0; i<userscores.length; i++){
    writeUserData(userscores[i])
  }
  var scoretally = database.ref("scores/").orderByChild("score").limitToLast(3).once('value').then(function(snapshot){
    console.log(snapshot.val())
  });
  console.log(scoretally)
});
