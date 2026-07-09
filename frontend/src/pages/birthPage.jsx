import { useEffect, useRef } from "react";
import { TypeAnimation } from "react-type-animation";
import crown from "../assets/crown.png";
import heart from "../assets/heart img.png";
import image2 from "../assets/image copy 3.png";
import image3 from "../assets/image copy 4.png";
import cake from "../assets/image copy 5.png";
import image4 from "../assets/image copy 6.png";
import image5 from "../assets/image copy 7.png";
import gift from "../assets/image copy 8.png";
import dil from "../assets/image copy 9.png";
import image1 from "../assets/image copy.png";
import image from "../assets/image.png";
import BullonExplorer from "../components/BulloonExplorer";
import FloatingHeart from "../components/FloatingHearts";
import "./style.css";

function BirthdayPage() {
  const audioRef = useRef(null);

  useEffect(() => {
    audioRef.current.play();
  })

  return (
    <div className="container">
      <audio ref={audioRef} loop>
        <source src="/music.mp3.mpeg" type="audio/mp3"/>
      </audio>
      <div>
        <BullonExplorer/>
        <FloatingHeart/>
      </div>
        <div className='reet-imgs'>
            <div className="reet-mid">
                <img src={image} alt="reet" />
                <img src={image1} alt="reet" />
                <img src={image2} alt="reet" />
                </div>
                <div className="reet-mid">
                <img src={image3} alt="reet" />
                <img src={image4} alt="reet" />
                <img src={image5} alt="reet" />
                </div>
            </div>
        <div className="mid-container">
      <div className="content">
        <img className="crown" src={crown} alt="crown" />
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
            src={cake}
            alt="cake"
          />
          <img
            className="cake-img"
            src={gift}
            alt="cake"
          />
          <img
            className="cake-img"
            src={dil}
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
            src={heart}
            alt="love"
          />
        </div>
      </div>
      </div>
    </div>
  );
}

export default BirthdayPage;
