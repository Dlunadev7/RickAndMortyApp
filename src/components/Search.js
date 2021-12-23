import React from 'react'

export const Search = ({ search, setSearch }) => {

  return (
      <input  className="form-control"
        type="text" 
        value={ search }
        onChange={({target}) => setSearch(target.value)}
        placeholder="¡Find your character!"
        style={{ width: "85%" }}
        />
  )
}
