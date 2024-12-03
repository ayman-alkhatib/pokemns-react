import styles from "./PokemonImage.module.css";
function PokemonImage({ detailsData }) {
  return (
    <div className={styles.image}>
      <img src={detailsData.img} alt={detailsData.name} />
    </div>
  );
}

export default PokemonImage;
