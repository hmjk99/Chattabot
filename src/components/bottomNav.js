import { ArrowLeftIcon } from '@heroicons/react/24/solid'

const bottomNav = ({ backButton }) => {
  const handleBackClick = () => {
    window.history.back(); 
  };

  return (
    <div className='bottom-nav'>
      {backButton ? 
        <ArrowLeftIcon className='back' onClick={handleBackClick} /> :
      null }
        <button className='reserve'>Reserve</button>
        <button className='call'>Call</button>
    </div>
  )
}

export default bottomNav

