import './stylesheets/OuterLabelInput.css'

const OuterLabelInput = ({ children, name, type, handleInputChange }) => {
  return (
    <div className='outer-label-wrap'>
      <label className='outer-label' htmlFor={name}>
        {children}
      </label>
      <input type={type} name={name} id={name} onChange={handleInputChange} />
    </div>
  )
}

export default OuterLabelInput