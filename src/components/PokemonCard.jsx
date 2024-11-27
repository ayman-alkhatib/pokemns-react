function PokemonCard({ name, img }) {
  return (
    <div>
      <img src={img} alt={name} />
      <h2>{name}</h2>
    </div>
  );
}

export default PokemonCard;
