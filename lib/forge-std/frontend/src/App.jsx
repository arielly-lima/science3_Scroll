// frontend/src/App.jsx
import { useState } from 'react';
import './index.css';

function App() {
  const [connected, setConnected] = useState(false);

  const connectWallet = () => setConnected(true);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-800">
      <h1 className="text-3xl font-bold mb-4">🚀 Proof of Science</h1>
      <p className="mb-4">dApp para registro de descobertas científicas na blockchain.</p>
      {connected ? (
        <div className="p-4 bg-white rounded shadow">
          <p className="text-green-600">Carteira conectada!</p>
          <p>Bem-vindo à plataforma 🎉</p>
        </div>
      ) : (
        <button
          onClick={connectWallet}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Conectar Carteira
        </button>
      )}
    </div>
  );
}

export default App;
