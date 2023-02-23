from flask import Flask, render_template
import sqlite3

app = Flask(__name__)

@app.route('/')
def index():
    connection = sqlite3.connect('database.db')
    cursor = connection.cursor()
    cursor.execute('SELECT * FROM tabela')
    dados = cursor.fetchall()
    connection.close()
    return render_template('index.html', dados=dados)

if __name__ == '__main__':
    app.run(debug=True)

