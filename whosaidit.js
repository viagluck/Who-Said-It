$(document).ready(function(){

  /*---------------------VARIABLES---------------------*/

  var nameQuoteImg = [
    ['Adam Sandler', "&quot;I kinda just wanted to be a songwriter, you know. I think that's the hardest thing: to write a song.&quot;",'imgs/sandler-300.jpg'],
    ['Bob Dylan', '&quot;All I really wanna do is, baby, be friends with you.&quot;','imgs/dylan-300.jpg'],
    ['Leonard Cohen', '&quot;The holy dove she will be caught again, bought and sold and bought again.&quot;','imgs/cohen-300.jpg'],
    ['Blondie', '&quot;Sorry, Shorty!&quot;','imgs/clint-300.jpg'],
    ['Angel Eyes', '&quot;See you soon, idiots!&quot;','imgs/lee-300.jpg'],
    ['Tuco', "&quot;When you have to shoot, shoot, don't talk.&quot;",'imgs/eli-300.jpg'],
    ['Paul', "&quot;That's my other grandfather, but he's my grandfather as well.&quot;",'imgs/paul-300.jpg'],
    ['John', '&quot;She looks more like him than I do!&quot;','imgs/john-300.jpg'],
    ['Ringo', "&quot;No, I'm a mocker!&quot;</br>(on whether he's a model or a rocker)",'imgs/ringo-300.jpg'],
    ['The Donald', '&quot;Anyone who thinks my story is anywhere near over is sadly mistaken.&quot;','imgs/trump-300.jpg'],
    ['Bunga Bunga', '&quot;There is no one on the world stage who can compete with me.&quot;','imgs/berlusconi-300.jpg'],
    ['Bubba', "&quot;You know, if I were a single man, I might ask that mummy out. That's a good-looking mummy.&quot;",'imgs/clinton-300.jpg'],
    ['Jeb!', "&quot;I'm a skeptic. I'm not a scientist.&quot;",'imgs/jeb-300.jpg'],
    ['W', '&quot;See, in my line of work you got to keep repeating things over and over and over again for the truth to sink in.&quot;','imgs/gwb-300.jpg'],
    ['Papa Bush', "&quot;I have opinions of my own, strong opinions, but I don't always agree with them.&quot;",'imgs/ghwb-300.jpg'],
    ['Ernest Hemingway', '&quot;The half bottle of champagne is the enemy of man.&quot;','imgs/hemingway-300.jpg'],
    ['Jack Kerouac', "&quot;As far as I’m concerned the only thing to do is sit in a room and get drunk.&quot;",'imgs/kerouac-300.jpg'],
    ['Sergei Dovlatov', "&quot;I've read so much about the harmfulness of alcohol, I've decided to stop...reading.&quot;",'imgs/dovlatov-300.jpg'],
    // ['Ernest Hemingway', 'The half bottle of champagne is the enemy of man.','imgs/hemingway-300.jpg'],
    // ['Jack Kerouac', "As far as I’m concerned the only thing to do is sit in a room and get drunk.",'imgs/kerouac-300.jpg'],
    // ['Ayn Rand', "In recent years the conservatives have gradually come to the dim realization of the weakness in their position.",'imgs/ayn-300.jpg'],

  ];

  var nextPerson = 3;
  var nextSetofNames = 3;
  var quoteNumber = 1;
  var rounds = nameQuoteImg.length/3;
  var selectedQuote = "Something Trump has said";
  var quotedPersonIndex = 0;
  var correctAnswer = "Hmm, you got lucky";

  var nextRound = true;
  var a = [
    "Hmm...lucky guess", "You're a genius", "Even a stopped clock</br>is right twice a day",
    "You're basically Einstein", "Check out the</br>brains on you", "I bet you won't </br> get the next one",
    "You're so very special", "One right answer</br>means nothing", "Oooh, so smart",
    "Did someone help </br> you with that one?", "You're doing better</br>than I expected", "That was easy",
    "Don't get cocky, kid", "You're a quiz master", "Are you cheating?",
    "You're a braniac", "Next one will be hard", "Wow, you're talented",
  ];

  /*---------------------TO PORTFOLIO---------------------*/
  $(".back-button").click(function(){
    window.location.href="#portfolio";
  });

  /*-------------QUIZ QUESTION NAME SELECTION-------------*/
  $(".name-button").click(function(){

    if(nextRound){
      correctAnswer = a[Math.floor(Math.random() * (a.length - 1)) + 1];
    }

    var selectedName = $(this).html();
    if(selectedName === nameQuoteImg[quotedPersonIndex][0] || selectedName === correctAnswer){
      $(this).css({"background-color": "green","border": "1px solid green"});
      $(this).html(correctAnswer);
      nextRound = false;
    }
    else{
      $(this).css({"background-color": "red", "border": "1px solid red"});
      $(this).html("Nope!");
      nextRound = false;
    }
  });

  /*--------------------QUIZ NAVIGATION--------------------*/
  $(".next-button").click(function(){

    nextRound = true;
    // reset buttons background-color
    $(".name-button").css({"background-color": "#337ab7"});
    $(".name-button").css({"border": "1px solid #2e6da4"});

    if(quoteNumber === rounds)
      quoteNumber = 1;
    else
      quoteNumber++;

    // display quote randomly selected from the three people in the round
    quotedPersonIndex = Math.floor((Math.random() * 3) + nextSetofNames);
    selectedQuote = nameQuoteImg[quotedPersonIndex][1];
    $("#quote").html(selectedQuote);
    $("#quote-number").html(quoteNumber + "/" + rounds);

    for(var i = 0; i < 3; i++){
      // change names on buttons
      $("#btn-" + i).html(nameQuoteImg[nextPerson][0]);
      // change the images
      $("#img-" + i).attr("src", nameQuoteImg[nextPerson][2]);

      // after the 3 iterations increment set of names by 3
      if(i === 2)
        nextSetofNames+=3;

      // restart the quiz from the beginning
      // or choose the next person
      if(nextPerson === nameQuoteImg.length - 1){
        nextPerson = 0;
        nextSetofNames = 0;
      }
      else {
        nextPerson++;
      }
    }
  });
});
