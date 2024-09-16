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
  color: #e85a5a;
  width: 100%;
  width: 80px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  border-radius: 50%;

`

const Home = styled.button`
  color: lightcyan;

`
const Points = styled.div`
  width: 50px;
  height: 50px;
  background-color: red;
  margin-right: 10px;

`
export default function App() {

  return (
      <Layout>
        
        <Title>
            Luento 3 + React
        </Title>
        <Home>

        <Navigation>
          

        </Navigation>
        <Points></Points>
        </Home>
      </Layout>
  )
}

