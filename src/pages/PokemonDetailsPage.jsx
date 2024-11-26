import { useLoaderData, useNavigation } from "react-router-dom";

function PokemonDetailsPage() {
  const data = useLoaderData();
  const navigation = useNavigation();

  if (navigation.state === "loading") return <h1>Loading!</h1>;
  return (
    <div>
      <img src={data.img} alt={data.name} />
      <h2>name: {data.name}</h2>
      <div>height: {data.height}</div>
      <div>weight: {data.weight}</div>
      <div>exp: {data.base_experience}</div>
    </div>
  );
}

export default PokemonDetailsPage;
