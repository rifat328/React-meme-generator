import { useState } from "react";
import "./App.css";
import Header from "./component/Header";
function App() {
  const [meme, setMeme] = useState({
    topText: "one does not simply",
    bottomText: "walk into mirror",
    imageUrl: "http://i.imgflip.com/1bij.jpg",
  });
  const handleEvent = (event) => {
    const { value, name } = event.currentTarget;
    setMeme((prevMeme) => ({ ...prevMeme, [name]: value }));
  };
  return (
    <main>
      <Header />
      <div className="form">
        <label>
          Top Text
          <input
            type="text"
            onChange={handleEvent}
            placeholder=" Type top text"
            name="topText"
          />
        </label>

        <label>
          Bottom Text
          <input
            type="text"
            onChange={handleEvent}
            placeholder="Type Bottom Text"
            name="bottomText"
          />
        </label>
        <button>Get a new meme image 🖼</button>
      </div>
      <div className="meme">
        <img src={meme.imageUrl} />
        <span className="top">{meme.topText}</span>
        <span className="bottom">{meme.bottomText}</span>
      </div>
    </main>
  );
}

export default App;
