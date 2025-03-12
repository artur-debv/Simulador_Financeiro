import React from "react";
import background from "../assets/background.jpg";
import RealTimeMarket from "../components/RealTimeMarket"; // Importando o componente

function Home() {
  return (
    <div className="bg-gray-50 text-gray-800 font-sans min-h-screen">
      {/* Hero Section */}
      <section
        className="relative h-screen bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="text-center text-white z-10 px-6 py-8">
          <h1 className="text-5xl font-bold mb-4">FinanceCalc</h1>
          <p className="text-xl mb-6 max-w-3xl mx-auto">
            Sua plataforma completa para cálculos de indicadores financeiros e
            informações sobre investimentos.
          </p>
          <a
            href="#indicadores"
            className="inline-block bg-indigo-600 text-white py-3 px-8 rounded-full text-lg hover:bg-indigo-500 transition-all duration-300"
          >
            Começar Agora
          </a>
        </div>
      </section>

      {/* Indicadores Section */}
      <section id="indicadores" className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-semibold text-indigo-800 mb-12">
            Indicadores Financeiros Importantes
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card TIR */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-indigo-800 mb-4">
                TIR
              </h3>
              <p className="text-lg text-gray-600 mb-4">
                A Taxa Interna de Retorno (TIR) indica a rentabilidade de um
                investimento.
              </p>
            </div>
            {/* Card VPL */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-indigo-800 mb-4">
                VPL
              </h3>
              <p className="text-lg text-gray-600 mb-4">
                O Valor Presente Líquido (VPL) calcula a viabilidade de um
                investimento.
              </p>
            </div>
            {/* Card ROI */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-indigo-800 mb-4">
                ROI
              </h3>
              <p className="text-lg text-gray-600 mb-4">
                O Retorno sobre Investimento (ROI) mede a eficiência de um
                investimento.
              </p>
            </div>
            {/* Card Payback */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-indigo-800 mb-4">
                Payback
              </h3>
              <p className="text-lg text-gray-600 mb-4">
                O Payback determina o tempo necessário para recuperar o
                investimento inicial.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Real-Time Market Section */}
      <section className="py-16 bg-indigo-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-semibold text-indigo-800 mb-4">
            Indicadores de Mercado em Tempo Real
          </h2>
          <RealTimeMarket /> {/* Componente do Mercado em Tempo Real */}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-indigo-600 text-white text-center">
        <h3 className="text-3xl font-semibold mb-4">
          Pronto para calcular seus investimentos?
        </h3>
        <p className="text-lg mb-8">
          Utilize nossas ferramentas para tomar decisões financeiras mais
          informadas.
        </p>
        <a
          href="#simulador"
          className="bg-white text-indigo-600 py-3 px-8 rounded-full text-lg hover:bg-gray-200 transition-all duration-300"
        >
          Simular Agora
        </a>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6 text-center">
        <p>&copy; 2025 FinanceCalc | Todos os direitos reservados</p>
      </footer>
    </div>
  );
}

export default Home;
