import { useState, CSSProperties, useEffect } from "react"
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
  
  // Käyttäjäkokemuksen parantamisen lisäys 4.;
  // Tallennetaan pallon x ja y arvot tilaan ensimmäisen renderöinnin yhteydessä
  // Tämä estää pallojen pomppimista pois, kun niitä klikkaa.
  const [position] = useState({ x, y });

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
    // Käytetään tallennettua sijaintia
    transform: `translate(${position.x}px, ${position.y}px)`

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

  // Käyttäjäkokemuksen parantamisen lisäys 5.;
  // Pallojen maxcount, x ja y numero muuttuvat joka renderi, 
  // joten tämä estää niiden arvojen random numero generationin tapahtuvan joka render, 
  // käyttämällä useEffect
  // Tila pallojen tallentamiseksi
  const [balls, setBalls] = useState<JSX.Element[]>([]); 

  useEffect(() => {
    // Luo satunnaisia ​​arvoja palloille vain kerran, kun komponentti kiinnittyy
    const generatedBalls = Array.from({ length: 20 }, (_, i) => {
      const maxCount = randomIntFromInterval(1, 5);
      const x = randomIntFromInterval(1, window.innerWidth);
      const y = randomIntFromInterval(1, window.innerHeight);

      return (
        <Ball
          key={i}
          maxCount={maxCount}
          x={x}
          y={y}
          setCount={(value) => setCount((prevCount) => prevCount + value)}
        />
      );
    });

    setBalls(generatedBalls); // Aseta luodut pallot tilaan
  }, []); // Tyhjä riippuvuustaulukko tarkoittaa, että tämä suoritetaan vain kerran
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
        {balls}
        
      </Layout>
  )
}
