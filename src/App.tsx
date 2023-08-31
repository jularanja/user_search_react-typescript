//import { useState } from 'react'
import {Outlet} from "react-router-dom"


function App() {
  

  return (
    <>
     <div className="App">
      <h1>User Finder</h1>
      <Outlet />
     </div>
    </>
  )
}

export default App
