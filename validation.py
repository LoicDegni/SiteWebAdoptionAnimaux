import re
from flask import request

def valider_formulaire():
    '''
    Valide les informations d'un formulaire d'adoptions

    returns:
        (bool): vrai si les informations sont valides, faux sinon
    '''
    return valider_nom (request.form['nom'].strip())\
        and valider_espece(request.form['espece'].strip())\
        and valider_race(request.form['race'].strip())\
        and valider_age(request.form['age'].strip())\
        and valider_description(request.form['description'].strip())\
        and valider_courriel(request.form['courriel'].strip())\
        and valider_adresse(request.form['adresse'].strip())\
        and valider_ville(request.form['ville'].strip())\
        and valider_code_postal(request.form['codePostal'].strip())

def valider_nom(nom):
    '''
    Valide le nom d'un animal, retourne vrai si le nom est valide, faux sinon
    Un nom valide doit contenir entre 3 et 20 caractères

    parameters:
        nom (str): le nom de l'animal à valider
    
    returns:
        (bool): vrai si le nom est valide, faux sinon
    '''
    return nom and len(nom) >= 3 and len(nom) <= 20

def valider_espece(espece):
    '''
    Valide l'espèce d'un animal, retourne vrai si l'espèce est valide, faux sinon
    Une espèce valide doit être non vide et contenir au plus 25 caractères

    parameters:
        espece (str): l'espèce de l'animal à valider
    
    returns:
        (bool): vrai si l'espèce est valide, faux sinon
    '''
    return espece and len(espece) < 25

def valider_race(race):
    '''
    Valide la race d'un animal, retourne vrai si la race est valide, faux sinon
    Une race doit être non vide et contenir au plus 25 caractères

    parameters:
        race(str): la race de l'animal à valider

    returns:
        (bool): vrai si la race est valide, faux sinon
    '''
    return race and len(race) < 25

def valider_age(age):
    '''
    Valide l'âge d'un animal, retourne vrai si l'âge est valide, faux sinon
    L'âge doit être un entier entre 0 et 30

    parameters:
        age (str): l'âge de l'animal à valider

    returns:
        (bool): vrai si l'âge est valide, faux sinon
    '''
    return age.isdigit() and int(age) >= 0 and int(age) <= 30

def valider_description(description):
    '''
    Valide la description d'un animal, retourne vrai si la description est valide, faux sinon
    Une description valide doit être non vide et doit contenir au plus 500 caractères

    parameters:
        description (str): la description de l'animal à valider

    returns:
        (bool): vrai si la description est valide, faux sinon
    '''
    return description and len(description) < 500

def valider_courriel(courriel):
    '''
    Valide un courriel, retourne vrai si le courriel est valide, faux sinon
    Un courriel valide doit être non vide, doit respecter le format courriel et ne doit pas
    depasser 80 caractères

    parameters:
        courriel (str): le courriel à valider

    returns:
        (bool): vrai si le courriel est valide, faux sinon
    '''
    return courriel and len(courriel) < 80 and re.fullmatch(r'^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$', courriel)

def valider_adresse(adresse):
    '''
    Valide une adresse, retourne vrai si l'adresse est valide, faux sinon
    Une adresse valide doit être non vide, doit respecter le format adresse et ne doit pas
    depasser 75 caractères

    parameters:
        adresse (str): l'adresse à valider

    returns:
        (bool): vrai si l'adresse est valide, faux sinon
    '''
    return adresse and len(adresse) < 75 and re.fullmatch(r'^[0-9]+\s+[a-zA-Z0-9\s,.\'-]+$', adresse)

def valider_ville(ville):
    '''
    Valide une ville, retourne vrai si la ville est valide, faux sinon
    Une ville valide doit être non vide, doit respecter le format ville et ne doit pas
    depasser 75 caractères.
    La ville doit contenir au moins 2 caractères

    parameters:
        ville (str): la ville à valider

    returns:
        (bool): vrai si la ville est valide, faux sinon
    '''
    return ville and len(ville) < 75 and re.fullmatch(r'^[a-zA-ZÀ-ÿ\s,.\'-]{2,}$', ville)

def valider_code_postal(code_postal):
    '''
    Valide un code postal, retourne vrai si le code postal est valide, faux sinon
    Un code postal valide doit être non vide, doit respecter le format code postal et ne doit pas
    depasser 7 caractères

    parameters:
        code_postal (str): le code postal à valider

    returns:
        (bool): vrai si le code postal est valide, faux sinon
    '''
    return code_postal and re.fullmatch(r'^[A-Za-z]\d[A-Za-z] \d[A-Za-z]\d$', code_postal)


