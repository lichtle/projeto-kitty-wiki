import "./style.css";
import pawButton from "../../assets/paw-button.png";
import arrow from "../../assets/arrow.png";
import kittyOne from "../../assets/kitty-1.jpg";
import kittyTwo from "../../assets/kitty-2.jpg";
import kittyThree from "../../assets/kitty-3.jpg";

const Spotlight = () => {
  return (
    <div className="spotlight-container">
      <div className="spotlight-header">
        <h2 className="spotlight-title">Mural de gatinhos</h2>
        <button>
          <img
            className="paw-button"
            src={pawButton}
            alt="Aperte aqui para randomizar!"
          />
        </button>
      </div>
      <img className="arrow" src={arrow} alt="Aperte aqui para randomizar!" />
      <p className="click-to-randomize-p">Aperte aqui para randomizar!</p>
      <div className="spotlight-images-container">
        <div className="spotlight-images">
          <img className="image" src={kittyOne} alt="Kitty picture" />
          <img className="image" src={kittyTwo} alt="Kitty picture" />
          <img
            className="image"
            src={kittyThree}
            alt="Kitty picture"
          />
          <img className="image" src={kittyOne} alt="Kitty picture" />
          <img className="image" src={kittyTwo} alt="Kitty picture" />
          <img
            className="image"
            src={kittyThree}
            alt="Kitty picture"
          />
          <img className="image" src={kittyOne} alt="Kitty picture" />
          <img className="image" src={kittyTwo} alt="Kitty picture" />
        </div>
      </div>
      <p className="click-for-details-p">
        Clique em um gatinho para ver detalhes
      </p>
    </div>
  );
};

export default Spotlight;
