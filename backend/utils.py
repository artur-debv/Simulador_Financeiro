import requests

def obter_taxa_selic():
    url = "https://api.bcb.gov.br/dados/serie/bcdata.sgs.11/dados/ultimos/1?formato=json"
    response = requests.get(url)
    if response.status_code == 200:
        dados = response.json()
        return float(dados[0]['valor']) / 100  # Convertendo para decimal
    return 0.10  # Valor padrão caso a API falhe

def obter_ipca():
    url = "https://servicodados.ibge.gov.br/api/v3/agregados/1737/periodos/-1/variaveis/2265?formato=json"
    response = requests.get(url)
    if response.status_code == 200:
        dados = response.json()
        return float(list(dados[0]['resultados'][0]['series'][0]['serie'].values())[0]) / 100  # Convertendo para decimal
    return 0.05  # Valor padrão caso a API falhe