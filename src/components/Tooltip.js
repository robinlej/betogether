import { AiFillQuestionCircle } from 'react-icons/ai'
import { VscTriangleDown } from 'react-icons/vsc'

const Tooltip = ({ children }) => {
  return (
    <div className="tooltip">
      <AiFillQuestionCircle />
      <div className='tooltip-hover'>
        {children}
      </div>
    </div>
  )
}

export default Tooltip