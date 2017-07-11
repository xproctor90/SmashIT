
$(document).ready(function() {

var cardAmount;

	document.getElementById("startButtonOne").onclick = function() {startButtonOneFunction()};
  	function startButtonOneFunction() {
    	$(".one").hide();   
    	cardAmount = 0;
	}

	document.getElementById("startButtonTwo").onclick = function() {startButtonTwoFunction()};
  	function startButtonTwoFunction() {
    	$(".one").hide();   
    	cardAmount = 26;
    }

    document.getElementById("startButtonThree").onclick = function() {startButtonThreeFunction()};
  	function startButtonThreeFunction() {
    	$(".one").hide();   
    	cardAmount = 39;
    }

    document.getElementById("fullBody").onclick = function() {fullBodyFunction()};
  	function fullBodyFunction() {
    	$(".two").hide();   

    }

    document.getElementById("upperBody").onclick = function() {upperBodyFunction()};
  	function upperBodyFunction() {
    	$(".two").hide();   
    	// inchworms, diamond push-ups, push-up triceps, plank to push//
    }

     document.getElementById("lowerBody").onclick = function() {lowerBodyFunction()};
  	function lowerBodyFunction() {
    	$(".two").hide();   
    	// fire hydrent, single leg raises, squats, lunges, calf raises, curtsy lunges, hip raises//
    }

    document.getElementById("coreBody").onclick = function() {coreBodyFunction()};
  	function coreBodyFunction() {
    	$(".two").hide();   
    	// situps, toe touches, Russian Twist, V-ups, plank,//
    }

    document.getElementById("cardioBody").onclick = function() {cardioBodyFunction()};
  	function cardioBodyFunction() {
    	$(".two").hide();   
    	// burpee's, toe touches, Russian Twist, V-ups, plank,//
    }


document.getElementById("situpBody").onclick = function() {situpBodyFunction()};
  	function situpBodyFunction() {
  		$(".two").hide();  
    }


document.getElementById("startWorkout").onclick = function() {startWorkoutFunction()};
  	function startWorkoutFunction() {
  		document.getElementById("startWorkout").innerHTML = "Next Exercise"
  		$(".finalText").hide();  
    }


var suits = [ "hearts", "diams", "clubs", "spades" ];
var ranks = [ 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A" ];
var exercises = ["Sit Ups", "Push Ups", "Burpees", "Tuck Jumps"];


var deck = [];

$(init);

function init() {
  makeDeck();
  
  $("#startWorkout").click( function() {
    
    var myCard = drawCard();
    
    if( myCard ) {
      makeCard( myCard.suit, myCard.rank );
    } else {
      alert("You Have Completed Your Workout!");
    }
    
  });
  
}

function makeDeck() {
  
  deck = [];
  //for each type of suit
  for( var i = 0; i < suits.length; i++ ) {
    //and for each rank
    for( var j = 0; j < ranks.length; j++ ) {
      
      //make a card
      var card = {};
      card.suit = suits[i];
      card.rank = ranks[j];
      
      deck.push(card);
    }
  }
  
  console.log( "MADE A NEW DECK OF ", deck.length, " CARDS" );
  console.log( deck );
}

function drawCard() {
  
  var card;
  
  if( deck.length > cardAmount ) {
    
    var randIndex = Math.floor( Math.random() * deck.length );
    card = deck.splice( randIndex, 1 )[0];
  }
  alert(deck.length);
  alert(cardAmount);

  return card;
}

function makeCard( suit, rank ) {
  var card = $(".card.template").clone();
  
  card.removeClass("template");
  
  card.find(".rank").html(rank);
 
  if (rank === 2) {$("#textInfo").html("Complete TWO repetitions of");}
  if (rank === 3) {$("#textInfo").html("Complete THREE repetitions of");}
  if (rank === 4) {$("#textInfo").html("Complete FOUR repetitions of");}
  if (rank === 5) {$("#textInfo").html("Complete FIVE repetitions of");}
  if (rank === 6) {$("#textInfo").html("Complete SIX repetitions of");}
  if (rank === 7) {$("#textInfo").html("Complete SEVEN repetitions of");}
  if (rank === 8) {$("#textInfo").html("Complete EIGHT repetitions of");}
  if (rank === 9) {$("#textInfo").html("Complete NINE repetitions of");}
  if (rank === 'A') {$("#textInfo").html("Complete ELEVEN repeitions of");}
  if (rank === 10 || rank === 'J' || rank === 'Q' || rank === 'K') {$("#textInfo").html("Complete TEN repetitions of");}

  card.find(".suit").html("&"+suit+";");
  
  if( suit === "hearts" || suit === "diams" ) {
    card.addClass("red");
  }
  
  $("#cardHere").append(card);
}







}); 


