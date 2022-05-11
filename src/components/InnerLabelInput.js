import './stylesheets/innerlabelinput.css'

const InnerLabelInput = ({ children, name, type }) => {

  return (
    <div className='inner-label-wrap'>
      <input
        type={type}
        name={name}
        id={name}
        placeholder={children}
      />
      <label className='inner-label' htmlFor={name}>{children}</label>
    </div>
  )
}

export default InnerLabelInput