 $(document).ready(function(){
	 var users;
	 var config = {
	    apiKey: "AIzaSyAzda9qEPbmQKSdXCfY5ZjxaLjvS0lLZh4",
	    authDomain: "burpees-and-stuff.firebaseapp.com",
	    databaseURL: "https://burpees-and-stuff.firebaseio.com",
	    projectId: "burpees-and-stuff",
	    storageBucket: "",
	    messagingSenderId: "135624626399"
	  };

	  firebase.initializeApp(config);
	  var database = firebase.database();
	  
	  function writeScore(scoreType,score) {
		  database.ref(scoreType).push({
			  score: score
		  });
	  }
	
	// seeding the database - remove me	
	var userscores = Array.from({length: 13}, () => Math.floor(Math.random() * 120));
	for(var i=0; i<userscores.length; i++){
		var score = userscores[i]
		writeScore('easyScores/',score);
		writeScore('mediumScore/',score);
		writeScore('hardScore/',score)
	}
	// end of seeding the database
	
	function sortNumber(a,b) {
    	return a - b;
	}

	function getHighestScores(scoreType,scoreNum) {
		var highScores= []
		database.ref(scoreType).orderByChild("score").limitToLast(scoreNum).once('value').then(function(snapshot){
			 users = snapshot.val()
			 	 
			 for(var key in users) {
	   		 	var user = users[key];
	   		 	highScores.push(user.score)
	   		 }
    		 highScores.sort(sortNumber).reverse();
	    });
	    return highScores;
	}
	console.log(getHighestScores('easyScores/',5))
}); 


