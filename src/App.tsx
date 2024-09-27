import { useState } from "react";
import { addPointsToDb } from "./services/supabase_client";
import { Layout, Navigation, Home } from "./components/common";


// Default näkymä tällä hetkellä
export default function App() {

  const [nickname, setNickname] = useState("")
  

  return <Layout>

    <Navigation>

      <Home>Koti</Home>

    </Navigation>

    <input value={nickname} onChange={(e)=> setNickname(e.target.value)}></input>
    <button onClick={()=> addPointsToDb(nickname, 100)}>Testaa supbase</button>
    
    Nimimerkki: {nickname}

  </Layout>
}