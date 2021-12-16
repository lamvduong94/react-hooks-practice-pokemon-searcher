import React, { useState, useEffect } from 'react';
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  const [pokemon, setPokemon] = useState([]);
  const [search, setSearch] =useState("");

  useEffect(() => {
    fetch("http://localhost:3001/pokemon")
      .then(res => res.json())
      .then(setPokemon);
  }, [])

  function handleAddPokemon(newPokemon) {
    setPokemon([...pokemon, newPokemon]);
  }

  const pokemonsToDisplay = pokemon.filter(poke => 
    poke.name.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm onAdd={handleAddPokemon} />
      <br />
      <Search search={search} onChangeSearch={setSearch}/>
      <br />
      <PokemonCollection pokemon={pokemonsToDisplay} />
    </Container>
  );
}

export default PokemonPage;
