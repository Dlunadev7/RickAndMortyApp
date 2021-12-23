import React, { useEffect, useState } from 'react'
import { initialURL } from '../api/rickAndMortyApi';
import { Buttons } from '../components/Buttons';
import { Card } from '../components/Card'
import { Loader } from '../components/Loader';
import { Search } from '../components/Search';
import { useFetchCharacters } from '../hooks/useFetchCharacters';

export const HomePage = ( ) => {
  
  const [search, setSearch] = useState('');

  const { isLoading, characters, info, fetchCharacters } = useFetchCharacters();
  
  useEffect(() => {
    fetchCharacters(initialURL);
  }, []);

  const dataFiltered = characters.filter( item => item.name.toLowerCase().includes(search.toLocaleLowerCase()));
  
  return (
    <div className="container d-flex flex-wrap flex-column align-items-center justify-content-center">
      <img  className="my-5 w-100"
            src="https://i.pinimg.com/originals/1d/64/5d/1d645dd02dc5f6aaaa494ae2f80691bb.png" 
            alt="logoRick&Morty"
            style={{maxWidth: "80%"}}
      />

      <Search search={ search } setSearch={ setSearch } />
      <Card characters={ dataFiltered } />
      <Buttons info={ info } fetchCharacters={ fetchCharacters } />


      {
        isLoading && <Loader />
      }
    </div>
  )
}
