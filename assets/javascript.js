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
var myLevel = []


//create buttons based on var level into HTML



//button to chose level
//function level(){
//	$("#levelbtn").click( function() {
//		easy = myLevel
//		medium = myLevel
//		hard = myLevel
}


// iniates deck and calls function to create deck
$(init);
function init() {
	makeDeck();
  	//need to match "#drawbtn" with button on site for exercise
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
//function to create deck from suits and rank
function makeDeck() {  
	deck = [];
	//for each type of suit
	for( var i = 0; i < suits.length; i++ ) {
    // for each rank, need to match this to the number of cards based on easy=13/medium=26/hard=52
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
	return deck
}


function drawCard() {
	var card;
	if( deck.length > 0 ) {
		var randIndex = Math.floor( Math.random() * deck.length );
    	card = deck.splice( randIndex, 1 )[0];
  		}
  return card;
}


//if hard
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

function smallerDeck(arr, n) {
    var result = new Array(n),
        len = arr.length,
        taken = new Array(len);
    if (n > len)
        throw new RangeError("getRandom: more elements taken than available");
    while (n--) {
        var x = Math.floor(Math.random() * len);
        result[n] = arr[x in taken ? taken[x] : x];
        taken[x] = --len;
    }
    return result;
}
deck = makeDeck()
console.log(deck)

//if (myLevel === easy)
//	(smallerDeck(deck, 13))
console.log(smallerDeck(deck, 13))


//if (myLevel === medium)
//	(smallerDeck(deck, 26))
//console.log(smallerDeck(deck, 26))

//else




//if medium (smallerDeck(deck, 26))





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
