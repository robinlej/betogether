import { useState } from "react"

const useExpandItem = () => {

  const [expandedItem, setExpandedItem] = useState(null)

  const expandItem = (itemId) => {
    if (expandedItem === itemId) setExpandedItem(null)
    else setExpandedItem(itemId)
  }

  return {
    expandedItem,
    expandItem
  }
}

export default useExpandItem