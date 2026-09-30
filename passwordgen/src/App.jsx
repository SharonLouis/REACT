
import { useCallback, useEffect, useState,useRef} from 'react'
import './App.css'

function App() {
  const [length, setlength] = useState(8)
  const [usechar, setchar] = useState(false)
  const [Numbersallowed, setNumbersallowed] = useState(false)
  const [password, setPassword] = useState("")
  const passwordref = useRef(null)
  const passwordRef = useRef(null)
  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (Numbersallowed) str += "0123456789"
    if (usechar) str += "!@#$%^&*()"

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length)
      pass += str.charAt(char)
    }
    setPassword(pass)
  }, [length, Numbersallowed, usechar])
 

  useEffect(() => {
    passwordGenerator()
  }, [length, Numbersallowed, usechar, passwordGenerator])

  return (
    <div style={{
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#000",
    }}>

      <div style={{
        width: "320px",
        padding: "20px",
        borderRadius: "12px",
        backgroundColor: "#111",
        border: "1px solid #222",
        boxShadow: "0 0 20px rgba(255,255,255,0.05)"
      }}>

        <h2 style={{
          color: "#fff",
          textAlign: "center",
          marginBottom: "15px",
          fontWeight: "500"
        }}>
          Password Generator
        </h2>

        {/* Input + Copy + Checkboxes */}
        <div style={{
          display: "flex",
          gap: "10px",
          marginBottom: "12px",
          alignItems: "center"
        }}>

          <input
            ref={passwordRef}
            value={password}
            readOnly
            style={{
              flex: 1,
              padding: "10px",
              borderRadius: "6px",
              border: "1px solid #333",
              backgroundColor: "#000",
              color: "#fff"
       
            }} 
          />

          <button
            
            onClick={() => {
            passwordRef.current?.select()
            passwordRef.current?.setSelectionRange(0, 999)
            window.navigator.clipboard.writeText(passwordRef.current.value)
            }}
            style={{
              padding: "10px",
              borderRadius: "6px",  
              border: "none",
              backgroundColor:"#fff",
              color: "#000",
              cursor: "pointer"
            }}
          >
            Copy
          </button>

          {/* Checkboxes */}
          <div style={{
            display: "flex",
            flexDirection: "column",
            color: "white",
            fontSize: "12px"
          }}>

            <label style={{ display: "flex", gap: "4px", alignItems: "center" }}>
              <input
                type="checkbox"
                checked={Numbersallowed}
                onChange={() => setNumbersallowed(prev => !prev)}
              />
              Numbers
            </label>

            <label style={{ display: "flex", gap: "4px", alignItems: "center" }}>
              <input
                type="checkbox"
                checked={usechar}
                onChange={() => setchar(prev => !prev)}
              />
              Symbols
            </label>

          </div>

        </div>

        {/* Range Slider */}
        <div style={{ color: "white", fontSize: "14px" }}>
          <label>Length: {length}</label> </div>

          <input
            type="range"
            min={6}
            max={10}
            value={length}
            onChange={(e) => setlength(Number(e.target.value))}
            style={{
              backgroundColor:"blue",
              width: "100%",
              cursor: "pointer"
            }}
          />
       

      </div>
    </div>
  )
}

export default App