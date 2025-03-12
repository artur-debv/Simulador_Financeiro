import React, { useState } from "react";

function Simulador() {
  const [capitalInicial, setCapitalInicial] = useState("");
  const [taxaJuros, setTaxaJuros] = useState("");
  const [anos, setAnos] = useState("");
  const [resultado, setResultado] = useState(null);

  const calcularInvestimento = () => {
    const capital = parseFloat(capitalInicial);
    const juros = parseFloat(taxaJuros) / 100;
    const periodo = parseFloat(anos);

    const montante = capital * Math.pow(1 + juros, periodo);
    setResultado(montante.toFixed(2));
  };

  return (
    <div className="bg-gray-50 text-gray-800 font-sans min-h-screen">
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-semibold text-indigo-800 mb-8">
            Simulador de Investimento
          </h2>
          <div className="space-y-6">
            <div>
              <label
                htmlFor="capital"
                className="block text-lg text-gray-800 mb-2"
              >
                Capital Inicial (R$)
              </label>
              <input
                type="number"
                id="capital"
                value={capitalInicial}
                onChange={(e) => setCapitalInicial(e.target.value)}
                className="w-full px-4 py-3 border rounded-lg"
              />
            </div>
            <div>
              <label
                htmlFor="taxa"
                className="block text-lg text-gray-800 mb-2"
              >
                Taxa de Juros Anual (%)
              </label>
              <input
                type="number"
                id="taxa"
                value={taxaJuros}
                onChange={(e) => setTaxaJuros(e.target.value)}
                className="w-full px-4 py-3 border rounded-lg"
              />
            </div>
            <div>
              <label
                htmlFor="anos"
                className="block text-lg text-gray-800 mb-2"
              >
                Período (anos)
              </label>
              <input
                type="number"
                id="anos"
                value={anos}
                onChange={(e) => setAnos(e.target.value)}
                className="w-full px-4 py-3 border rounded-lg"
              />
            </div>
            <button
              onClick={calcularInvestimento}
              className="bg-indigo-600 text-white py-3 px-8 rounded-full text-lg hover:bg-indigo-500 transition-all duration-300"
            >
              Calcular
            </button>
            {resultado && (
              <div className="mt-8">
                <h3 className="text-2xl font-semibold text-indigo-800">
                  Resultado
                </h3>
                <p className="text-lg text-gray-600">
                  O valor acumulado após {anos} anos será de R$
                  {resultado}.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Simulador;
