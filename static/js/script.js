document.addEventListener('DOMContentLoaded', function() {
    const nom = document.getElementById('nom');
    const age = document.getElementById('age');
    const formulaire = document.getElementById('formulaire')


    //Fonction de validation

    function validerNom() {
        var nomErreur = document.getElementById('erreurNom')
        erreurNom.textContent = '';
        if(nom.value === ''){
            erreurNom.textContent = "Vous devez renseignez le nom de l'animal";
            return false;
        } else if(nom.value.length < 3 || nom.value.length > 20) {
            erreurNom.textContent = "Le nom de l'animal doit être entre 3 et 20 caractères"
            return false;
        }
        return true;
    }

    function validerAge() {
        var ageErreur = document.getElementById('erreurAge')
        erreurAge.textContent = '';
        if(age.value === ''){
            erreurAge.textContent = "Vous devez renseignez l'age de l'animal";
            return false;
        } else if(age.value < 0 || age.value > 30) {
            erreurAge.textContent = "L'age de l'animal doit être compris entre 0 et 30";
            erreurAge.style.display = 'inline';
            return false;
        }
        return true;
    }


    // EventLister pour les champs
    nom.addEventListener('change', function (evenement) {
        if(!validerNom()){
            evenement.target.focus();
        }
    });

    nom.addEventListener('blur', function (evenement) {
        if(!validerNom()){
            evenement.target.focus();
        }
    });

    age.addEventListener('change', function (evenement) {
        if(!validerAge()){
            evenement.target.focus();
        }
    });

    age.addEventListener('blur', function (evenement) {
        if(!validerAge()){
            evenement.target.focus();
        }
    });


    formulaire.addEventListener('submit', function(e) {
        e.preventDefault();

        if(!validerNom() || !validerAge()) {
            console.log("Il y a des erreurs")
            return;
        }
        console.log("Formulaire valide");
    });

});

