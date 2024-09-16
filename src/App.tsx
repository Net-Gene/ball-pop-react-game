import styled from "styled-components";

const Title = styled.h1`
  font-size: 30px;
  text-align: center;
  color: #ffffff;
`

const Layout = styled.div`
  background: #000000;
  width: 100vw;
  height: 100dvw;
`

const Navigation = styled.div`
  background-color: lightblue;

  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  

`

const Home = styled.button`
  color: #000000;
  border-radius: 50%;
  width: 100%;
  width: 50px;
  margin-left: 10px;
`
const Points = styled.div`
  width: 50px;
  height: 50px;
  background-color: #ffffff;
  text-align: center;
  margin-right: 10px;


`
export default function App() {

  return (
      <Layout>
        
        <Title>
            Luento 3 + React
        </Title>
        
        <Navigation>
          <Home>
          Home
          </Home>
          <Points>Points</Points>
        </Navigation>
        
      </Layout>
  )
}

