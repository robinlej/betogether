import './stylesheets/OuterLabelInput.css'

const OuterLabelTextarea = ({ children, name, rows, cols }) => {
  return (
    <div className='outer-label-wrap'>
      <label className='outer-label' htmlFor={name}>
        {children}
      </label>
      <textarea name={name} id={name} rows={rows} cols={cols}></textarea>
    </div>
  )
}

export default OuterLabelTextarea
