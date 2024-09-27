import { useState, CSSProperties } from "react"
import { Home, Layout, Navigation, Points } from "../components/common"


interface BallProps {
  maxCount: number,
  x: number,
  y: number,
  // Käyttäjäkokemuksen parantamisen lisäys 3.;
  // Lisää pistelaskenta-systeemin, joka pitää pallojen klikkausten
  // pistemäärän ajan tasalla ja näyttää sen oikeassa yläreunassa.
  // Pallolle annetaan pisteiden keruu funktio `setCount`-proppina,
  // joka päivittää pisteitä kun palloa klikataan.
  setCount: (count: number) => void;
}


function Ball({maxCount, x, y, setCount}:BallProps) {

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
    // Käyttäjäkokemuksen parantamisen lisäys 1.;
    // Jos pallo on klikattu maksimimäärään, näytetään "x",
    // joka edustaa räjähtynyttä palloa. Pallon sijainti pysyy ennallaan.

    return <div style={style}>
      x
    </div>

  }

  return <>

    <div style={style} onClick={()=> {
      setClicked(clicked+1)
      // Käytämme setCount funktiota 1 pisteen lisäämiseksi count variableen, kun käyttäjä klikkaa palloa
      setCount(1)
    }}> 
      {clicked} / {maxCount}
      </div>
    
  </>
}

// Luo jokaiselle pallolle satunnainen max klikkausmäärä sekä x- ja y-sijainti,
// jolloin jokainen pallo sijoittuu satunnaisesti sivulle.
function randomIntFromInterval(min: number, max: number) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min);
}


export function Game() {

  const [count, setCount] = useState(0);
  
  //Tekee palloja 20 arrays:ä, joissa on random; 
  //max clickaus määrä
  //x ja y paikka, eli sijainti sivulla  
  const allBalls = Array(20).fill(null).map((_,i)=>{
    return <Ball 
      key={i}
      maxCount={randomIntFromInterval(1, 5)}
      x={randomIntFromInterval(1, window.innerWidth)}
      y={randomIntFromInterval(1, window.innerHeight)} 

      // Piste joka on lisätty Ball funktiossa, menee count variableen, 
      // jotta saisimme tämän hetken summan pisteistä,
      // jota sitten voidaan näyttää pelissä
      setCount={(value) => setCount(prevCount => prevCount + value)}>
      
    </Ball>

  })
    return (
      <Layout>
        
        
        <Navigation>
          <Home>
            Home
          </Home>
          <Points>
            {count}
            </Points>
        </Navigation>
        {allBalls}
        
      </Layout>
  )
}
