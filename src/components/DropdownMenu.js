import './stylesheets/dropdownmenu.css'

const DropdownMenu = ({ children, name }) => {

  // to be replaced by a fetch to the API
  const options = ['Johnson 7', 'Hopper 3', 'Bouman 4', 'Lovelace 8', 'Swartz 6']

  return (
    <select className='dropdown-select' name={name} id={name}>
      <option value=''>{children}</option>
      {options.map(option => (
        <option key={option} value={option}>{option}</option>
      ))}
    </select>
  )
}

export default DropdownMenu