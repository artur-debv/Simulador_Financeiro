import React from "react";
import RealTimeMarket from "../components/RealTimeMarket";

function Market() {
  return (
    <div>
      <section className="py-16 bg-indigo-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-semibold text-indigo-800 mb-4">
            Indicadores de Mercado em Tempo Real
          </h2>
          <RealTimeMarket />
        </div>
      </section>
    </div>
  );
}

export default Market;
