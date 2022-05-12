import './stylesheets/OuterLabelInput.css'

const OuterLabelInput = ({ children, name, accept }) => {
  return (
    <div className='outer-label-wrap'>
      <label className='outer-label' htmlFor={name}>
        {children}
      </label>
      <div className='outer-label-file-wrap'>
        <input type='file' name={name} id={name} accept={accept} />
      </div>
    </div>
  )
}

export default OuterLabelInput
