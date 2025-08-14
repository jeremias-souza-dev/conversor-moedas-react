import React, { useState } from 'react';
import './App.css';

function App() {
  const [valor, setValor] = useState('');
  const [moedaOrigem, setMoedaOrigem] = useState('BRL');
  const [moedaDestino, setMoedaDestino] = useState('USD');
  const [resultado, setResultado] = useState('Resultado');

  // Lista de moedas (copiada do seu projeto C#)
  const listaMoedas = [
    { code: 'BRL', name: 'Real Brasileiro' },
    { code: 'USD', name: 'Dólar Americano' },
    { code: 'EUR', name: 'Euro' },
    { code: 'GBP', name: 'Libra Esterlina' },
    { code: 'JPY', name: 'Iene Japonês' },
    { code: 'AUD', name: 'Dólar Australiano' },
    { code: 'CAD', name: 'Dólar Canadense' },
    { code: 'CHF', name: 'Franco Suíço' },
    { code: 'CNY', name: 'Yuan Chinês' },
    { code: 'ARS', name: 'Peso Argentino' },
    { code: 'MXN', name: 'Peso Mexicano' },
    { code: 'CLP', name: 'Peso Chileno' },
    { code: 'ZAR', name: 'Rand Sul-Africano' },
    { code: 'NZD', name: 'Dólar Neozelandês' },
    { code: 'TRY', name: 'Lira Turca' }
  ];

  const handleConverter = async () => {
    if (!valor || isNaN(valor) || parseFloat(valor) <= 0) {
      alert("Digite um valor válido maior que zero.");
      return;
    }
    
    try {
      const apiKey = "96567d09a133bcaeeacfbda8";
      const url = `https://v6.exchangerate-api.com/v6/${apiKey}/pair/${moedaOrigem}/${moedaDestino}/${valor}`;
      
      const response = await fetch(url);
      const data = await response.json();
      
      if (data.result !== "success") {
        throw new Error(`API retornou erro: ${data.result}`);
      }
      
      setResultado(`${valor} ${moedaOrigem} = ${data.conversion_result.toFixed(2)} ${moedaDestino}`);
      
    } catch (error) {
      alert("Erro: " + error.message);
    }
  };

  return (
    <div className="container">
      <h1 className="titulo">Conversor de Moedas</h1>
      
      <div className="painel-inputs">
        <div className="input-group">
          <label htmlFor="valor">Valor:</label>
          <input 
            type="number" 
            id="valor" 
            value={valor} 
            onChange={(e) => setValor(e.target.value)} 
          />
        </div>
        
        <div className="input-group">
          <label htmlFor="origem">De (ex: BRL):</label>
          <select 
            id="origem" 
            value={moedaOrigem} 
            onChange={(e) => setMoedaOrigem(e.target.value)}
          >
            {listaMoedas.map((moeda) => (
              <option key={moeda.code} value={moeda.code}>
                {`${moeda.code} - ${moeda.name}`}
              </option>
            ))}
          </select>
        </div>
        
        <div className="input-group">
          <label htmlFor="destino">Para (ex: USD):</label>
          <select 
            id="destino" 
            value={moedaDestino} 
            onChange={(e) => setMoedaDestino(e.target.value)}
          >
            {listaMoedas.map((moeda) => (
              <option key={moeda.code} value={moeda.code}>
                {`${moeda.code} - ${moeda.name}`}
              </option>
            ))}
          </select>
        </div>
      </div>
      
      <p className="resultado">{resultado}</p>
      
      <button className="btn-converter" onClick={handleConverter}>
        Converter
      </button>
      
    </div>
  );
}

export default App;