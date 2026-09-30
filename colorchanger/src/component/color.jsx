function ColorButton({ color, setColor }) {
  return (
 <button
      style={{
        backgroundColor: color,
        color: "white",
        margin: "5px",
        padding: "10px",
        border: "none",
        cursor: "pointer"
      }}
      onClick={() => setColor(color)}
    >
      {color}
    </button>
  );
}   
export default ColorButton;