 
 interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link';
  size?: 'default' | 'sm' | 'lg' | 'icon';
  isLoading?: boolean;
 }


import React from 'react'

function Button({
    children, 
    type='button',
    disabled=false, 
    variant = 'default', 
    size = 'default', 
    className= "",
    isLoading, 
    ...props 

}: ButtonProps) {

    const baseStyles = "px-4 py-2 rounded font-medium transition-colors";

    const VariantStyles = {
        default : "bg-[var(--accent-bg)] text-[var(--accent)] hover:bg-[var(--accent-border)]",
        destructive : "bg-red-500 text-white hover:bg-red-600",
        outline : "border border-gray-300 text-gray-700 hover:bg-gray-100",
        secondary : "bg-gray-200 text-gray-900 hover:bg-gray-300",
        ghost : "text-gray-700 hover:bg-gray-200",
        link : "text-blue-500 hover:text-blue-600"
    }[variant];

    
    const SizeStyles = {
        default : "text-base",
        sm : "text-sm px-3 py-1",
        lg : "text-lg px-5 py-3",
        icon : "p-2"
    }[size];


  return (
    <button type={type} disabled={disabled} className={`${baseStyles} ${VariantStyles} ${SizeStyles} ${className}`} {...props}>
        {children}

    </button>
  )
}

export default Button

