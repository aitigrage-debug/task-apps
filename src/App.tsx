import { useState } from 'react';
import heroImg from './assets/hero.png';
import reactLogo from './assets/react.svg';
import viteLogo from './assets/vite.svg';
import './App.css';
import Button from './components/button/Button';
import Toast from './components/toast/Toast';
import Input from './components/input/Input';
import Label from './components/label/Label';
import Textarea from './components/textarea/Textarea';
import Select from './components/select/Select';
import { Dialog, DialogTrigger, DialogContent, DialogClose } from './components/dialog/Dialog';
import {BadgeContainer} from './components/badge/BadgeContainer';
import EmailIcon from '@mui/icons-material/Email';
import Avatar from './components/avatar/Avatar';




function App() {
  const [count, setCount] = useState(0)
  const [showToast, setShowToast] = useState(false);
  const [success, setSuccess] = useState(false);
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
       type={success ? "success" : "error"} 
       message={success ? "Data berhasil disimpan!" : "Terjadi kesalahan saat menyimpan data."}
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
        <div className="flex flex-col gap-2 ">
          <Label>Name</Label>
          <Input placeholder="enter your name "/>
          <Textarea/>
          <Select>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </Select>
        </div>
        <BadgeContainer badge={99} variant="success" size="small">
          <EmailIcon fontSize="large" />
        </BadgeContainer>

        <div className="flex gap-4">
            <Avatar src="https://randomuser.me/api/portraits/men/75.jpg" alt="John Doe" size="large" variant="circle" />
            <Avatar src="https://randomuser.me" alt="John Doe" size="large" variant="circle" />
        </div>


      </section>


      <Dialog >
        <DialogTrigger>
          Open Dialog
        </DialogTrigger>

        <DialogContent>
          <h2>Hello World</h2>

          <p>
            Ini adalah isi dialog.
          </p>

          <DialogClose className="flex flex-col place-self-end bg-red-500 text-white px-4 py-2 rounded">
            Close
          </DialogClose>
        </DialogContent>
      </Dialog>



      



      <div className="ticks"></div>

      <section id="spacer"></section>
    </>
  )
}

export default App
