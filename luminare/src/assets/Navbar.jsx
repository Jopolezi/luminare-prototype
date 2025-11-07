import { NavLink } from "react-router";
import styled from "styled-components";
import "@fontsource/poppins";
import { IoHome } from "react-icons/io5";
import { MdMessage } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";

const Footer = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 70px;

  display: flex;
  align-items: center;
  justify-content: space-around;

  background: #1A1B2E;
  z-index: 999;
`;

const Navigation = styled(NavLink)`
  display: flex;
  align-items: center;
  flex-direction: column;
  text-decoration: none;
  color: #c1c1c1;
  font-size: 14px;
  font-weight: 500;
  font-family: "Poppins", sans-serif;
  padding: 8px;
  transition: opacity 0.2s ease;

  &.active {
    color: #2F80ED;
  }
`;

export default function Navbar() {
  return (
    <>
      <Footer>
        <Navigation to="/"><IoHome size={24}/>Início</Navigation>
        <Navigation to="/mensagens"><MdMessage size={24} />Mensagens</Navigation>
        <Navigation to="/perfil"><FaUserCircle size={24}/>Perfil</Navigation>
      </Footer>
    </>
  );
}
