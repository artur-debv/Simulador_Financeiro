import React from "react";

function Investimentos() {
  return (
    <div className="bg-gray-50 text-gray-800 font-sans min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen bg-indigo-600 text-white flex items-center justify-center">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="text-center z-10 px-6 py-8">
          <h1 className="text-5xl font-bold mb-4">
            Investimentos na Bolsa de Valores
          </h1>
          <p className="text-xl max-w-3xl mx-auto">
            Saiba tudo sobre os tipos de investimentos, suas vantagens e como
            escolher o melhor para o seu perfil.
          </p>
        </div>
      </section>

      {/* Informações sobre Investimentos */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-semibold text-indigo-800 mb-8">
            Tipos de Investimentos
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card Ações */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-indigo-800 mb-4">
                Ações
              </h3>
              <p className="text-lg text-gray-600 mb-4">
                Investir em ações significa comprar uma parte de empresas
                listadas na bolsa, aproveitando a valorização e dividendos.
              </p>
            </div>
            {/* Card Renda Fixa */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-indigo-800 mb-4">
                Renda Fixa
              </h3>
              <p className="text-lg text-gray-600 mb-4">
                A renda fixa oferece uma rentabilidade previsível, com prazos e
                valores definidos.
              </p>
            </div>
            {/* Card Fundos Imobiliários */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-indigo-800 mb-4">
                Fundos Imobiliários
              </h3>
              <p className="text-lg text-gray-600 mb-4">
                Os fundos imobiliários permitem investir em imóveis sem precisar
                comprar o imóvel diretamente.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-indigo-600 text-white text-center">
        <h3 className="text-3xl font-semibold mb-4">Invista com Sabedoria!</h3>
        <p className="text-lg mb-8">
          Entenda o mercado e comece a investir agora mesmo.
        </p>
        <a
          href="#simulador"
          className="bg-white text-indigo-600 py-3 px-8 rounded-full text-lg hover:bg-gray-200 transition-all duration-300"
        >
          Simular Investimentos
        </a>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6 text-center">
        <p>&copy; 2025 FinanceCalc | Todos os direitos reservados</p>
      </footer>
    </div>
  );
}

export default Investimentos;
