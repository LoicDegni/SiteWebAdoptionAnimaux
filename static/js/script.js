document.addEventListener('DOMContentLoaded', function() {
    const nom = document.getElementById('nom');
    const age = document.getElementById('age');
    const espece = document.getElementById('espece');
    const race = document.getElementById('race');
    const description = document.getElementById('description');
    const formulaire = document.getElementById('formulaire');
    const courriel = document.getElementById('courriel');
    const adresse = document.getElementById('adresse');
    const ville = document.getElementById('ville');
    const codePostal = document.getElementById('codePostal');


    //Fonction de validation

    /**
     * Cette fonction permet de verifier le nom de l'animal
     * Un nom est valide si le champ n'est pas vide et que le nom est compris entre 3 et 20 caractères
     * 
     * @returns true si le nom est valide, false sinon
     */
    function validerNom() {
        var erreurNom = document.getElementById('erreurNom')
        erreurNom.textContent = '';
        if(nom.value.trim() === ''){
            erreurNom.textContent = "Vous devez renseigner le nom de l'animal";
            return false;
        } else if(nom.value.trim().length < 3 || nom.value.trim().length > 20) {
            erreurNom.textContent = "Le nom de l'animal doit être entre 3 et 20 caractères"
            return false;
        }
        espece.disabled = false;
        return true;
    }

    /**
     * Cette fonction permet de verifier l'espece de l'animal
     * Une espece est valide si le champ n'est pas vide et que l'espece est compris entre 0 et 25 caractères
     * 
     * @returns true si l'espece est valide, false sinon
     */
    function validerEspece(){
        var erreurEspece = document.getElementById('erreurEspece');
        erreurEspece.textContent = '';
        if(espece.value.trim() === '') {
            erreurEspece.textContent = "Vous devez renseigner l'espece de l'animal";
            return false;
        } else if(espece.value.trim().length < 0 || espece.value.trim().length > 25){
            erreurEspece.textContent = "L'espece de l'animal doit être entre 0 et 25 caractères";
            return false;
        }
        race.disabled = false;
        return true;
    }

    /**
     * Cette fonction permet de verifier la race de l'animal
     * La race est valide si le champ n'est pas vide et que la race est comprise entre 0 et 25 caractères
     * 
     * @returns true si la race est valide, false sinon
     */
    function validerRace(){
        var erreurRace = document.getElementById('erreurRace');
        erreurRace.textContent = '';
        if(race.value.trim() === ''){
            erreurRace.textContent = "Vous devez renseigner la race de l'animal"
            return false;
        }else if(race.value.trim().length < 0 || race.value.trim().length > 25){
            erreurRace.textContent = "La race de l'animal doit être entre 0 et 25 caractères";
            return false;
        }
        age.disabled = false;
        return true;
    }

    /**
     * Cette fonction permet de verifier l'age de l'animal
     * L'age est valide si le champ n'est pas vide et que l'age est compris entre 0 et 30
     * 
     * @returns true si l'age est valide, false sinon
     */
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
        description.disabled = false;
        return true;
    }

    /**
     * Cette fonction permet de verifier la description de l'animal
     * La description est valide si le champ n'est pas vide et que la description est comprise entre 0 et 500 caractères
     * 
     * @returns true si la description est valide, false sinon
     */
    function validerDescritpion(){
        var erreurDescription = document.getElementById('erreurDescription');
        erreurDescription.textContent = '';

        if(description.value.trim() === ''){
            erreurDescription.textContent = "Vous devez renseigner la description de l'animal";
            return false;
        }else if (description.value.trim().length < 0 || description.value.trim().length > 500){
            erreurDescription.textContent = "La description de l'animal doit être entre 0 et 500 caractères";
            return false;
        }
        courriel.disabled = false;
        return true;
    }

    /**
     * Cette fonction permet de verifier le courriel
     * Le courriel est valide si le champ n'est pas vide et que le courriel est valide et compris entre 0 et 80 caractères
     * 
     * @returns true si le courriel est valide, false sinon
     */
    function validerCourriel(){
        var erreurCourriel = document.getElementById('erreurCourriel');
        erreurCourriel.textContent = '';
        if(courriel.value.trim() === ''){
            erreurCourriel.textContent = "Vous devez renseigner votre courriel";
            return false;
        }else{
            const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            if(!emailRegex.test(courriel.value)){
                erreurCourriel.textContent = "Votre courriel n'est pas valide.";
                return false;
            }
            if(courriel.value.trim().lenght < 0 || courriel.value.trim().length > 80){
                erreurCourriel.textContent = "Votre courriel doit être entre 0 et 80 caractères";
                return false;
            }
            adresse.disabled = false;
            return true;
        }
    }

    /**
     * Cette fonction permet de verifier l'adresse
     * L'adresse est valide si le champ n'est pas vide et que l'adresse est valide et comprise entre 0 et 75 caractères
     * 
     * @returns true si l'adresse est valide, false sinon
     */
    function validerAdresse(){
        var erreurAdresse = document.getElementById('erreurAdresse');
        erreurAdresse.textContent = '';
        if(adresse.value.trim() === ''){
            erreurAdresse.textContent = "Vous devez renseigner l'adresse";
            return false;
        }else{
            const adresseRegex = /^[0-9]+\s+[a-zA-Z0-9\s,.'-]+$/;
            if(!adresseRegex.test(adresse.value)){
                erreurAdresse.textContent = "L'adresse n'est pas valide.";
                return false;
            }
            if(adresse.value.trim().length < 0 || adresse.value.trim().length > 75){
                erreurAdresse.textContent = "Votre adresse doit être entre 0 et 75 caractères";
                return false;
            }
            ville.disabled = false;
            return true;
        }
    }

    /**
     * Cette fonction permet de verifier la ville
     * La ville est valide si le champ n'est pas vide et que la ville est valide et comprise entre 0 et 75 caractères
     * 
     * @returns true si la ville est valide, false sinon
     */
    function validerVille(){
        var erreurVille = document.getElementById('erreurVille');
        erreurVille.textContent = '';
        if(ville.value.trim() === ''){
            erreurVille.textContent = "Vous devez renseigner la ville";
            return false;
        }else{
            const villeRegex = /^[\p{L}\s,.'-]{2,}$/u;
            if(!villeRegex.test(ville.value)){
                erreurVille.textContent = "La ville n'est pas valide.";
                return false;
            }
            if(ville.value.trim().length < 0 || ville.value.trim().length > 75){
                erreurVille.textContent = "Votre ville doit être entre 0 et 75 caractères";
                return false;
            }
            codePostal.disabled = false;
            return true;
        }
    }

    /**
     * Cette fonction permet de verifier le code postal
     * Le code postal est valide si le champ n'est pas vide et que le code postal est valide sous le format canadien A1A 1A1
     * 
     * @returns true si le code postal est valide, false sinon
     */
    function validerCodePostal(){
        var erreurCodePostal = document.getElementById('erreurCodePostal');
        erreurCodePostal.textContent = '';
        if(codePostal.value.trim() === ''){
            erreurCodePostal.textContent = "Vous devez renseigner le code postal";
            return false;
        }else{
            const codePostalRegex = /^[A-Za-z]\d[A-Za-z] \d[A-Za-z]\d$/;
            if(!codePostalRegex.test(codePostal.value)){
                erreurCodePostal.textContent = "Mauvais format. Le code postal n'est pas valide.";
                return false;
            }
            return true;
        }
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
    ajouterEcouteursEvenements(courriel, validerCourriel);
    ajouterEcouteursEvenements(adresse, validerAdresse);
    ajouterEcouteursEvenements(ville, validerVille);
    ajouterEcouteursEvenements(codePostal, validerCodePostal);


    //Fonction de soumission
    formulaire.addEventListener('submit', function(e) {
        if(
            !validerNom() ||
            !validerEspece() ||
            !validerRace() ||
            !validerAge() ||
            !validerDescritpion() ||
            !validerCourriel() ||
            !validerAdresse() ||
            !validerVille() ||
            !validerCodePostal()
        ){
            e.preventDefault();
            return;
        }
    });

});