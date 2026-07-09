import { Link } from "react-router-dom";
import { TypeAnimation } from 'react-type-animation';
import './style.css';

function HomePage() {

  return (
    <div className='hero'>
      <div className='overlay'>
        <div className='top-heart'>
            <i class="fa-regular fa-heart"></i>
        </div>
        <h1>Hey</h1>
        <div className='name'>
        <TypeAnimation
        sequence={["Reet Kaur", 2000]}
        wrapper="span"
        speed={1}
        style={{ display: 'inline-block'}}
        repeat={Infinity}
        cursor={false}
        />
        </div>
        <div className='heart'>
            <hr className='hr'/>
            <i class="fa-regular fa-heart"></i>
            <hr className='hr'/>
        </div>
        <div id='main-p'>
          <TypeAnimation
        sequence={["Someone special has prepared a little surprice for you...", 2000]}
        wrapper="span"
        speed={1}
        style={{ display: 'inline-block'}}
        repeat={Infinity}
        cursor={false}
        />
        </div>
        <p className='ready'>Are you ready?</p>
        <div className='btn'>
          <Link to={"/birthday"} className="link">
        <i class="fa-solid fa-gift"></i>&nbsp;&nbsp;Open Your Surprice
        </Link>
        </div>
      </div>
    </div>
  )
}

export default HomePage;