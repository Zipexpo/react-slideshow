import "./button.css"
export default function Button( {children,variant,className,...props}) {
    return <button className={`button ${variant} ${className}`} {...props}>
        {children}
    </button>
}