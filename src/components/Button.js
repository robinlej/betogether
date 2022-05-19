import './stylesheets/button.css'

const Button = ({ children, className, style, handleClick }) => {
  return (
    <button className={`btn ${className}`} style={style} onClick={handleClick}>{children}</button>
  )
}

export default Button