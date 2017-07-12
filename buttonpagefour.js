
$(document).ready(function() {

$(".two").hide();  
$(".three").hide();  
var finalExercise = [];


var cardAmount;
var firstExercise;
var secondExercise;
var thirdExercise;
var fourthExercise;
var counter = 0;

	document.getElementById("startButtonOne").onclick = function() {startButtonOneFunction()};
  	function startButtonOneFunction() {
    	$(".one").hide();   
    	$(".two").show();
    	cardAmount = 0;
	}

	document.getElementById("startButtonTwo").onclick = function() {startButtonTwoFunction()};
  	function startButtonTwoFunction() {
    	$(".one").hide();
    	$(".two").show();   
    	cardAmount = 26;
    }

    document.getElementById("startButtonThree").onclick = function() {startButtonThreeFunction()};
  	function startButtonThreeFunction() {
    	$(".one").hide();
    	$(".two").show();   
    	cardAmount = 39;
    }

    document.getElementById("fullBody").onclick = function() {fullBodyFunction()};
  	function fullBodyFunction() {
  		$(".two").hide(); 
  		$(".three").show();
  		document.getElementById("exerciseOne").innerHTML = "Sit-Ups"
  		document.getElementById("exerciseOne").onclick = function() {exerciseOneFunction()};
  		function exerciseOneFunction(){
  			var exercise = "Sit-Ups"
  			finalExercise.push(exercise);
  			console.log(exercise);
  			console.log(finalExercise);
  			counter++;
  			console.log(counter);

  		}
  		document.getElementById("exerciseTwo").innerHTML = "Tuck Jumps"
  		document.getElementById("exerciseTwo").onclick = function() {exerciseTwoFunction()};
  		function exerciseTwoFunction(){
  			var exercise = "Tuck Jumps"
  			finalExercise.push(exercise);
  			console.log(exercise);
  			console.log(finalExercise);
  			counter++;
  			console.log(counter);
  			
  		}

  		document.getElementById("exerciseThree").innerHTML = "Plank To Push"
  		document.getElementById("exerciseThree").onclick = function() {exerciseThreeFunction()};
  		function exerciseThreeFunction(){
  			var exercise = "Plank To Push"
  			finalExercise.push(exercise);
  			console.log(exercise);
  			console.log(finalExercise);
  			counter++;
  			console.log(counter);
  			
  		}	

  		document.getElementById("exerciseFour").innerHTML = "Burpees"
  		document.getElementById("exerciseFour").onclick = function() {exerciseFourFunction()};
  		function exerciseFourFunction(){
  			var exercise = "Burpees"
  			finalExercise.push(exercise);
  			console.log(exercise);
  			console.log(finalExercise);
  			counter++;
  			console.log(counter);
  			
  	}	
  		document.getElementById("exerciseFive").innerHTML = "Single Leg Raises"
  		document.getElementById("exerciseSix").innerHTML = "V-Ups"
  		document.getElementById("exerciseSeven").innerHTML = "Inchworms"
  		document.getElementById("exerciseEight").innerHTML = "Squats"
  		document.getElementById("exerciseNine").innerHTML = "Russian Twist"
  		document.getElementById("exerciseTen").innerHTML = "Toe Touches"
  		document.getElementById("exerciseEleven").innerHTML = "Single Leg Raises"
  		document.getElementById("exerciseTwelve").innerHTML = "Push-Ups"
  		document.getElementById("exerciseThirteen").innerHTML = "Triceps On Chair"
  		document.getElementById("exerciseFourteen").innerHTML = "Plank"
  		document.getElementById("exerciseFifteen").innerHTML = "Fire Hyrant"
  		document.getElementById("exerciseSixteen").innerHTML = "Diamond Push-Up"
  		document.getElementById("exerciseSeventeen").innerHTML = "Calf Raises"
  		document.getElementById("exerciseEighteen").innerHTML = "Up-Downs"
  		document.getElementById("exerciseNineteen").innerHTML = "Hip Raises"
  		document.getElementById("exerciseTwenty").innerHTML = "Skier Jumps"
  		document.getElementById("exerciseTone").innerHTML = "Mountain Climbers"
  		document.getElementById("exerciseTtwo").innerHTML = "Lunges"
  		document.getElementById("exerciseTthree").innerHTML = "Hip Raises"
  		document.getElementById("exerciseTfour").innerHTML = "Curtsy Lunges"  

    }

    document.getElementById("upperBody").onclick = function() {upperBodyFunction()};
  	function upperBodyFunction() {
  		$(".long").hide();
  		$(".three").show();
  		$(".two").hide(); 
  		document.getElementById("exerciseOne").innerHTML = "Push-Ups"
  		document.getElementById("exerciseTwo").innerHTML = "Triceps On Chair"
  		document.getElementById("exerciseThree").innerHTML = "Plank To Push"
  		document.getElementById("exerciseFour").innerHTML = "Diamond Push-Ups"
  		document.getElementById("exerciseFive").innerHTML = "Inchworm"
  		document.getElementById("exerciseSix").innerHTML = "Burpees"  
    	// inchworms, diamond push-ups, push-up triceps, plank to push//
    }

     document.getElementById("lowerBody").onclick = function() {lowerBodyFunction()};
  	function lowerBodyFunction() {
  		$(".long").hide();
  		$(".two").hide(); 
  		$(".three").show();
  		document.getElementById("exerciseOne").innerHTML = "Single Leg Raises"
  		document.getElementById("exerciseTwo").innerHTML = "Tuck Jumps"
  		document.getElementById("exerciseThree").innerHTML = "Curtsy Lunges"
  		document.getElementById("exerciseFour").innerHTML = "Calf Raises"
  		document.getElementById("exerciseFive").innerHTML = "Lunges"
  		document.getElementById("exerciseSix").innerHTML = "Squats"  
    	// fire hydrent, single leg raises, squats, lunges, calf raises, curtsy lunges, hip raises//
    }

    document.getElementById("coreBody").onclick = function() {coreBodyFunction()};
  	function coreBodyFunction() {
  		$(".long").hide();
  		$(".two").hide(); 
  		$(".three").show();
  		document.getElementById("exerciseOne").innerHTML = "Sit-Ups"
  		document.getElementById("exerciseTwo").innerHTML = "V-Ups"
  		document.getElementById("exerciseThree").innerHTML = "Plank To Push"
  		document.getElementById("exerciseFour").innerHTML = "Toe Touches"
  		document.getElementById("exerciseFive").innerHTML = "Russian Twist"
  		document.getElementById("exerciseSix").innerHTML = "Burpees"
    	// situps, toe touches, Russian Twist, V-ups, plank,//
    }

    document.getElementById("cardioBody").onclick = function() {cardioBodyFunction()};
  	function cardioBodyFunction() {
  		$(".long").hide();
  		$(".two").hide(); 
  		$(".three").show();
  		document.getElementById("exerciseOne").innerHTML = "Burpees"
  		document.getElementById("exerciseTwo").innerHTML = "Tuck Jumps"
  		document.getElementById("exerciseThree").innerHTML = "Montain Climbers"
  		document.getElementById("exerciseFour").innerHTML = "Skier Jumps"
  		document.getElementById("exerciseFive").innerHTML = "Curtsy Lunges"
  		document.getElementById("exerciseSix").innerHTML = "Up-Downs"  
    	// burpee's, //
    }


document.getElementById("situpBody").onclick = function() {situpBodyFunction()};
  	function situpBodyFunction() {
  		$(".two").hide();  
    }


document.getElementById("startWorkout").onclick = function() {startWorkoutFunction()};
  	function startWorkoutFunction() {
  		$(".three").hide();
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
  if (suit === 'hearts') {$("#textInfoTwo").html("HEARTS");}
  if (suit === 'diams') {$("#textInfoTwo").html("DIAMONDS");}
  if (suit === 'clubs') {$("#textInfoTwo").html("CLUBS");}
  if (suit === 'spades') {$("#textInfoTwo").html("SPADES");}

  card.find(".suit").html("&"+suit+";");
  
  if( suit === "hearts" || suit === "diams" ) {
    card.addClass("red");
  }
  
  $("#cardHere").append(card);
}







}); 


