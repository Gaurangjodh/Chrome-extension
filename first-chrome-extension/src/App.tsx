// import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useState } from 'react'

function App() {

  const [color, setColor ] = useState('')
  const onclick = async () => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    chrome.scripting.executeScript<string[], void>({
      target: { tabId: tab.id! },
      args: [color],
      func: (color) => {
        // Change background color of the body
        document.body.style.backgroundColor = color;
      
        // Style all buttons funkily!
        const buttons = document.querySelectorAll('button');
        buttons.forEach((btn) => {
          btn.style.backgroundImage = `linear-gradient(135deg, ${color},rgb(9, 77, 174))`;
          btn.style.color = '#fff';
          btn.style.border = '2px solid #fff';
          btn.style.borderRadius = '20px';
          btn.style.padding = '12px 24px';
          btn.style.fontWeight = '900';
          btn.style.fontSize = '1.1rem';
          btn.style.textTransform = 'uppercase';
          btn.style.letterSpacing = '1px';
          btn.style.boxShadow = '0 0 15px rgba(255,255,255,0.5), 0 0 25px rgba(0,0,0,0.2)';
          btn.style.transition = 'all 0.3s ease-in-out';
          btn.style.cursor = 'pointer';
      
          // Add a hover effect using event listeners
          btn.addEventListener('mouseover', () => {
            btn.style.transform = 'scale(1.1) rotate(1deg)';
            btn.style.boxShadow = '0 0 20px #fff, 0 0 30px rgb(44, 4, 124)';
          });
          btn.addEventListener('mouseout', () => {
            btn.style.transform = 'scale(1)';
            btn.style.boxShadow = '0 0 15px rgba(255,255,255,0.5), 0 0 25px rgba(0,0,0,0.2)';
          });
        });
      }
      
    });
  };
  

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Gaurang's first chrome extension</h1>
      <div className="card">
        <input type="color" name="color" id="color" onChange = {(e) => setColor(e.currentTarget.value)}/>
        <button onClick = {onclick}>
          Click me
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
