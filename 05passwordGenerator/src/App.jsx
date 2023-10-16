import { useState, useCallback, useEffect , useRef } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*().{}";

    for (let i = 0; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      // console.log(char , Math.random());
      pass += str.charAt(char);

      setPassword(pass);
    }
  }, [length, numAllowed, charAllowed, setPassword]);

  const passwordCopyToClipBoard = useCallback(() => {
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
  },[password]) 

  useEffect(()=>{
    passwordGenerator()
  },[length, numAllowed, charAllowed, setPassword])
  return (
    <>
    
      <div
        style={{ height: "160px" , }}
        className= " shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-800"
      >
      <h1 className="text-white ">
    Password Generator
  </h1>
        <div style={{display:"flex"  ,alignItems:"center" ,}} className="flex shadow rounded-lg overflow-hidden mb-4 mt-5">
          <input
            type="text"
            value={password}
            placeholder="Password"
            readOnly
            ref={passwordRef}
            className=" outline-none w-full py-1 px-3 rounded-lg "
          />
          <button onClick={passwordCopyToClipBoard} className="bg-blue-700 text-white px-3 py-0.5 shrink-0 ">Copy</button>
        </div>
        <div className="flex text-sm gap-x-2"> 
        <div className="flex items-center gap-x-1">
          <input type="range"
          value={length}
          min={6}
          max={100}
          
          className="cursor-pointer"
          onChange={(e) => {setLength(e.target.value)} }
          />
          <label > length:{length}</label>
        </div>

        <div className="flex items-center gap-x-1">
          <input type="checkbox"
          defaultChecked={numAllowed}
          id="numInput"
          
          onChange={() => {
            setNumAllowed((prev) => !prev)
          } }
          />
          <label > Numbers</label>
        </div>

        <div className="flex items-center gap-x-1">
          <input type="checkbox"
          defaultChecked={charAllowed}
          id="numInput"
          
          onChange={() => {
            setCharAllowed((prev) => !prev)
          } }
          />
          <label > Characters</label>
          </div>
        </div>
      </div>
      </>
  );
}

export default App;

