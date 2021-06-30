import React from 'react'
import { Link } from 'react-router-dom'

const ItemsLarge = ({ listItems }) => {
  return (
      <div className='items-large'>
        {listItems.map(item => (
          <Link
          key={item}
          className={`link-item-hover-effect item-large`}
          to={item !== "Home" ? 'warehouse-search' : '/'}>
            {item.toUpperCase()}
          </Link>
        ))}
          <div
        className='btn-item-hover-effect'
        >
          <span className='btn-span-hover-effect'>CONTACT US</span>
        </div>
      </div>
  )
}

export default ItemsLarge


