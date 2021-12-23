import React from 'react'

import './card.css'

export const Card = ({characters}) => {

  console.log(characters)

  const characterData = characters.map((item) => {
    return (
      <div className="card m-lg-3 my-3 bg-secondary overflow-hidden" style={{width: '18rem'}} key={ item.id }>
        <img src={ item.image } className="card-img-top" alt={ item.name } style={{ height: "300px" }} />
        <span className={`band ${ item.status === 'Alive' ? 'band__is__alive' : 'band__is__not__alive'}`}  >
          <p className="m-0">
            { item.status }
          </p>
        </span>
        <div className="card-body">
          <h5 className="card-title text-center">{ item.name }</h5>
        </div>
      </div>
    )
  })

  return (
    <div className="d-flex mt-5 flex-wrap justify-content-lg-left justify-content-center">
      {
        characterData
      }
    </div>
  )
}
