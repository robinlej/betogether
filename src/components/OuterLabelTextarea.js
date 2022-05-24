import './stylesheets/OuterLabelInput.css'

const OuterLabelTextarea = ({
  children,
  name,
  rows,
  cols,
  handleInputChange,
}) => {
  return (
    <div className='outer-label-wrap'>
      <label className='outer-label' htmlFor={name}>
        {children}
      </label>
      <textarea
        name={name}
        id={name}
        rows={rows}
        cols={cols}
        onChange={handleInputChange}
      ></textarea>
    </div>
  )
}

export default OuterLabelTextarea
