from flask import Blueprint, request, jsonify
from services import calcular_tir

calcular_routes = Blueprint("calcular_routes", __name__)

@calcular_routes.route('/calcular', methods=['POST'])
def calcular():
    try:
        data = request.get_json()
        if data is None:
            return jsonify({"erro": "JSON inválido ou não enviado"}), 400

        investimento = data.get("investimento")
        fluxos = data.get("fluxos", [])

        if investimento is None or not isinstance(fluxos, list):
            return jsonify({"erro": "Os campos 'investimento' e 'fluxos' são obrigatórios"}), 400

        tir = calcular_tir(investimento, fluxos)
        return jsonify({"tir": tir})
    except Exception as e:
        return jsonify({"erro": str(e)}), 500
