## Documentation

Ce projet a été réalisé dans le cadre du cours de INF3190 dispensé par le professeur Jacques Berger à l'Université du Quebec à Montréal.

Ce projet est une application web implementée à partir de Python, Flask et Bootstrap. Elle (l'application web) sert à offrir un animal de compagnie en adoption.

## Auteurs

1- Alpha Issiaga DEM - DEMA06129900

2- Kaikou Loic DEGNI - DEGK24059500

## Structure

Le projet contient:

- `index.py`: Le fichier principal de l'application contenant le code Flask.
- `templates/`: Dossier contenant les templates HTML utilisés pour le rendu des pages.
- `static/`: Dossier contenant les fichiers statiques tels que CSS, JavaScript et images.
- `README.md`: Il s'agit de la documentation et contient aussi le code permanent des étudiants ayant participé à ce projet.
- `db/`: Dossier contenant la base de données de l'application.
- `makefile`: Fichier permettant de lancer l'application.
- `licence`: Fichier contenant la licence du projet.
- `database.py`: Fichier contenant les fonctions permettant de manipuler la base de données.
- `.gitignore`: Fichier permettant d'ignorer certains fichiers lors de l'ajout des fichiers dans le dépôt git.

## Dependance

Pour executer ce projet, il faut installer les dépendances suivantes:

- Python 3.12+
- Flask 3+
- Make

## Execution

Pour executer ce projet, il suffit de lancer la commande suivante à la racine du projet:

```bash
➜  inf3190_tp3 git:(main) ✗ make
```

Le serveur sera lancé et l'application sera accessible sur le port 5000. Il suffit ainsi d'ouvrir un navigateur et de se rendre à l'adresse qui sera affichée sur la console.

Exemple: 

```bash
➜  inf3190_tp3 git:(main) ✗ make
flask run
 * Serving Flask app 'index.py'
 * Debug mode: off
WARNING: This is a development server. Do not use it in a production deployment. Use a production WSGI server instead.
 * Running on http://127.0.0.1:5000
Press CTRL+C to quit
```

Pour arrêter le serveur, il suffit de faire `Ctrl+C` dans le terminal.