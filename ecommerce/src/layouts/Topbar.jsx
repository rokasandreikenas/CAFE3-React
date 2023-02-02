import styled from "styled-components";
import { Link } from "react-router-dom";
import { lightBorderColor } from "../consts/colors";
import SearchBar from "../components/SearchBar/SearchBar";
import { HOME_PATH } from "../routes/const";

const Topbar = () => {
  return (
    <Container>
      <NavigationItem>Categories</NavigationItem>
      <Logo as={Link} to={HOME_PATH}>
        POHSE
      </Logo>
      <SearchBar />
    </Container>
  );
};

export default Topbar;

const Container = styled.div`
  padding: 6px 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${lightBorderColor};
  background-color: #ffffff;
`;

const NavigationItem = styled.div`
  font-size: 19px;
`;

const Logo = styled.div`
  font-weight: 700;
  font-size: 28px;
  text-decoration: none;
  color: inherit;
`;
