import React, { useState } from "react";
import axios from "axios";

const SimuladorFinanceiro = () => {
  const [investimento, setInvestimento] = useState("");
  const [fluxos, setFluxos] = useState("");
  const [resultado, setResultado] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const fluxoArray = fluxos.split(",").map(Number);

    try {
      const response = await axios.post("http://127.0.0.1:5000/calcular", {
        investimento: Number(investimento),
        fluxos: fluxoArray,
      });
      setResultado(response.data);
    } catch (error) {
      console.error("Erro ao calcular:", error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Investimento Inicial:
          <input
            type="number"
            value={investimento}
            onChange={(e) => setInvestimento(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Fluxos de Caixa (separados por vírgula):
          <input
            type="text"
            value={fluxos}
            onChange={(e) => setFluxos(e.target.value)}
            required
          />
        </label>
        <br />
        <button type="submit">Calcular</button>
      </form>
      {resultado && (
        <div>
          <h3>Resultado:</h3>
          <pre>{JSON.stringify(resultado, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default SimuladorFinanceiro;
