import {
  createContext,
  useContext,
  useState,
  type ReactNode
} from "react";

import {createPortal} from "react-dom";



type DialogContextValue = {
  open : boolean;
  setOpen : (open: boolean) => void;
}

const DialogContext = createContext<DialogContextValue | null> (null);


type DialogProps = {
  children : ReactNode;
}


function Dialog ({children}: DialogProps) {
  const [open, setOpen ] = useState(false);
  
  return(
    <DialogContext.Provider value={{open,setOpen}}>
      {children}
    </DialogContext.Provider>
  );
}



function useDialog() {
  const context = useContext(DialogContext);

  if(!context) {
    throw new Error (
      "Dialog components must be used inside <Dialog>"
    );
  }
  return context;
}



function DialogTrigger(  {children, }: {children : ReactNode;}  ) {

  const{setOpen} = useDialog();

  return (
    < button onClick= {() => setOpen(true)} >
      {children}
    </button>
  );
}



function DialogContent( {children}: {children : ReactNode} ) {
  const {open} = useDialog();

  if (!open) {
    return null;
  }

  return (
    <DialogPortal>
      <DialogOverlay />

      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 rounded-lg bg-zinc-800 p-6 shadow-lg z-1001" role="dialog" aria-modal="true">        
        {children}        
      </div>

    </DialogPortal>

  );
}



function DialogOverlay() {
  return (
    <div
    className ="fixed inset-0 bg-black/50 backdrop-blur-sm z-1000 aria-hidden:true"
    />
  )
} 



function DialogClose ( {children, className }: {children: ReactNode, className?: string} ) {

  const {setOpen} = useDialog();

  return (
    <button onClick={() => setOpen(false)} className={className}>
      {children}
    </button>
  );
}



function DialogPortal ( {children, }: {children : ReactNode} ) {
  
  return createPortal(
    children,
    document.body
  );
}


export {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogClose,
  DialogPortal,
};



