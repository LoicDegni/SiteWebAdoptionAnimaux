# Copyright 2024 <Votre nom et code permanent>
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

from flask import Flask,render_template, g, request, redirect, url_for, flash
from .database import Database
import random
import re


app = Flask(__name__, static_url_path="", static_folder="static")


def get_db():
    db = getattr(g, '_database', None)
    if db is None:
        g._database = Database()
    return g._database


@app.teardown_appcontext
def close_connection(exception):
    db = getattr(g, '_database', None)
    if db is not None:
        db.disconnect()


@app.route('/')
def index():
    db = get_db()
    liste_animaux = db.get_animaux()
    animaux_aleatoire = random.sample(liste_animaux, min(len(liste_animaux),5))
    return render_template('index.html', animaux=animaux_aleatoire)

@app.route('/animal<int:id_animal>')
def animal(id_animal):
    db = get_db()
    animal = db.get_animal(id_animal)
    return render_template('animal.html', animal=animal)

@app.route('/adopter')
def adopter():
    return render_template('adopter.html')

@app.route('/rechercher')
def rechercher():
    requete = request.args.get('critere-de-recherche', '')
    db = get_db()
    animaux = db.get_animaux()
    resultat = []

    if(requete):
        for animal in animaux:
            for valeur in animal.values():
                if requete.lower() in str(valeur).lower() and animal not in resultat:
                    resultat.append(animal)
    return render_template('resultat.html', animaux=resultat)

@app.route('/ajouter_un_animal', methods=["GET", "POST"])
def ajouter_un_animal():
    if request.method == 'POST':
        nom = request.form['nom']
        espece = request.form['espece']
        race = request.form['race']
        age = request.form['age']
        description = request.form['description']
        courriel = request.form['courriel']
        adresse = request.form['adresse']
        ville = request.form['ville']
        code_postal = request.form['codePostal']

        erreurs = []

        # Validation côté backend
        if not nom or len(nom) < 3 or len(nom) > 20:
            erreurs.append("Le nom de l'animal doit être entre 3 et 20 caractères.")
        
        if not espece:
            erreurs.append("Vous devez renseigner l'espèce de l'animal.")
        
        if not race:
            erreurs.append("Vous devez renseigner la race de l'animal.")
        
        if not age.isdigit() or int(age) < 0 or int(age) > 30:
            erreurs.append("L'âge de l'animal doit être compris entre 0 et 30.")
        
        if not description.strip():
            erreurs.append("Vous devez renseigner la description de l'animal.")
        
        if not courriel or not re.fullmatch(r'^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$', courriel):
            erreurs.append("Votre courriel n'est pas valide.")
        
        if not adresse or not re.fullmatch(r'^[0-9]+\s+[a-zA-Z0-9\s,.\'-]+$', adresse):
            erreurs.append("L'adresse n'est pas valide.")
        
        if not ville or not re.match(r'^[a-zA-Z\s,.\'-]{2,}$', ville):
            erreurs.append("La ville n'est pas valide.")
        
        if not code_postal or not re.fullmatch(r'^[A-Za-z]\d[A-Za-z] \d[A-Za-z]\d$', code_postal):
            erreurs.append("Le code postal n'est pas valide.")

        if erreurs:
            for erreur in erreurs:
                flash(erreur, 'danger')
            return render_template('ajouter.html')
        
        #Ajout de l'animal à la base de données
        db = get_db()
        id_animal_ajoute = db.add_animal(nom, espece, race, age, description, courriel, adresse, ville, code_postal)
        # flash("L'animal a été ajouté avec succès!", 'success')
        return redirect(url_for('animal', id_animal=id_animal_ajoute))
    return render_template('ajouter.html')
