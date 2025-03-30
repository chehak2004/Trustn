import { useState } from 'react'
import Background from './Components/Background/Background';
import Navbar from './Components/Navbar/Navbar';

const App = () => {
  let heroData = [
    {text1:"Students celebrating after NEET results",text2:"Celebrating Success: Our students achieve top ranks in NEET"},
    {text1:"What rank is required for admission?",text2:"Any"},
    {text1:"International or National?",text2:"Both"},
  ]
  const[heroCount,setHeroCount] = useState(0);
  const[playStatus,setPlayStatus] = useState(false);
  return (
    <div>
      <Background playStatus={playStatus} heroCount={heroCount} />
      <Navbar />
    </div>
  )
}

export default App
