
import React, { useState, useEffect } from 'react';
import { ThemeContext } from './theme.js';
import ThemeBtn from './ThemeBtn.jsx';
import Card from './Card.jsx';

function ThemeSwitcher() {
  const [themeMode, setThemeMode] = useState("light");

  const darkTheme = () => {
    setThemeMode("dark");
  }
  const lightTheme = () => {
    setThemeMode("light");
  }

  useEffect(() => {
    document.querySelector("html").classList.remove("dark", "light");
    document.querySelector("html").classList.add(themeMode);
  }, [themeMode]);

  return (

    <>
    <ThemeContext.Provider value={{ themeMode, darkTheme, lightTheme }}>
      <div className="flex flex-wrap min-h-screen items-center bg-amber-50 mx-10 rounded-2xl">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                      <ThemeBtn />
                        
                    </div>

                    <div className="w-full max-w-sm mx-auto">
                      <Card />
                       
                    </div>
                </div>
            </div>
    </ThemeContext.Provider>
    </>
  )
}

export default ThemeSwitcher
