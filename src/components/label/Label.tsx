

function Label({ className, ...props}: React.ComponentProps<"label">) {
  return (
    <label 
    className={`text-xs font-medium ${className}`}
    {...props}
    />


  )
}

export default Label