/*var test=document.forms["inscription"];
console.log(test);
*/
document.forms["inscription"].addEventListener("submit", function(e) {
 
	var erreur;
 
	var inputs = document.getElementsByTagName("input");
	for (var i=0; i< inputs.length; i++) {
		console.log(inputs[i]) ;
	if (inputs [i].value=="") {
		erreur="Veuillez renseigner les champs";
		}
	}

    if(erreur) {
        e.preventDefault();
		  document.getElementById("erreur").innerHTML = erreur;
		  return false;
}   else {
           alert('Formulaire envoyé !') ;
}
 
	
});







/*var boutonpourcacher=document.getElementById("n");
boutonpourcacher.addEventListener("click",seck);
function seck(e){


var leformulaireacacher=document.getElementById("container");
leformulaireacacher.style.display="none";
document.getElementById("nom").value = null;



var leformulaireacacher=document.getElementById("wrapper1");
leformulaireacacher.style.display="none";

var leformulaireacacher=document.getElementById("menu");
leformulaireacacher.style.display="none";


var leformulaireacacher=document.getElementById("physique");
leformulaireacacher.style.display="none";

}

var boutonpourafficher=document.getElementById("n");
boutonpourafficher.addEventListener("click",malik);
function malik(e){

var leformulaireacacher=document.getElementById("container");
leformulaireacacher.style.display="";
}*/


var btn_moral=document.getElementById("btn_moral");
var btn_salarie=document.getElementById("btn_salarie");
var btn_non_salarie=document.getElementById("btn_non_salarie");
var btn_physique=document.getElementById("btn_physique");

var client_moral=document.getElementById("client_moral");
var client_salarie=document.getElementById("client_salarie");
var non_salarie=document.getElementById("non_salarie");
var physique=document.getElementById("physique");



function seck_moral(){
	client_moral.style.display="block";
    client_salarie.style.display="none";
	non_salarie.style.display="none";
	physique.style.display="none";
}

window. onload=function(){
	client_moral.style.display="none";
    client_salarie.style.display="none";
	non_salarie.style.display="none";
	physique.style.display="none";
     
}


function seck_salaire(){
	client_moral.style.display="none";
    client_salarie.style.display="block";
	non_salarie.style.display="none";
	physique.style.display="none";
}


function seck_non_salaire(){
	client_moral.style.display="none";
    client_salarie.style.display="none";
	non_salarie.style.display="block";
	physique.style.display="none";
}

function seck_physique(){
	client_moral.style.display="none";
    client_salarie.style.display="none";
	non_salarie.style.display="none";
	physique.style.display="block";
}
