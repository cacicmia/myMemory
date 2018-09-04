var openCards=[];
var interval;
var gameOn = false;
var time = 0;
var ready = true;
var completed= 0;

function shuffle() {
  var cards=[1,1,2,2,3,3,4,4,5];
  cards.sort(function(card){
    return .5 -Math.random()
  })
  return cards;
}
function playGame(){
  var grid =document.getElementsByTagName('td');
  var cards=shuffle();

  for (let i=0; i< grid.length; i++ ) {
    var card=grid[i];
    card.completed= false;
    card.clicked= false;
    card.value=cards[i];
    card.addEventListener('mouseenter', function(){
      if (this.completed == false && this.clicked == false)
        this.style.background = "#FF9200";
    });
    card.addEventListener('mouseleave', function(){
      if (this.completed == false && this.clicked == false)
        this.style.background = "#007EFF";
    });
    card.addEventListener('click', function(){
      if (this.clicked == false && this.completed == false) {
      startTimer();
      openCards.push(this);
      show(this);
      if (openCards.length == 2) {
        if (openCards[0].value == openCards[1].value) {
          complete(openCards[0]);
          complete(openCards[1]);
          openCards = [];
          if (completed == 8){
              clearInterval(interval);
            alert("You won in " + time + " seconds!");

          }
        } else {
          setTimeout(function(){
            hide(openCards[0]);
            hide(openCards[1]);
            openCards = [];
          }, 750);

    };
  };
};
});



    }
  }

playGame();
function show(card){
  card.style.background = "#F02";
  card.clicked = true;
  card.innerHTML = card.value;

}
function hide(card){
  card.style.background = "#007EFF";
  card.clicked = false;
  card.innerHTML="";

}

function complete(card){
  completed++;
  card.completed = true;
  card.style.background = "#990099";
}
function startTimer() {
  if (gameOn == false) {
    interval = setInterval(function(){
      time++;
      document.getElementById('timer').innerHTML = `Secs passed: ${time}`;
    },1000);
    gameOn = true;
  }
}
