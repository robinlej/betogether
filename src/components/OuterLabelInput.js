import './stylesheets/OuterLabelInput.css'

const OuterLabelInput = ({ children, name, type }) => {
  return (
    <div className='outer-label-wrap'>
      <label className='outer-label' htmlFor={name}>
        {children}
      </label>
      <input type={type} name={name} id={name} />
    </div>
  )
}

export default OuterLabelInput