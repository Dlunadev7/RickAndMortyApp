import React from 'react'
import { onNext, onPrevious } from './Pagination';

export const Buttons = ({ info, fetchCharacters }) => {
  
  const handlePrev = () => {
    onPrevious( info, fetchCharacters )
  }

  const handleNext = () => {
    onNext( info, fetchCharacters )
  }

  return (
    <div>
      <button className="btn btn-outline-primary my-5 mx-2"
              onClick={ handlePrev }
      >
        Previous
      </button>
      <button className="btn btn-outline-primary my-5 mx-2"
              onClick={ handleNext }
      >
        Next
      </button>
    </div>
  )
}
