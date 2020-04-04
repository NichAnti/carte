$(".card i.fa-horse-head, .card i.fa-cat").parent().css("color", "red")
$(".card i.fa-paw").parent().parent().css({"color": "white", "background" : "#272727"})

var cards = [[], [], [], []];
for (var i = 0; i < 4; i++) {
  for (var j = 0; j < 13; j++) {
      cards[i][j] = j;
  }
}


var mazziereCards = [[], [], [], []];
var myCards = [[], [], [], []];


function myRand(min, max) {
  return Math.round(Math.random() * (max - min) + min)
}

function getRandomCardNumber() {
  return myRand(0, 12);
}

function getRandomCardSeme() {
  return myRand(0, 3);
}

function cartaMazziere() {
  do {

    var n = getRandomCardNumber()
    var seme = getRandomCardSeme()

  } while(cards[seme][j] == -1);

  var nomeSeme;

  switch (seme) {
    case 0:
      nomeSeme = "cat"
      break;
    case 1:
      nomeSeme = "frog"
      break;
    case 2:
      nomeSeme = "horse-head"
      break;
    case 3:
      nomeSeme = "spider"
      break;
  }

  $(".all-page > .top-centre").append('<div class="card"><div class="mini-square top-left"><h4>' + (n + 1) + '</h4><i class="fas fa-' + nomeSeme + '"></i></div><div class="mini-square top-right"><h4>' + (n + 1) + '</h4><i class="fas fa-' + nomeSeme + '"></i></div><div class="mini-square bottom-left rot-180"><h4>' + (n + 1) + '</h4><i class="fas fa-' + nomeSeme + '"></i></div><div class="mini-square bottom-right rot-180"><h4>' + (n + 1) + '</h4><i class="fas fa-' + nomeSeme + '"></i></div><div class="square abs-centre"><h4>' + (n + 1) + '</h4><i class="fas fa-' + nomeSeme + '"></i></div></div>')
  $(".card i.fa-horse-head, .card i.fa-cat").parent().css("color", "red");
  $(".card i.fa-paw").parent().parent().css({"color": "white", "background" : "#272727"})

  mazziereCards[seme].push(n)
  cards[seme][n] = -1;
}

function cartaMia() {
  do {

    var n = getRandomCardNumber()
    var seme = getRandomCardSeme()

  } while(cards[seme][j] == -1);

  var nomeSeme;

  switch (seme) {
    case 0:
      nomeSeme = "cat"
      break;
    case 1:
      nomeSeme = "frog"
      break;
    case 2:
      nomeSeme = "horse-head"
      break;
    case 3:
      nomeSeme = "spider"
      break;
  }

  $(".all-page > .bottom-centre").append('<div class="card"><div class="mini-square top-left"><h4>' + (n + 1) + '</h4><i class="fas fa-' + nomeSeme + '"></i></div><div class="mini-square top-right"><h4>' + (n + 1) + '</h4><i class="fas fa-' + nomeSeme + '"></i></div><div class="mini-square bottom-left rot-180"><h4>' + (n + 1) + '</h4><i class="fas fa-' + nomeSeme + '"></i></div><div class="mini-square bottom-right rot-180"><h4>' + (n + 1) + '</h4><i class="fas fa-' + nomeSeme + '"></i></div><div class="square abs-centre"><h4>' + (n + 1) + '</h4><i class="fas fa-' + nomeSeme + '"></i></div></div>')

  $(".card i.fa-horse-head, .card i.fa-cat").parent().css("color", "red")
  $(".card i.fa-paw").parent().parent().css({"color": "white", "background" : "#272727"})


  myCards[seme].push(n)
  cards[seme][n] = -1;
}

function puntiMiei() {
  var s = 0;
  var arr;
  var nAssi = 0;

  for (var i = 0; i < 4; i++) {
    arr = myCards[i];
    for (var j = 0; j < arr.length; j++) {
      if (arr[j] == 0) {
        nAssi++;
      }
      else if(arr[j] < 10) {
        s += arr[j] + 1;
      }
      else {
        s += 10;
      }
    }
  }

  switch (nAssi) {
    case 0:
      break;

    case 1:
      if(s + 11 <= 21) {
        s += 11;
      }
      else {
        s += 1;
      }
      break;

    case 2:
      if(s + 12 <= 21) {
        s += 12;
      }
      else {
        s += 2;
      }
      break;

    case 3:
    if(s + 13 <= 21) {
      s += 13;
    }
    else {
      s += 3;
    }
      break;

    case 4:
    if(s + 14 <= 21) {
      s += 14;
    }
    else {
      s += 4;
    }
      break;
  }
  return s;
}

function puntiMazziere() {
  var s = 0;
  var arr;
  var nAssi = 0;

  for (var i = 0; i < 4; i++) {
    arr = mazziereCards[i];
    for (var j = 0; j < arr.length; j++) {
      if (arr[j] == 0) {
        nAssi++;
      }
      else if(arr[j] < 10) {
        s += arr[j] + 1;
      }
      else {
        s += 10;
      }
    }
  }

  switch (nAssi) {
    case 0:
      break;

    case 1:
      if(s + 11 <= 21) {
        s += 11;
      }
      else {
        s += 1;
      }
      break;

    case 2:
      if(s + 12 <= 21) {
        s += 12;
      }
      else {
        s += 2;
      }
      break;

    case 3:
    if(s + 13 <= 21) {
      s += 13;
    }
    else {
      s += 3;
    }
      break;

    case 4:
    if(s + 14 <= 21) {
      s += 14;
    }
    else {
      s += 4;
    }
      break;
  }
  return s;
}

cartaMia();
cartaMazziere();
$(".all-page > .top-centre .card").hide();
$(".all-page > .top-centre").append('<div class="card coperta"><div class="square abs-centre"><i class="fas fa-paw"></i></div></div>')
cartaMia();
cartaMazziere();

$(".bottom-centre .top-centre h1").text(puntiMiei())

$("#carta").on("click", function() {
  cartaMia();
  $(".bottom-centre .top-centre h1").text(puntiMiei())
  if (puntiMiei() > 21) {
    $(".perso").css("display", "block");
    $("#carta").off("click");
    $("#stop").off("click");
  }
});

$("#stop").on("click", function() {
  $("#carta").off("click");
  while (puntiMiei() > puntiMazziere() && puntiMiei() <= 21) {
    cartaMazziere();
  }
  $(".top-centre .bottom-centre h1").text(puntiMazziere())

  $(".all-page > .top-centre .card").show();
  $(".all-page > .top-centre .coperta").hide();

  if(puntiMazziere() > 21 || puntiMiei() > puntiMazziere()) {
    $(".vinto").css("display", "block");
  }
  if(puntiMazziere() <= 21 && puntiMazziere() >= puntiMiei()) {
    $(".perso").css("display", "block");
  }

  $("#stop").off("click");
});

$("#rigioca").click(function() {
  cards = [[], [], [], []];
  for (var i = 0; i < 4; i++) {
    for (var j = 0; j < 13; j++) {
        cards[i][j] = j;
    }
  }


  mazziereCards = [[], [], [], []];
  myCards = [[], [], [], []];
  $(".vinto").css("display", "none");
  $(".perso").css("display", "none");
  $("#carta").on("click");
  $("#stop").on("click");
  $(".all-page > .top-centre, .all-page > .bottom-centre").empty();
  $(".all-page > .top-centre").append('  <div class="bottom-centre"><h1></h1></div>')
  $(".all-page > .bottom-centre").append('  <div class="top-centre"><h1></h1></div>')
  $("#carta").on("click", function() {
    cartaMia();
    $(".bottom-centre .top-centre h1").text(puntiMiei())
    if (puntiMiei() > 21) {
      $(".perso").css("display", "block");
      $("#carta").off("click");
      $("#stop").off("click");
    }
  });

  $("#stop").on("click", function() {
    $("#carta").off("click");
    while (puntiMiei() > puntiMazziere() && puntiMiei() <= 21) {
      cartaMazziere();
    }
    $(".top-centre .bottom-centre h1").text(puntiMazziere())

    $(".all-page > .top-centre .card").show();
    $(".all-page > .top-centre .coperta").hide();

    if(puntiMazziere() > 21 || puntiMiei() > puntiMazziere()) {
      $(".vinto").css("display", "block");
    }
    if(puntiMazziere() <= 21 && puntiMazziere() >= puntiMiei()) {
      $(".perso").css("display", "block");
    }

    $("#stop").off("click");
  });

  cartaMia();
  cartaMazziere();
  $(".all-page > .top-centre .card").hide();
  $(".all-page > .top-centre").append('<div class="card coperta"><div class="square abs-centre"><i class="fas fa-paw"></i></div></div>')
  cartaMia();
  cartaMazziere();

  $(".bottom-centre .top-centre h1").text(puntiMiei());

})
