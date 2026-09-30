import { useState } from "react";

import ColorButton from "./component/color";

function App() {
  const [bgColor, setBgColor] = useState("white");

  return (
    <div style={{ backgroundColor: bgColor, height:"100vh",}}>
      
      <h1 style={{ color: "olive", padding: "10px" }}>
        BG color changer
      </h1>

      <div>
        <ColorButton color="blue" setColor={setBgColor} />
        <ColorButton color="green" setColor={setBgColor} />
        <ColorButton color="red" setColor={setBgColor} />
        <ColorButton color="pink" setColor={setBgColor} />
        <ColorButton color="purple" setColor={setBgColor} />
      </div>

    </div>
  );
}

export default App;