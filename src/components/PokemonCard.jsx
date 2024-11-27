import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../ContextProvider";
function PokemonCard({ name, img }) {
  const navigate = useNavigate();

  const { pokemonName, setPokemonName } = useContext(GlobalContext);

  function handleClick() {
    setPokemonName(name);
    navigate(`/details/${name}`);
  }
  return (
    <div onClick={handleClick}>
      <img src={img} alt={name} />
      <h2>{name}</h2>
    </div>
  );
}
export default PokemonCard;
