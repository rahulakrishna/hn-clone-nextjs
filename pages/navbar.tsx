import Link from "next/link";
import styled from "styled-components";

const Container = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  background: #ff8f00;
  padding: 0px 32px;
`;

const Title = styled.h3`
  color: #000;
  margin-right: 20px;
`;

const NavItem = styled.span`
  color: #0f0f0f;
  text-decoration: underline;
  margin-right: 8px;
`;

const Navbar = () => {
  return (
    <Container>
      <Title>HackerNews</Title>
      <NavItem>
        <Link href="/new">new</Link>
      </NavItem>
      <NavItem>
        <Link href="/hot">hot</Link>
      </NavItem>
    </Container>
  );
};

export default Navbar;
