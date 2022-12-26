const cases = document.querySelectorAll('.case');
const ncases = cases.length;
var idx = 0;
var combo = 0;

const coords = ["a8", "b8", "c8", "d8", "e8", "f8", "g8", "h8",
                "a7", "b7", "c7", "d7", "e7", "f7", "g7", "h7",
                "a6", "b6", "c6", "d6", "e6", "f6", "g6", "h6",
                "a5", "b5", "c5", "d5", "e5", "f5", "g5", "h5",
                "a4", "b4", "c4", "d4", "e4", "f4", "g4", "h4",
                "a3", "b3", "c3", "d3", "e3", "f3", "g3", "h3",
                "a2", "b2", "c2", "d2", "e2", "f2", "g2", "h2",
                "a1", "b1", "c1", "d1", "e1", "f1", "g1", "h1"
];


function setTarget(t) {
	cible=t;
	document.getElementById("cible").innerHTML=t;
}

function do_combo(element) {
	combo = combo+1;
	party.sparkles(element, {count: combo})
}

function checkForMatch() {

	sound.play('laser');

	if (!running) {
		startTimer();
	}

	cachees = document.getElementsByClassName("cachee");

	//succesful click
	if (cible==this.innerHTML) {
		this.classList.toggle("trouvee");
		this.classList.toggle("cachee");
		do_combo(this);
		// remove the square found from the square to be found
		cachees = document.getElementsByClassName("cachee");
		if (cachees.length!=0) {
			setTarget(cachees[Math.floor(Math.random()*cachees.length)].textContent);
		}
	} else {
		combo=0
	}


	if (cachees.length==0) {
		console.log("termine!!!");
		party.confetti(this);

	}


}

cases.forEach(unecase => unecase.innerHTML=coords[idx++]);
cachees = document.getElementsByClassName("cachee");
var cible = cachees[Math.floor(Math.random()*cachees.length)].textContent;
setTarget(cible)
idx=0;
cases.forEach(unecase => unecase.addEventListener('click', checkForMatch));
cases.forEach(unecase => unecase.addEventListener('touchstart', checkForMatch));
