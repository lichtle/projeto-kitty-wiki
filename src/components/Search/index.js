import "./style.css";
import kittyOne from "../../assets/kitty-1.jpg";
import kittyTwo from "../../assets/kitty-2.jpg";
import kittyThree from "../../assets/kitty-3.jpg";

const Search = () => {
  return (
    <>
      <section className="search-container">
        <input className="search-breed" placeholder="Busque por raça" />
        <span className="search-section-span">Ou</span>
        <select className="select-breed">
          <option className="selected-option" value="" selected>
            Selecione uma raça
          </option>
          <option value="Gatinho 1">Gatinho 1</option>
          <option value="Gatinho 2">Gatinho 2</option>
        </select>
      </section>
      <div className="search-results-container">
        <div className="search-results">
          <img className="result-image" src={kittyOne} alt="Kitty picture" />
          <img className="result-image" src={kittyTwo} alt="Kitty picture" />
          <img className="result-image" src={kittyThree} alt="Kitty picture" />
          <img className="result-image" src={kittyOne} alt="Kitty picture" />
          <img className="result-image" src={kittyTwo} alt="Kitty picture" />
          <img className="result-image" src={kittyThree} alt="Kitty picture" />
        </div>
      </div>
    </>
  );
};

export default Search;
