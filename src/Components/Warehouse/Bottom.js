import React, {useContext} from 'react'
import { LocationsContext } from '../../Pages/LocationsContext'
import ImageGrid from '../ImageGrid/ImageGrid'

const Bottom = () => {

  const { data, filters } = useContext(LocationsContext)
  console.log({filters, data})
  return (
    <div className='warehouse-bottom'>
      {/* <pre>{JSON.stringify({filters, data}, null, 2)}</pre> */}
      <ImageGrid />
    </div>
  )
}

export default Bottom
