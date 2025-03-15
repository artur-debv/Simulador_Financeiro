import React, { useState } from "react";
import axios from "axios";

function Simulador() {
  const [investimento, setInvestimento] = useState("");
  const [fluxos, setFluxos] = useState("");
  const [resultado, setResultado] = useState(null);

  const calcularInvestimento = async () => {
    const init = parseFloat(investimento);
    const fluxoArray = fluxos.split(",").map((val) => parseFloat(val.trim()));
    try {
      const response = await axios.post("https://simulador-financeiro-6naq.onrender.com/calcular", {
        investimento: init,
        fluxos: fluxoArray,
      });
      setResultado(response.data);
    } catch (error) {
      console.error("Erro ao calcular:", error);
    }
  };

  return (
    <div className="bg-gray-50 text-gray-800 font-sans min-h-screen p-6">
      <section className="py-8 px-4 bg-white rounded shadow max-w-xl mx-auto">
        <h2 className="text-3xl font-semibold text-indigo-800 mb-8">
          Simulador de VPL e TIR
        </h2>
        <div className="space-y-6">
          <div>
            <label htmlFor="investimento" className="block text-lg mb-2">
              Investimento Inicial (R$)
            </label>
            <input
              type="number"
              id="investimento"
              value={investimento}
              onChange={(e) => setInvestimento(e.target.value)}
              className="w-full px-4 py-3 border rounded-lg"
              placeholder="Ex: 1000"
              required
            />
          </div>
          <div>
            <label htmlFor="fluxos" className="block text-lg mb-2">
              Fluxos de Caixa (separados por vírgula)
            </label>
            <input
              type="text"
              id="fluxos"
              value={fluxos}
              onChange={(e) => setFluxos(e.target.value)}
              className="w-full px-4 py-3 border rounded-lg"
              placeholder="Ex: 300, 400, 500, 600"
              required
            />
          </div>
          <button
            onClick={calcularInvestimento}
            className="bg-indigo-600 text-white py-3 px-8 rounded-full text-lg hover:bg-indigo-500 transition-all duration-300"
          >
            Calcular
          </button>
          {resultado && (
            <div className="mt-8 p-4 border rounded-lg bg-gray-100">
              <h3 className="text-2xl font-semibold text-indigo-800">
                Resultado
              </h3>
              <p className="text-lg text-gray-600">VPL: R$ {resultado.vpl}</p>
              <p className="text-lg text-gray-600">TIR: {resultado.tir}%</p>
              {resultado.tma !== undefined && (
                <p className="text-lg text-gray-600">
                  TMA (Taxa Mínima de Atratividade): {resultado.tma}
                  <br />
                  <span className="text-sm text-gray-500">
                    (Taxa SELIC: {resultado.taxa_selic} + IPCA:{" "}
                    {resultado.taxa_ipca})
                  </span>
                </p>
              )}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

export default Simulador;
