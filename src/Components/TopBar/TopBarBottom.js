import React from 'react'
import { Link } from 'react-router-dom'

const Bottom = () => {
  return (
    <div className="top-bar-bottom">
      <div className="spaces-and-number">
        <div className="spaces">
          <Link to='/warehouse-search' className="link-item-hover-effect">
            Our Spaces
          </Link>
        </div>
        <div className="number">
          <Link to='/warehouse-search' className="link-item-hover-effect">
            +1 (718) 786-8400
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Bottom
