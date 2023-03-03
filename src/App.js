import "./App.css";
import Header from "./components/Header";
import Search from "./components/Search";
import Footer from "./components/Footer";
import Spotlight from "./components/Spotlight";

function App() {
  return (
    <>
      <div className="flex-container">
        <div className="search-section">
          <Header />
          <Search />
        </div>
        <div className="spotlight-section">
          <Spotlight />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
