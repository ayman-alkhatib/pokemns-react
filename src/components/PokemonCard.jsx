import { useNavigate } from "react-router-dom";

export const globalObject = { pokemonName: "" };

function PokemonCard({ name, img }) {
  const navigate = useNavigate();

  function handleClick() {
    globalObject.pokemonName = name;
    navigate(`/details/${name}`);
  }
  return (
    <div onClick={handleClick} className="pokemon-card">
      <img src={img} alt={name} />
      <h2>{name}</h2>
    </div>
  );
}
export default PokemonCard;
