import { useEffect } from "react";
import styles from './Toast.module.css'



type ToastType = 'success' | 'error' | 'info' | 'warning';


type ToastProps ={
    type : ToastType;
    message : React.ReactNode;
    title? : string;
    duration? : number;
    onClose? : () => void;
    
}

function Toast({
    type = 'info',
    message,
    title,
    duration = 3000,
    onClose,
}: ToastProps) {

    const defaultTitle = {
        'success' : 'Success',
        'error' : 'Error',
        'info' : 'Info',
        'warning' : 'Warning'
    }
    
    useEffect(() => {
        
        if (!onClose || duration <= 0) return;
        
        const timer = setTimeout(() => {
            onClose();
            
        }, duration);

        return () => {
            clearTimeout(timer);
        }

    },[duration, onClose])

  return (
    <div className={styles.toast + ' ' + styles[`toast-${type}`]}> 
    <div className={styles["toast-content"]}> 
        {/* <strong>
            {title ?? defaultTitle[type]}
        </strong>  */}
        <span>
            {message}
            
        </span>
    </div> 
    
    {onClose && ( 
        <button type="button" className={styles["toast-close"]} onClick={onClose} aria-label="Tutup" >
         × 
        </button> )}
     </div>
  )
}

export default Toast