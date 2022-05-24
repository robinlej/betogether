import { BiExpand } from 'react-icons/bi'
import './stylesheets/ClickableImage.css'

const ClickableImage = ({ src }) => {

  function expandImg {
    // show big picture
  }

  return (
    <div className="clickable-img__wrapper">
      <div className="clickable-img__container">
        <img className="clickable-img" tabindex="0" src={src} onClick={expandImg} />
        <div className="clickable-img__overlay">
          <BiExpand />
        </div>
      </div>
    </div>
  )
}

export default ClickableImage