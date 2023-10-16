import { useState } from 'react'


function App() {
  const [color, setColor] = useState("olive")
console.log(color);   
  return (
  
    <div style={{backgroundColor: color}}  className='w-full h-screen duration-200 '>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2' >
      <div   className='fixed flex flex-wrap justify-center gap-3 shadow-lg  bg-white px-3 py-2 rounded-3xl' > 
      <button onClick={() => setColor('red') } style={{backgroundColor: "red"}} className='outline-none px-4 py-1  rounded-full text-white'>Red</button>
      <button onClick={() => setColor('green') } style={{backgroundColor: "green"}} className='outline-none px-4 py-1  rounded-full text-white'>Green</button>
      <button onClick={() => setColor('blue') } style={{backgroundColor: "blue"}} className='outline-none px-4 py-1  rounded-full text-white'>Blue</button>
      <button onClick={() => setColor('orange') } style={{backgroundColor: "orange"}} className='outline-none px-4 py-1  rounded-full text-white'>Orange</button>
      <button onClick={() => setColor('olive') } style={{backgroundColor: "olive "}} className='outline-none px-4 py-1  rounded-full text-white'>Olive</button>
      <button onClick={() => setColor('purple') } style={{backgroundColor: "purple"}} className='outline-none px-4 py-1  rounded-full text-white'>Purple</button>
      <button onClick={() => setColor('yellow') } style={{backgroundColor: "yellow"}} className='outline-none px-4 py-1  rounded-full text-white'>  yellow</button>
      <button onClick={() => setColor('black') } style={{backgroundColor: "black"}} className='outline-none px-4 py-1  rounded-full text-white'>  Black</button>
      <button onClick={() => setColor('gray') } style={{backgroundColor: "gray"}} className='outline-none px-4 py-1  rounded-full text-white'>  Gray</button>
      <button onClick={() => setColor('brown') } style={{backgroundColor: "brown"}} className='outline-none px-4 py-1  rounded-full text-white'>  Brown</button>
      <button onClick={() => setColor('pink') } style={{backgroundColor: "pink"}} className='outline-none px-4 py-1  rounded-full text-white'>  Pink</button>
      <button onClick={() => setColor('gold') } style={{backgroundColor: "gold"}} className='outline-none px-4 py-1  rounded-full text-white'>  Golden</button>
      <button onClick={() => setColor('cyan') } style={{backgroundColor: "cyan"}} className='outline-none px-4 py-1  rounded-full text-white'>  Cyan</button>
      <button onClick={() => setColor('maroon') } style={{backgroundColor: "maroon"}} className='outline-none px-4 py-1  rounded-full text-white'>  Maroon</button>
      </div>
      </div>
    </div>
  
  )
}

export default App
