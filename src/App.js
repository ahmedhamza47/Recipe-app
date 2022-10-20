import Pages from "./pages/Pages";
import Category from "./components/Category";
import { BrowserRouter } from "react-router-dom";
import Search from "./components/Search";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { GiKnifeFork } from "react-icons/gi";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav>
          <GiKnifeFork />
          <Home to={"/"}>Delicious</Home>
        </Nav>
        <Search />
        <Category />
        <Pages />
      </BrowserRouter>
    </div>
  );
}

const Home = styled(Link)`
  font-weight: bolder;
  text-decoration: none;
  font-family: "Lobster Two", cursive;
  font-weight: 600;
  font-size: 1.3rem;
`;
const Nav = styled.div`
  padding: 1rem 0rem;
  justify-content: flex-start;

  margin-bottom: 0;
  svg {
    font-size: 1.5rem;
  }
`;
export default App;
