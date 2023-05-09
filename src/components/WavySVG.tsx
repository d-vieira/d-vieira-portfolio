export default function WavySVG() {
  return (
    <div className="pointer-events-none">
      <svg viewBox="0 0 500 120" transform="rotate(180)">
        <path
          d="M 0 50 C 150 150 300 0 500 80 L 500 0 L 0 0"
          fill="#FFFFFF"
        ></path>
        <path
          d="M 0 50 C 150 150 330 -30 500 50 L 500 0 L 0 0"
          fill="#FFFFFF"
        ></path>
        <path
          d="M 0 50 C 215 150 250 0 500 100 L 500 0 L 0 0"
          fill="#FFFFFF"
        ></path>
      </svg>
    </div>
  );
}
