$(document).ready(function(){

	var y = 0;
	var quotes = ["I kinda just wanted to be a songwriter, you know. I think that's the hardest thing: to write a song.", 
					"I'm a skeptic. I'm not a scientist.", 
					"You're laughing, but who wants a president who will knowingly, repeatedly tell you something he knows is not true?"];
	var nextQuote = 1;
	var names = ["Bob Dylan", "Leonard Cohen", "Adam Sandler", "GWB", "GHWB", "Jeb!", "Berlusconi", "Clinton", "Trump"];
	var nextName = 3;
	var page = 1;

    $("#next_button").click(function(){
    	//change quote
    	document.getElementById("quote").innerHTML = quotes[nextQuote];
    	nextQuote++;
    	if(nextQuote == quotes.length){
    		nextQuote = 0;
    	}

    	//change images
    	y+=200;
        $("#image_1").css({backgroundPosition: "0 -" + y});
        $("#image_2").css({backgroundPosition: "-200 -" + y});
        $("#image_3").css({backgroundPosition: "-400 -" + y});

        //change names
        document.getElementById("button_1").innerHTML = names[nextName] + " &#187";
        document.getElementById("button_2").innerHTML = names[nextName + 1] + " &#187" ;
        document.getElementById("button_3").innerHTML = names[nextName + 2] + " &#187";
        if(nextName + 2 == names.length -1){
        	nextName = 0;
        }
        else{
        	nextName+=3;
        }

		if(page == quotes.length){
        	page = 0;
        }
        page++;
    });


    $("#button_1").click(function(){
    	switch(page){
    		case 1: document.getElementById("button_1").innerHTML = "Nope!";
    				break;
    		case 2: document.getElementById("button_1").innerHTML = "Nope!";
    				break;
    		case 3: document.getElementById("button_1").innerHTML = "Nope!";
    				break;
    	}

    });

    $("#button_2").click(function(){
    	switch(page){
    		case 1: document.getElementById("button_2").innerHTML = "Nope!";
    				break;
    		case 2: document.getElementById("button_2").innerHTML = "Nope!";
    				break;
    		case 3: document.getElementById("button_2").innerHTML = "Yep!";
    				break;
    	}
    });

    $("#button_3").click(function(){
    	switch(page){
    		case 1: document.getElementById("button_3").innerHTML = "Yep!";
    				break;
    		case 2: document.getElementById("button_3").innerHTML = "Yep!";
    				break;
    		case 3: document.getElementById("button_3").innerHTML = "Nope!";
    				break;
    	}
    });
});