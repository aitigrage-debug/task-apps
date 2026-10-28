
function Textarea({className, ...props}: React.ComponentProps<"textarea">) {
  return (
    <textarea className={` 
    bg-transparent text-xs focus:ring-1 focus:ring-[var(--accent)] focus:border-[var(--accent)] focus:outline-none
    border border-[var(--accent-border)] rounded-md px-3 py-2 min-h-16 w-full
    disabled:opacity-50
    ${className}
    `}
    {...props}
    />

  )
}

export default Textarea
