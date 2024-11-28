import { useNavigate } from "react-router-dom";

function PokemonCard({ name, img }) {
  const navigate = useNavigate();

  function handleClick() {
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
