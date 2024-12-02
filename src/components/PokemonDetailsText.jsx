import styles from "./PokemonDetailsText.module.css";
function PokemonDetailsText({ detailsData }) {
  return (
    <div className={styles.detailsText}>
      <h2> {detailsData.name}</h2>
      <ul>
        <li>height: {detailsData.height}</li>
        <li>weight: {detailsData.weight}</li>
        <li>type: {detailsData.type} </li>
      </ul>
    </div>
  );
}

export default PokemonDetailsText;
