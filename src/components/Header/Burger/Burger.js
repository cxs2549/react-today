import styled from "styled-components";
import Hamburger from "hamburger-react";
import { useState } from "react";

const StyledBurger = styled.div``;
const Burger = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <StyledBurger>
      <Hamburger toggled={isOpen} toggle={setOpen} />
    </StyledBurger>
  );
};
export default Burger;
