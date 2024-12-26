import { useState } from "react";
import "./App.css";
import Header from "./component/Header";
function App() {
  const [count, setCount] = useState(0);

  return (
    <main>
      <Header />
      <div className="form">
        <label>
          Top Text
          <input type="text" placeholder="One does not simply" name="topText" />
        </label>

        <label>
          Bottom Text
          <input type="text" placeholder="Walk into Mordor" name="bottomText" />
        </label>
        <button>Get a new meme image 🖼</button>
      </div>
      <div className="meme">
        <img src="http://i.imgflip.com/1bij.jpg" />
        <span className="top">One does not simply</span>
        <span className="bottom">Walk into Mordor</span>
      </div>
    </main>
  );
}

export default App;
