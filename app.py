from flask import Flask, render_template, request, redirect, url_for, flash

app = Flask(__name__)
app.config['SECRET_KEY'] = 'change-me-plus-tard'  # nécessaire pour les messages flash


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/cours')
def cours():
    return render_template('cours.html')


@app.route('/qui-suis-je')
def qui_suis_je():
    return render_template('qui_suis_je.html')


@app.route('/contact', methods=['GET', 'POST'])
def contact():
    if request.method == 'POST':
        nom = request.form.get('nom')
        email = request.form.get('email')
        message = request.form.get('message')
        # Pour l'instant on ne fait que simuler l'envoi
        flash("Message reçu. Je vous répondrai rapidement.", 'success')
        app.logger.info(f"NOUVEAU MESSAGE: {nom} <{email}> | {message}")
        return redirect(url_for('contact'))
    return render_template('contact.html')


if __name__ == '__main__':
    app.run(debug=True)
