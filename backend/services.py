import numpy as np
import numpy_financial as npf
import requests

def calcular_vpl(investimento_inicial, fluxos_de_caixa, tma):
    vpl = sum(fc / ((1 + tma) ** t) for t, fc in enumerate(fluxos_de_caixa))  # Começar a contagem do tempo com 0
    resultado = vpl - investimento_inicial
    return resultado

def calcular_tir(investimento, fluxos):
    fluxo_completo = [-investimento] + fluxos
    tir = npf.irr(fluxo_completo)  # Corrigindo a chamada da função
    return f"{round(tir * 100, 2)}%"

def obter_tma():
    """Obtém a TMA baseada na Taxa Selic e IPCA acumulado nos últimos 12 meses com 9 casas decimais."""
    try:
        # URLs para obter os dados da Selic e do IPCA
        url_selic = "https://api.bcb.gov.br/dados/serie/bcdata.sgs.432/dados/ultimos/1?formato=json"
        url_ipca = "https://api.bcb.gov.br/dados/serie/bcdata.sgs.433/dados/ultimos/12?formato=json"  # Alterado para pegar 12 meses

        # Fazendo as requisições para as APIs
        selic_res = requests.get(url_selic).json()
        ipca_res = requests.get(url_ipca).json()

        # Extraindo a taxa Selic (última taxa disponível)
        taxa_selic = round(float(selic_res[0]["valor"]) / 100, 9)  # 9 casas decimais

        # Calculando o IPCA acumulado nos últimos 12 meses
        ipca_acumulado = 1
        for i in range(12):  # Acumulando os valores do IPCA dos últimos 12 meses
            ipca_acumulado *= (1 + float(ipca_res[i]["valor"]) / 100)
        
        # Calculando o IPCA acumulado com 9 casas decimais
        taxa_ipca = round(ipca_acumulado - 1, 9)

        # Calculando a TMA de forma composta usando a fórmula de Fisher
        tma = round((1 + taxa_selic) * (1 + taxa_ipca) - 1, 9)

        return tma, taxa_selic, taxa_ipca
    except Exception as e:
        print(f"Erro ao obter TMA: {e}")
        return round(0.1, 9), round(0.0, 9), round(0.0, 9)  # Retorno padrão



def calcular_payback(investimento_inicial, fluxos_de_caixa, tma):
    """Calcula o Payback Simples e Descontado."""
    saldo = -investimento_inicial
    tempo_simples = 0
    for t, fc in enumerate(fluxos_de_caixa, start=1):
        saldo += fc
        if saldo >= 0:
            tempo_simples = t
            break
    
    # Payback descontado
    saldo_desc = -investimento_inicial
    tempo_desc = 0
    for t, fc in enumerate(fluxos_de_caixa, start=1):
        saldo_desc += fc / ((1 + tma) ** t)  # Aplicando a TMA
        if saldo_desc >= 0:
            tempo_desc = t
            break

    return tempo_simples, tempo_desc
