import './stylesheets/dropdownmenu.css'

const DropdownMenu = ({ children, name, handleOptionChange }) => {

  // to be replaced by a fetch to the API
  const options = [
    {
      title: 'Johnson 7',
      name: 'johnson7',
      id: 1,
    },
  ]

  return (
    <select className='dropdown-select' name={name} id={name} onChange={handleOptionChange}>
      <option value=''>{children}</option>
      {options.map(option => (
        <option key={option.id} value={option.id}>{option.title}</option>
      ))}
    </select>
  )
}

export default DropdownMenu