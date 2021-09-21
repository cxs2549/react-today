import styled from "styled-components";
const StyledLinks = styled.ul`
  li {
    white-space: nowrap;
  }
  li:nth-child(5) {
    display: none;
    @media (min-width: 1280px) {
      display: block;
    }
  }
  li:nth-child(3),
  li:nth-child(4) {
    display: none;
    @media (min-width: 1024px) {
      display: block;
    }
  }
  li:nth-child(6) {
    @media (min-width: 1280px) {
      display: none;
    }
  }
`;
const Links = () => {
  return (
    <StyledLinks className="hidden md:flex gap-5 xl:gap-8 uppercase text-lg xl:text-xl font-bold">
      <li>on the show</li>
      <li>covid-19 & kids</li>
      <li>'making space'</li>
      <li>health</li>
      <li>parents</li>
      <li>more</li>
    </StyledLinks>
  );
};
export default Links;
