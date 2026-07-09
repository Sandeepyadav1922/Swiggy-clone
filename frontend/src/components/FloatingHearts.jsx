import heart from "../assets/heart1.jpg";
import "./FloatingHearts.css";

function FloatingHeart() {
  return (
    <div className="hearts-container">
      {Array.from({ length: 200 }).map((_, i) => (
        <img
          key={i}
          src={heart}
          alt="heart"
          className="heart"
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 80}s`,
            animationDuration: `${1 + Math.random() * 4}s`,
            width: `${25 + Math.random() * 35}px`,
          }}
        />
      ))}
    </div>
  );
}

export default FloatingHeart;