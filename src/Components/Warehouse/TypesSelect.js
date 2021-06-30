import React from 'react'

const TypeSelect = () => {
  return (
    <select name="thetype" class="filter-select" aria-invalid="false">
      <option value="All Types">All Types</option>
      <option value="Creative Space">Creative Space</option>
      <option value="Film Production">Film Production</option>
      <option value="Construction">Construction</option>
      <option value="Land">Land</option>
      <option value="Office">Office</option>
      <option value="Showroom">Showroom</option>
      <option value="Warehouse">Warehouse</option>
      <option value="Manufacturing">Manufacturing</option>
      <option value=" Distribution"> Distribution</option>
      <option value="Transportation">Transportation</option>
      <option value="Storage">Storage</option>
      <option value="Light Manufacturing">Light Manufacturing</option>
      <option value="Garage">Garage</option>
    </select>
  )
}

export default TypeSelect
