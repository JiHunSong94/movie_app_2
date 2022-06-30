import PropTypes from "prop-types";

const foodILike = [
  {
    id: 1,
    name: "Kimchi",
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.4aBRBEMc36CPZmEg84X40wEsDI%26pid%3DApi&f=1",
    rating: 5,
  },
  {
    id: 2,
    name: "Samgyeopsal",
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.2b88ulQpCeUuCJo6p5PsjQHaE8%26pid%3DApi&f=1",
    rating: 4.9,
  },
  {
    id: 3,
    name: "Bibimbap",
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.XQIww0eJrl8VSqLyJUCWeAHaE8%26pid%3DApi&f=1",
    rating: 4.8,
  },
  {
    id: 4,
    name: "Doncasu",
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.tvCd7Ec42OxusPJsnpQXrQHaFj%26pid%3DApi&f=1",
    rating: 5.5,
  },
  {
    id: 5,
    name: "Kimbap",
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.eN7YChkiTHj3eNIJwDIC4QHaE7%26pid%3DApi&f=1",
    rating: 4.7,
  },
];

function Food({ name, picture, rating }) {
  return (
    <div>
      <h2>I like {name}</h2>
      <h4>{rating}/5.0</h4>
      <img src={picture} alt={name} />
    </div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};

function App() {
  return (
    <div>
      {foodILike.map((dish) => (
        <Food
          key={dish.id}
          name={dish.name}
          picture={dish.image}
          rating={dish.rating}
        />
      ))}
    </div>
  );
}

export default App;
