import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    // Kita gunakan container utama agar styling #root bekerja maksimal
    <main className="main-container">
      
      {/* Bagian Hero / Logo */}
      <div className="logo-wrapper">
        <a href="https://vite.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      {/* Judul dengan gradasi */}
      <h1 className="title">HAIII</h1>
      
      <p className="subtitle">
        Selamat datang di proyek React modern Anda. 
        Mari mulai membangun sesuatu yang luar biasa.
      </p>

      {/* Card dengan efek Glassmorphism */}
      <div className="card">
        <div className="counter-section">
          <button className="btn-count" onClick={() => setCount((count) => count + 1)}>
            count is <span>{count}</span>
          </button>
        </div>
        
        <p className="edit-info">
          Edit <code>src/App.jsx</code> dan simpan untuk melihat perubahan (HMR).
        </p>
      </div>

      {/* Footer / Info tambahan */}
      <footer className="footer">
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
      </footer>

    </main>
  )
}

export default App