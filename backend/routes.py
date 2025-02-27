from flask import Blueprint, request, jsonify
from services import calcular_vpl, calcular_tir, calcular_payback

calcular_routes = Blueprint('calcular_routes', __name__)

@calcular_routes.route('/calcular', methods=['POST'])
def calcular():
    data = request.json
    investimento = data['investimento']
    fluxos = data['fluxos']

    vpl = calcular_vpl(investimento, fluxos)
    tir = calcular_tir(investimento, fluxos)
    payback_simples, payback_desc = calcular_payback(investimento, fluxos)

    return jsonify({
        "vpl": vpl,
        "tir": tir,
        "payback_simples": payback_simples,
        "payback_desc": payback_desc
    })