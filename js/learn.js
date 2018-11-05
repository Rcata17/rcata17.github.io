function learnVariabels() {
  console.info(0);
  console.info(1);
  function sayWelcome() {}
  var nume = "Rusu";
  var prenume = "Catalin";
  var owner = "Russs";
  var msg1 = 'ai zis "Rusu"?';
  var msg2 = 'Nu, am zis "Russ"';
  var template = `Text cu ghilimele " sau simple '`;

  console.debug("auzi...? dar cum te cheama? -" + prenume);
  sayWelcome();

  var skills = ["html", "css", "js"];

  prenume = "Catalin";

  console.info("toate variabilele au fost initializate");
  console.log(nume);
  console.debug("cum te cheama? -" + prenume);
  sayWelcome();
  var cursEUR = 4.5;
  var myEUR = 20;
  var myRON = 0;
  var friendEUR = 100;
  var friendRON = 0;
  // operatori * / + -

  myRON = myEUR * cursEUR;
  console.info("eu am " + myRON + " RON");

  friendRON = friendEUR * cursEUR - (friendEUR * cursEUR * 1) / 100;
  console.info("tu ai " + friendRON + " RON");
  console.info("Salut " + prenume + ", bine ai venit la noi!");
  console.info("eu am " + myRON + " RON");
  friendRON = friendEUR * cursEUR - (friendEUR * cursEUR * 1) / 100;
  console.info("tu ai " + friendRON + " RON");
}

function learnIterators() {
  function countTo(n) {
    console.info("sa numaram pana la " + n);
    //for(init; condition; after)
    for (var i = 1; i <= n; i++) {
      console.info(i);
    }
  }

  function countDown(n) {
    var i = n;
    for (; i > 0; ) {
      console.info(i);
      i--;
    }
    var i = n;
    while (i > 0) {
      console.info(i);
      i--;
    }
  }

  countTo(10);
  countDown(10);
}

learnIterators();

var ATMFunds = 50000;
var funds = 5000;

function getExtractFee(ammount) {
  var comision = ammount * 0.01;
  if (comision < 2.5) {
    console.warn("comision minim aplicat");
    comision = 2.5;
  }
  return comision;
}

function extractFromATM(amount) {
  console.info("==== ==== ==== ==== ====");
  console.info("suma extrasa este: " + amount);
  var comision = getExtractFee(amount);
  var totalExtract = amount + comision;
  if (totalExtract > funds) {
    console.error("insufficient funds");
    return;
  }
  if (ATMFunds < totalExtract) {
    console.error("ATM insufficient funds");
    return;
  }
  funds = funds - totalExtract;
  console.info("comision aplicat: " + comision);
  console.info("sold curent: " + funds);
  console.info("==== ==== ==== ==== ====");
}
// extractFromATM(1005);
// extractFromATM(1005); // nu e multiplu de 10
// extractFromATM(100000); // solduri insuficiente
// extractFromATM(3000);
// extractFromATM(3000);
// extractFromATM(100);
// var motto, favorite, links;
// motto = document.getElementById("motto");
