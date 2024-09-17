import { createClient } from '@supabase/supabase-js'
import { Database } from "./supabase"

const supabaseUrl = 'https://xltsvftcoauabqhjznjg.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhsdHN2ZnRjb2F1YWJxaGp6bmpnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjY1NTEyNTYsImV4cCI6MjA0MjEyNzI1Nn0.sTF4WAFDHYrqNwBfiFrlc53xFDy5Ji8ON4YkeiDqPQ4"
//Halutaan käyttää tätä supabase url/key muissa koodeissa, joten exportataan nämä exporttaamaalla variable
export const supabase = createClient<Database>(supabaseUrl, supabaseKey)

export async function addPointsToDb(nickname : string, points : number){

    // jos nickname puuttuu, koodi ilmoittaa sen konsoliin ja palautuu takaisin
    if(!nickname){
      alert("tarvitaan nickname")
      return
    }

    const {data, error} = await supabase.from('ranking').insert([
      {
        nickname: nickname,
        points: points
      }
    ]).select()

    // jos virhe ilmestyy, koodi ilmoittaa sen konsoliin ja palautuu takaisin
    if(error){
      alert("Virhe ilemstyi: "+ error.message)
      return
    }

    // jos koodi toimii, data tulee konsoliin
    console.log(data)
    return data.at(0)

  }