import { useState } from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
function App() {
  const[darkMode,setDarkmode] = useState(true);
  const[isOpen,setIsOpen] = useState(true)

  const toggleMenu = ()=>{
    setIsOpen((prev)=> !isOpen); //prevstate is more robust way

  }

  const toggleTheme = ()=>{
    setDarkmode((prev)=> !darkMode); //prevstate is more robust way

  }

  return (
    <div className={`w-full h-full min-h-[100vh]
    bg-white ${darkMode && "dark"}`}>
      <div className="w-full h-full min-h-[100vh]
      bg-white">

        <div className="dark:bg-gradient-to-tr from-[#0235a3] via-[#030a1c] to-[#05174e]">
          <Navbar
          darkMode={darkMode}
          isOpen={isOpen} 
          toggleMenu={toggleMenu}
          toggleTheme={toggleTheme}
          />

          <section 
          id="home"
          className="px-0 lg:px-5 2xl:px-40 lg:py-10">

            <Header/>

          </section>
        </div>

      </div>
      

    </div>
  );
}

export default App;
