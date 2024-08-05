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
from .validation import valider_formulaire


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

@app.route('/animal/<int:id_animal>')
def animal(id_animal):
    db = get_db()
    animal = db.get_animal(id_animal)
    return render_template('animal.html', animal=animal)

@app.route('/adopter')
def adopter():
    db = get_db()
    animaux = db.get_animaux()
    return render_template('adopter.html', animaux = animaux)

@app.route('/rechercher')
def rechercher():
    requete = request.args.get('critere-de-recherche', "").strip()
    db = get_db()
    animaux = db.get_animaux()
    resultat = []

    if(requete):
        for animal in animaux:
            for valeur in animal.values():
                if requete.lower() in str(valeur).lower() and animal not in resultat:
                    resultat.append(animal)
        if not resultat:
            return render_template('resultat.html', message="Desolé, nous n'avons rien trouvé avec le critère de recherche: " + requete)
        return render_template('resultat.html', animaux=resultat, critere = requete)
    else:
        return render_template('resultat.html', message="Critère vide ! Veuillez entrer un critère de recherche")

@app.route('/ajouter_un_animal', methods=["GET", "POST"])
def ajouter_un_animal():
    if request.method == 'POST':
        if(not valider_formulaire()):
            print("Erreur, les données envoyées au backend sont invalides !")
            return render_template("erreur-back-end.html"),422
        
        #Ajout de l'animal à la base de données
        id_animal_ajoute = get_db().add_animal(
            request.form['nom'],
            request.form['espece'],
            request.form['race'],
            request.form['age'],
            request.form['description'],
            request.form['courriel'],
            request.form['adresse'],
            request.form['ville'],
            request.form['codePostal']
        )
        return redirect(url_for('animal', id_animal=id_animal_ajoute))
    return render_template('ajouter.html')
