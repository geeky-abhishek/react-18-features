import React from 'react'

const Picture = ({picture}) => {
  return (
    <div className="mt-2"><img className='rounded' src={picture.picture.large} alt={picture.name.first} width="200px" /></div>
  )
}

export default Picture