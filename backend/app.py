from flask import Flask
from flask_cors import CORS
from routes import calcular_routes
from database import init_db
from utils import obter_taxa_selic, obter_ipca

app = Flask(__name__)
CORS(app)

# Inicializar o banco de dados
init_db()

# Registrar as rotas
app.register_blueprint(calcular_routes)

# Obter taxas atuais
taxa_selic = obter_taxa_selic()
taxa_ipca = obter_ipca()

# @app.route('/')
# def home():
#     return 'Hello, World!'

if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0", port=5000)

