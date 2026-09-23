import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Button from './components/button/Button'
import Toast from './components/toast/Toast'
import Input from './components/input/Input'
import Label from './components/label/Label'

function App() {
  const [count, setCount] = useState(0)
  const [showToast, setShowToast] = useState(false);
  const handleSave = async () => { 
    try { 
       setShowToast(true); 
    } catch { 
      setShowToast(true);
     }
   };

  return (
    <>
    {showToast && ( 
      <Toast
       type="info" 
       message="Data berhasil disimpan." 
       duration={3000} 
       onClose={() => setShowToast(false)} /> 
    )}
     

      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        <div>
          <h1>Get started</h1>
          <p>
            Edit <code>src/App.tsx</code> and save to test <code>HMR</code>
          </p>
        </div>
        <button
          type="button"
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
        <Button variant="default" size="icon" onClick={handleSave}>
           +
        </Button>
        <p className="text-green-500">
          Click on the Vite and React logos to learn more
        </p>
        <div className="flex flex-col gap-2">
          <Label>Name</Label>
          <Input placeholder="enter your name "/>
        </div>

      </section>

      

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App
