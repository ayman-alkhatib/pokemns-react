import styles from "./PokemonCard.module.css";
function PokemonCard({ name, img, clickFn }) {
  return (
    <div onClick={clickFn} className={styles.pokemonCard}>
      <img src={img} alt={name} className={styles.img} />
      <h2>{name}</h2>
    </div>
  );
}
export default PokemonCard;
