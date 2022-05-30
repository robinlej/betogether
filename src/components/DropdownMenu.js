import './stylesheets/dropdownmenu.css'

const DropdownMenu = ({ children, name, handleOptionChange }) => {

  // to be replaced by a fetch to the API
  const options = [
    {
      title: 'Johnson 7',
      name: 'johnson7',
      id: 1,
    },
    {
      title: 'Hopper 3',
      name: 'hopper3',
      id: 2,
    },
    {
      title: 'Lovelace 8',
      name: 'lovelace8',
      id: 3,
    },
    {
      title: 'Bouman 4',
      name: 'bouman4',
      id: 4,
    },
    {
      title: 'Swartz 6',
      name: 'swartz6',
      id: 5,
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