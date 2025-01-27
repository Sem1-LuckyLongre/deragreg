import { useEffect, useState } from "react";

export const Pokemon = () => {
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(true);

  const API = "https://pokeapi.co/api/v2/pokemon/pikachu";
  const Pokemon = async () => {
    try {
      const res = await fetch(API);
      const data = await res.json();
      setPokemon(data);
      setLoading(false)
    } catch (error) {
      console.log(error.massage);
    }
  };

  useEffect(() => {
    Pokemon();
  }, []);
  if (loading) return <h1>Loading...</h1>;
  return (
    <div className="flex">
      <div className="flex"> {pokemon.forms[0].name} </div>
    </div>
  );
};
