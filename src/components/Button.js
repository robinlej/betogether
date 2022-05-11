import './button.css'

const Button = ({ children, className, handleClick }) => {
  return (
    <button className={`btn ${className}`} onClick={handleClick}>{children}</button>
  )
}

export default Button