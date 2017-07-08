var level = ["easy", "medium", "hard"]
var muscleGroup = ["upper", "lower", "core", "all", "cardio"]
var coreExercise = ["sit-ups", "toe touches", "Russion twist", "v-ups", "plank"]
var cardioExercise = ["burpees", "mountain climbers", "skier jumps", "tuck jumps", "up downs"]
var upperExercise = ["push ups", "triceps on chair", "plank to push", "diamond push ups", "inchworm push ups"]
var lowerExercise = ["squats", "lunges", "calf raises", "curtsy lunges", "hip raises", "single leg hip raises", "fire hydrant circuit"]
var music = []
var repititions = []
var suits = [ "hearts", "diamonds", "clubs", "spades" ];
var ranks = [ 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A" ];

var deck = [];


$(init);
function init() {
	makeDeck();
  	//need to match drawbtn with button on site for exercise
  	$("#drawbtn").click( function() {
    	var myCard = drawCard();
    	if( myCard ) {
    	makeCard( myCard.suit, myCard.rank );
    	} 
    	else {
      		alert("no more cards in the deck");
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
	if( deck.length > 0 ) {
		var randIndex = Math.floor( Math.random() * deck.length );
    	card = deck.splice( randIndex, 1 )[0];
  		}
  return card;
}

function makeCard( suit, rank ) {
	var card = $(".card.template").clone();
	card.removeClass("template");
  	card.find(".rank").html(rank);
  	card.find(".suit").html("&"+suit+";");
  	//this may not be needed, for site code on https://codepen.io/walpolea/pen/aOqvKx
  	if( suit === "hearts" || suit === "diamonds" ) {
    card.addClass("red");
	}
	$("body").append(card);
		}
}

//3 buttons easy, medium hard

//if easy, assign easy to var
//insert 52 into repititions

//if medium assign medium to var
//insert 26 into repititions

//if hard, assign hard to var
//insert 13 into repititions

//4 buttons: core, upper body, lower body, cardio

//if core, select 4 excercises from coreExcercises
//assign each of 4 excerises to suits
//if upper, select 4 excercises from upperExcercises
//assign each of 4 excerises to suits
//if lower, select 4 excercises from lowerExcercises
//assign each of 4 excerises to suits
//if cardio, select 4 excercises from cardioExcercises
//assign each of 4 excerises to suits

//on click, randomly choose rank, randomly choose 
