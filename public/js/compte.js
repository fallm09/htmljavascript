document.forms["compte_pour_client"].addEventListener("submit", function(e) {
 
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






var btn_compte_epargne=document.getElementById("btn_compte_epargne");
var btn_courant=document.getElementById("btn_courant");
var btn_bloque=document.getElementById("btn_bloque");


var kheweul=document.getElementById("xeweul");
var agios1=document.getElementById("agios1");
var duree=document.getElementById("duree");
var blocage=document.getElementById("blocage");
var numero=document.getElementById("numero");
var epargne=document.getElementById("epargne");
var btn_courant=document.getElementById("courant");
var bloque=document.getElementById("bloque");


function marem_epargne() {
    kheweul.style.display="none";
    agios1.style.display="none";
    duree.style.display ="none" ;
    blocage.style.display="none";
    numero.style.display="none";
}

epargne.addEventListener("click",seck_courant)
function seck_courant(e) {
    kheweul.style.display="";
    blocage.style.display="none";
    duree.style.display= "none" ;
    numero.style.display="";


}

btn_courant.addEventListener("click",seck_bloque)
function seck_bloque(e) { 
    kheweul.style.display="none";
    agios1.style.display="";
    duree.style.display ="none" ;
    blocage.style.display="none";
    numero.style.display=""; 
}
 bloque.addEventListener("click",orbit)
 function orbit(e) { 
    kheweul.style.display="";
    agios1.style.display="none";
    duree.style.display ="" ;
    blocage.style.display="";
    numero.style.display=""; 
}




