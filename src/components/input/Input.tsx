

function Input({className, type, ...props}: React.ComponentProps<"input">) {
  return (
    <input className={`
         text-xs focus:outline-none focus:ring-1 focus:ring-[var(--accent)] focus:border-[var(--accent)]
         border border-[var(--accent-border)] rounded-md px-3 py-1 h-9
         bg-transparent text-[var(--input-text)]
         disabled:cursor-not-allowed disabled:opacity-50 
        ${className}`} 
        type={type} 
        {...props}
     />


  )
}

export default Input