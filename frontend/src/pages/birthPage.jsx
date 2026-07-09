import { TypeAnimation } from "react-type-animation";
import BullonExplorer from "../components/BulloonExplorer";
import FloatingHeart from "../components/FloatingHearts";

import "./style.css";

function BirthdayPage() {
  return (
    <div className="container">
      <div>
        <BullonExplorer/>
        <FloatingHeart/>
      </div>
        <div className='reet-imgs'>
            <div className="reet-mid">
                <img src="src/assets/image.png" alt="reet" />
                <img src="src/assets/image copy.png" alt="reet" />
                <img src="src/assets/image copy 3.png" alt="reet" />
                </div>
                <div className="reet-mid">
                <img src="src/assets/image copy 4.png" alt="reet" />
                <img src="src/assets/image copy 6.png" alt="reet" />
                <img src="src/assets/image copy 7.png" alt="reet" />
                </div>
            </div>
        <div className="mid-container">
      <div className="content">
        <img className="crown" src="src/assets/crown.png" alt="crown" />
        <h4 className="birth-text">
          Happy Birthday My Dear bestfriend Reet Kaur
        </h4>
        <div className="animation">
          <TypeAnimation
            sequence={["Reet Kaur", 2000]}
            wrapper="span"
            speed={1}
            style={{ display: "inline-block" }}
            repeat={Infinity}
            cursor={false}
          />
        </div>
        <div className="cakes">
          <img
            className="cake-img"
            src="src/assets/image copy 5.png"
            alt="cake"
          />
          <img
            className="cake-img"
            src="src/assets/image copy 8.png"
            alt="cake"
          />
          <img
            className="cake-img"
            src="src/assets/image copy 9.png"
            alt="cake"
          />
        </div>
        <div className="para-reet">
          <p>Today is all about you!</p>
          <br />
          <p>
            May your life always be filled with love, laughter, happiness and
            beautifull surprises
          </p>
          <br />
          <p>Keep being the amazing person you are. Stay blessed always!</p>
        </div>
        <div>
          <img
            style={{ width: "150px" }}
            src="src/assets/heart img.png"
            alt="love"
          />
        </div>
      </div>
      </div>
    </div>
  );
}

export default BirthdayPage;
