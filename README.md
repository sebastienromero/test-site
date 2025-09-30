# Site de cours particuliers (Margarita)

Petit site Flask pour présenter des cours particuliers de mathématiques et physique-chimie.

## Lancer en local

Assurez-vous d'être dans l'environnement conda :

```
conda activate margarita
python app.py
```

Puis ouvrir http://localhost:5000

## Structure

```
margarita/
  app.py
  templates/
    base.html
    index.html
    cours.html
    qui_suis_je.html
    contact.html
  static/
    css/style.css
  environment.yml
```

## Étapes suivantes possibles

- Valider et personnaliser le contenu (tarifs, bio)
- Ajouter un envoi réel d'e-mails (bibliothèque comme Flask-Mail ou un service externe)
- Ajouter un favicon et logo
- Optimisations SEO (balises Open Graph, titre dynamique complet)

## Sécurité

Changer la valeur de `SECRET_KEY` dans `app.py` (utiliser une clé aléatoire, par ex. avec `python -c "import secrets; print(secrets.token_hex(32))"`).
