import { useState } from 'react'
import { BiExpand } from 'react-icons/bi'
import './stylesheets/ClickableImage.css'

const ClickableImage = ({ src, alt }) => {
  const [isExpanded, setIsExpanded] = useState(false)

  function expandImg(e) {
    e.stopPropagation()
    setIsExpanded(true)
  }

  function shrinkImg(e) {
    e.stopPropagation()
    setIsExpanded(false)
  }

  return (
    <>
      <div className='clickable-img__wrapper' onClick={expandImg}>
        <div className='clickable-img__container'>
          <img className='clickable-img' tabindex='0' src={src} alt={alt} />
          <div className='clickable-img__overlay'></div>
        </div>
        <BiExpand className='clickable-img__overlay--icon' />
      </div>

      {isExpanded && (
        <div className='clickable-img--expanded__container' onClick={shrinkImg}>
          <img
            className='clickable-img--expanded'
            tabindex='0'
            src={src}
            alt={alt}
            loading='lazy'
          />
        </div>
      )}
    </>
  )
}

export default ClickableImage