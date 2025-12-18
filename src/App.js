import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header className="hero">
        <div className="hero-content">
          <h1>FocusApp</h1>
          <p className="subtitle">Block distractions. Get more done.</p>
          <a href="#features" className="cta-btn">Get Started Free</a>
          <div className="interactive-demo">
            <p>Live demo: Click count → {count}</p>
            <button onClick={() => setCount(count + 1)} className="counter-btn">
              +1 Focus Point
            </button>
          </div>
        </div>
      </header>

      <section id="features" className="features">
        <h2>Why FocusApp?</h2>
        <div className="grid">
          <div className="card">
            <h3>🔒 Website Blocker</h3>
            <p>Block distracting sites during focus sessions</p>
          </div>
          <div className="card">
            <h3>⏱ Pomodoro Timer</h3>
            <p>Work in focused 25-minute bursts</p>
          </div>
          <div className="card">
            <h3>📊 Progress Tracking</h3>
            <p>See your daily focus streaks and stats</p>
          </div>
        </div>
      </section>

      <footer>
        <p>© 2025 FocusApp • Built by <a href="https://x.com/buildwithisaacman">@buildwithisaacman</a></p>
      </footer>
    </>
  )
}

export default App