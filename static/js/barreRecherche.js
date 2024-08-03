document.addEventListener('DOMContentLoaded', function() {
    const barreRecherche = document.getElementById('barre-recherche');
    
    //Barre de recherche
    barreRecherche.addEventListener('submit', function(e){
        const saisie = document.getElementById('saisie').value.trim();
        const messageErreur = document.getElementById('message-erreur');

        if(saisie === ''){
            e.preventDefault();
            messageErreur.textContent = "Veuillez renseigner le critère de recherche";
            messageErreur.style.display = 'block';
        } else {
            messageErreur.style.display = 'none';
        }

    });
});