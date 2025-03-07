import React, { useState } from "react";
import axios from "axios";

const InputForm = ({ setResultados }) => {
  const [investimento, setInvestimento] = useState("");
  const [fluxos, setFluxos] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://127.0.0.1:5000/calcular", {
        investimento: parseFloat(investimento),
        fluxos: fluxos.split(",").map((item) => parseFloat(item.trim())),
      });
      setResultados(response.data);
    } catch (error) {
      console.error("Erro ao calcular:", error);
    }
  };
};

export default InputForm;
