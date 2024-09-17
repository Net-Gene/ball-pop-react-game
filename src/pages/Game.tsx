import { useState, CSSProperties } from "react"
import { Home, Layout, Navigation, Points } from "../components/common"

interface BallProps {
  maxCount: number,
  x: number,
  y: number
}
function Ball({maxCount, x, y}:BallProps) {

  const [clicked, setClicked] = useState(0)
 
  const style: CSSProperties = {

    background: "red",
    width: 50 + "px",
    height: 50 + "px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "50%",
    userSelect: "none",
    cursor: "pointer",
    transform: `translate(${x}px,${y}px)`

  }

  if(clicked >= maxCount){
    // style={style} pystyy pitämään räjähtyneen pallon samassa kohdassa
    // kun pallon alkuperäisen paikan
    return <div style={style}>
      x
    </div>

  }

  return <>

    // clickaus lisää yhden numeron lisää esim. pallo objektiin
    <div style={style} onClick={()=> setClicked(clicked+1)}> 
      {clicked} / {maxCount}
      </div>
    
  </>
}

//Random numero generator, valitse minimi numero ja maksimi numero 
function randomIntFromInterval(min: number, max: number) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min);
}


export function Game() {

  //Tekee palloja 20 arrays:ä, joissa on random; 
  //max clickaus määrä
  //x ja y paikka, eli sijainti sivulla  
  const allBalls = Array(20).fill(null).map((_,i)=>{
    return <Ball 
    key = {i}
    maxCount={randomIntFromInterval(1, 5)} 
    x={randomIntFromInterval(1,window.innerWidth)} 
    y={randomIntFromInterval(1, window.innerHeight)}>
      
    </Ball>

  })
    return (
      <Layout>
        
        
        <Navigation>
          <Home>
            Home
          </Home>
          <Points>Points</Points>
        </Navigation>
        {allBalls}
        
      </Layout>
  )
}
