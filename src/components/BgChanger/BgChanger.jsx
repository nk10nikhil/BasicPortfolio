import React, { useState } from 'react'

function BgChanger() {
  const [color, setColor] = useState("white")

  return (
    <div className=" duration-200 mx-10 rounded-2xl"
    style={{backgroundColor: color}}
    >
      <div className="flex flex-col justify-center bottom-10 gap-4 w-fit p-2 pt-3">

          <button 
          onClick={() => setColor("Red")}
          className="relative font-bold text-[17px] cursor-pointer border-none rounded-[0.75em] bg-black">
          <span className="block box-border border-2 border-black rounded-[0.75em] px-6 py-3 bg-[#ff0000] text-black transform -translate-y-1 transition-transform duration-100 ease-in hover:-translate-y-[0.33em] active:translate-y-0">Red</span></button>

          <button 
          onClick={() => setColor("Green")}
          className="relative font-bold text-[17px] cursor-pointer border-none rounded-[0.75em] bg-black">
          <span className="block box-border border-2 border-black rounded-[0.75em] px-6 py-3 bg-[#00ff00] text-black transform -translate-y-1 transition-transform duration-100 ease-in hover:-translate-y-[0.33em] active:translate-y-0">Green</span></button>

          <button 
          onClick={() => setColor("Blue")}
          className="relative font-bold text-[17px] cursor-pointer border-none rounded-[0.75em] bg-black">
          <span className="block box-border border-2 border-black rounded-[0.75em] px-6 py-3 bg-[#0000ff] text-black transform -translate-y-1 transition-transform duration-100 ease-in hover:-translate-y-[0.33em] active:translate-y-0">Blue</span></button>

          <button 
          onClick={() => setColor("Yellow")}
          className="relative font-bold text-[17px] cursor-pointer border-none rounded-[0.75em] bg-black">
          <span className="block box-border border-2 border-black rounded-[0.75em] px-6 py-3 bg-[#ffff00] text-black transform -translate-y-1 transition-transform duration-100 ease-in hover:-translate-y-[0.33em] active:translate-y-0">Yellow</span></button>

          <button 
          onClick={() => setColor("Magenta")}
          className="relative font-bold text-[17px] cursor-pointer border-none rounded-[0.75em] bg-black">
          <span className="block box-border border-2 border-black rounded-[0.75em] px-6 py-3 bg-[#ff00ff] text-black transform -translate-y-1 transition-transform duration-100 ease-in hover:-translate-y-[0.33em] active:translate-y-0">Magenta</span></button>

          <button 
          onClick={() => setColor("Cyan")}
          className="relative font-bold text-[17px] cursor-pointer border-none rounded-[0.75em] bg-black">
          <span className="block box-border border-2 border-black rounded-[0.75em] px-6 py-3 bg-[#00ffff] text-black transform -translate-y-1 transition-transform duration-100 ease-in hover:-translate-y-[0.33em] active:translate-y-0">Cyan</span></button>

          <button 
          onClick={() => setColor("White")}
          className="relative font-bold text-[17px] cursor-pointer border-none rounded-[0.75em] bg-black">
          <span className="block box-border border-2 border-black rounded-[0.75em] px-6 py-3 bg-[#ffffff] text-black transform -translate-y-1 transition-transform duration-100 ease-in hover:-translate-y-[0.33em] active:translate-y-0">White</span></button>

          <button 
          onClick={() => setColor("Black")}
          className="relative font-bold text-[17px] cursor-pointer border-none rounded-[0.75em] bg-black">
          <span className="block box-border border-2 border-black rounded-[0.75em] px-6 py-3 bg-[#000000] text-white transform -translate-y-1 transition-transform duration-100 ease-in hover:-translate-y-[0.33em] active:translate-y-0">Black</span></button>

          <button 
          onClick={() => setColor("Orange")}
          className="relative font-bold text-[17px] cursor-pointer border-none rounded-[0.75em] bg-black">
          <span className="block box-border border-2 border-black rounded-[0.75em] px-6 py-3 bg-[#ff8000] text-black transform -translate-y-1 transition-transform duration-100 ease-in hover:-translate-y-[0.33em] active:translate-y-0">Orange</span></button>

          <button
          onClick={() => setColor("Purple")}
          className="relative font-bold text-[17px] cursor-pointer border-none rounded-[0.75em] bg-black">
          <span className="block box-border border-2 border-black rounded-[0.75em] px-6 py-3 bg-[#8000ff] text-black transform -translate-y-1 transition-transform duration-100 ease-in hover:-translate-y-[0.33em] active:translate-y-0">Purple</span></button>

          <button
          onClick={() => setColor("Pink")}
          className="relative font-bold text-[17px] cursor-pointer border-none rounded-[0.75em] bg-black">
          <span className="block box-border border-2 border-black rounded-[0.75em] px-6 py-3 bg-[#ff00ff] text-black transform -translate-y-1 transition-transform duration-100 ease-in hover:-translate-y-[0.33em] active:translate-y-0">Pink</span></button>


      </div>

    </div>
  )
}

export default BgChanger
