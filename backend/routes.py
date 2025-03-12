from flask import Blueprint, request, jsonify
from services import calcular_tir, calcular_vpl, obter_tma

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

        # Buscar TMA com 9 casas decimais
        tma, taxa_selic, taxa_ipca = obter_tma()

        tir = calcular_tir(investimento, fluxos)
        vpl = calcular_vpl(investimento, fluxos, tma)

        return jsonify({
            "vpl": round(vpl, 2),
            "tir": tir,
            "tma": f"{tma:.9f}",  # Formata para 9 casas decimais
            "taxa_selic": f"{taxa_selic:.9f}",
            "taxa_ipca": f"{taxa_ipca:.9f}"
        })
    except Exception as e:
        return jsonify({"erro": str(e)}), 500