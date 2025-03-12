import React, { useState, useEffect } from "react";

function RealTimeMarket() {
  const [marketData, setMarketData] = useState([]);

  // Aqui, você pode adicionar lógica para obter os dados de mercado em tempo real
  useEffect(() => {
    const fetchMarketData = async () => {
      // Simulando dados de mercado (substitua com dados reais)
      const data = [
        { name: "Ibovespa", value: "125.600" },
        { name: "Dólar", value: "5.35" },
        { name: "Taxa Selic", value: "13.75%" },
      ];
      setMarketData(data);
    };

    fetchMarketData();
  }, []);

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg">
      <h3 className="text-2xl font-semibold text-indigo-800 mb-6">
        Dados de Mercado
      </h3>
      <ul className="space-y-4">
        {marketData.map((item, index) => (
          <li key={index} className="text-lg text-gray-600">
            <strong>{item.name}: </strong>
            {item.value}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RealTimeMarket;
