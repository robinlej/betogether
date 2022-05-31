import './stylesheets/OuterLabelInput.css'

const OuterLabelInput = ({ children, name, accept, value, handleClick }) => {
  return (
    <div className='outer-label-wrap'>
      <label className='outer-label' htmlFor={name}>
        {children}
      </label>
      <div className='outer-label-file-wrap'>
        <input type='button' name={name} id={name} value={value} accept={accept} onClick={handleClick}/>
      </div>
    </div>
  )
}

export default OuterLabelInput
