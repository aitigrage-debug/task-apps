import React from 'react'

function Select({className, ...props}: React.ComponentProps<"select">) {
  return (
    <select className={
        `
        bg-(--bg) text-xs focus:outline-none focus:ring-1 focus:ring-(--accent) focus:border-(--accent)
        border border-(--accent-border) rounded-md px-2 py-1
        text-(--input-text)
        disabled:opacity-50 
        ${className}
        `} 
        
        {...props}>
      
    </select>
  )
}

export default Select
    