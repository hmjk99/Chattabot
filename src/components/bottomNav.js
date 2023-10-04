import React from 'react'

const bottomNav = ({ backButton }) => {
  const handleBackClick = () => {
    window.history.back(); 
  };

  return (
    <div className='bottom-nav'>
      {backButton ? 
        <button className='back' onClick={handleBackClick} >Back</button> :
      null }
        <button className='reserve'>Reserve</button>
        <button className='call'>Call</button>
    </div>
  )
}

export default bottomNav