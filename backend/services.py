import numpy as np
import numpy_financial as npf

def calcular_vpl(investimento_inicial, fluxos_de_caixa, tma):
    """Calcula o Valor Presente Líquido (VPL)."""
    vpl = sum(fc / ((1 + tma) ** t) for t, fc in enumerate(fluxos_de_caixa, start=1))
    return vpl - investimento_inicial

def calcular_tir(investimento, fluxos):
    fluxo_completo = [-investimento] + fluxos
    tir = npf.irr(fluxo_completo)  # Corrigindo a chamada da função
    return tir


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
