console.info(0);

function sayWelcome() {
  console.info("salut " + prenume + " , bine ai venit  ");
}
var nume = "rusu";
var prenume = "catalin";
var owner = "Russ";
var msg1 = "ai zis Nick?";
var msg2 = "Nu,am zis Nicolae";
var template = 'Text cu ghilimele" sau simple';

prenume = "Russew";

var skills = ["html", "css", "js"];
console.info("toate variabilele au fost initializate");
console.log("nume");
console.debug("cum te cheama?" + prenume);

function sayWelcome() {
  console.info("Salut catalin, bine ai venit la noi");
}

sayWelcome();

var myEur = 20;
var myRon = 0;
var friendEur = 10;
var friendRon = 0;

function extractFromATM(ammount) {
  console.info("= = = =  = = = =  = = = =  = = = =");
  console.info("suma extrasa este:" + ammount);
  var comision = ammount * 0.01;
  if (comision < 2.5) {
    comision = 2.5;
    console.warn("comision minim aplicat");
  }

  console.info("comision aplicat:" + comision);
  console.info("= = = =  = = = =  = = = =  = = = =");
}
extractFromATM(1000);
extractFromATM(100);
