import './stylesheets/innerlabelinput.css'

const InnerLabelInput = ({ children, name, type, required, isValid, handleInputChange }) => {

  const mainChild = Array.isArray(children) ? children[0] : children
  const secondaryChildren = Array.isArray(children) ? [...children].slice(1) : null

  return (
    <div className='inner-label-wrap'>
      <input
        className={`${isValid === false ? 'invalid' : null}`}
        type={type}
        name={name}
        id={name}
        placeholder={mainChild}
        onChange={handleInputChange}
        required={required ? true : false}
      />
      <label className='inner-label' htmlFor={name}>{mainChild}</label>
      {secondaryChildren}
    </div>
  )
}

export default InnerLabelInput