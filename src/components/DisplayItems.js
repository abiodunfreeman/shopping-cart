import Crystals from "./crystals";

export default function DisplayItems(props) {
  const cryJSX = Crystals.map((crystal) => {
    //maps over crystal array to make JSX with crystal info
    return (
      <div key={crystal.name}>
        <h1>{crystal.name}</h1>
        <h2>${crystal.price}</h2>
        <h3>{crystal.rarity}</h3>
        <button onClick={() => props.handleAddToCart(crystal)}>
          Add to Cart
        </button>
      </div>
    );
  });

  return (
    <section id="display-items">
      <h1>Crystals in our store !</h1>
      {cryJSX}
    </section>
  );
}