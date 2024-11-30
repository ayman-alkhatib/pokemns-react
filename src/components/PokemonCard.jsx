function PokemonCard({ name, img, clickFn }) {
  return (
    <div onClick={clickFn} className="pokemon-card">
      <img src={img} alt={name} />
      <h2>{name}</h2>
    </div>
  );
}

export default PokemonCard;
