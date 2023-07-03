const url = 'https://blockchain.info/ticker';
let compte = 0;
function recupererPrix() {
    
    // Pour créer une requette je déclare une variable 
    let requete = new XMLHttpRequest(); //créer un objet 
    requete.open('GET', url); 
    //premiere parametre : url 
    requete.responseType = 'json'; // Nous attendons du format json
    requete.send(); //Nous envoyons notre requete 

    //dés qu'on reçoit une réponse, cette fonction est executée 
    compte += 1;
    console.log("recupererPrix :"+compte);
    requete.onload = function() {
        if (requete.readyState === XMLHttpRequest.DONE) {
            if (requete.status === 200) {
                let reponse = requete.response; // je stock la réponse
                let prixEnEuros = reponse.EUR.last+compte;
                document.querySelector('#price_label').textContent = prixEnEuros;
            }
            else {
                alert('un problème est intervenu, merci de revenir plus tard.');      
            }
        }
    }
}

setInterval(recupererPrix, 2000);
