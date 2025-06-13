import { useState } from 'react';
import './App.css';
import Navbar from './Navbar'
import Newsboard from './Newsboard';
function App() {
  const[category,setcategory]=useState("general")
  return (
    <>
     <Navbar setcategory={setcategory}/>
    <div>
          <Newsboard category={category}/>
  </div>
    </>
  
  )
}
export default App
