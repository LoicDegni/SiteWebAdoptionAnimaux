document.addEventListener('DOMContentLoaded', function() {
    const nom = document.getElementById('nom');
    const age = document.getElementById('age');
    const espece = document.getElementById('espece');
    const race = document.getElementById('race');
    const description = document.getElementById('description');
    const formulaire = document.getElementById('formulaire')


    //Fonction de validation

    function validerNom() {
        var erreurNom = document.getElementById('erreurNom')
        erreurNom.textContent = '';
        if(nom.value === ''){
            erreurNom.textContent = "Vous devez renseigner le nom de l'animal";
            return false;
        } else if(nom.value.length < 3 || nom.value.length > 20) {
            erreurNom.textContent = "Le nom de l'animal doit être entre 3 et 20 caractères"
            return false;
        }
        return true;
    }

    function validerEspece(){
        var erreurEspece = document.getElementById('erreurEspece');
        erreurEspece.textContent = '';
        if(espece.value === '') {
            erreurEspece.textContent = "Vous devez renseigner l'espece de l'animal";
            return false;
        }
        return true;
    }

    function validerRace(){
        var erreurRace = document.getElementById('erreurRace');
        erreurRace.textContent = '';
        if(race.value === ''){
            erreurRace.textContent = "Vous devez renseigner la race de l'animal"
            return false;
        }
        return true;
    }

    function validerAge() {
        var erreurAge = document.getElementById('erreurAge')
        erreurAge.textContent = '';
        if(age.value === ''){
            erreurAge.textContent = "Vous devez renseigner l'age de l'animal";
            return false;
        } else if(age.value < 0 || age.value > 30) {
            erreurAge.textContent = "L'age de l'animal doit être compris entre 0 et 30";
            erreurAge.style.display = 'inline';
            return false;
        }
        return true;
    }

    function validerDescritpion(){
        var erreurDescription = document.getElementById('erreurDescription');
        erreurDescription.textContent = '';

        if(description.value.trim() === ''){
            erreurDescription.textContent = "Vous devez renseigner la description de l'animal";
            return false;
        }
        return true;
    }


    //Gestion des listeners
    function ajouterEcouteursEvenements(element, fonctionDeValidation) {
        element.addEventListener('change', function(evenement){
            if(!fonctionDeValidation()){
                evenement.target.focus();
            }
        });

        element.addEventListener('blur', function(evenement){
            if(!fonctionDeValidation()){
                evenement.target.focus();
            }
        });
    }

    ajouterEcouteursEvenements(nom, validerNom);
    ajouterEcouteursEvenements(age, validerAge);
    ajouterEcouteursEvenements(espece, validerEspece);
    ajouterEcouteursEvenements(race, validerRace);
    ajouterEcouteursEvenements(description, validerDescritpion);


    //Fonction de soumission
    formulaire.addEventListener('submit', function(e) {
        if(
            !validerNom() ||
            !validerEspece() ||
            !validerRace() ||
            !validerAge() ||
            !validerDescritpion()
        ){
            console.log("Il y a des erreurs")
            e.preventDefault();
            return;
        }
        console.log("Formulaire valide");
    });

});

