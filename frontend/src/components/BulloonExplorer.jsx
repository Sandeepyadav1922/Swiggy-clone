import "./BulloonExplorer.css";

function BullonExplorer() {
  return (
    <div className="explosion-container">

      {/* Balloon */}
      <div className="balloon"></div>

      {/* Stars */}
      {Array.from({ length: 2000 }).map((_, i) => {
        const angle = Math.random() * 360;
        const distance = 200 + Math.random() * 200;

        return (
          <span
            key={i}
            className="star"
            style={{
              "--x": `${Math.cos(angle * Math.PI / 180) * distance}px`,
              "--y": `${Math.sin(angle * Math.PI / 180) * distance}px`,
              animationDelay: "3s",
              animationDuration: "10s"
            }}
          >
            ✨
          </span>
        );
      })}
    </div>
  );
}

export default BullonExplorer;
