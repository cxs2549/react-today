import styled from "styled-components";
import logo from "../../../assets/logo.png";
const StyledAllDay = styled.div`
  #img {
    position: relative;
    &::before {
      content: "";
      position: absolute;
      height: 9px;
      width: 9px;
      background-color: #fff;
      border-radius: 999999px;
      left: -0.8rem;
      top: 50%;
      transform: translateY(-50%);
    }
  }
`;
const AllDay = () => {
  return (
    <StyledAllDay className="flex justify-center items-center ">
      <div id="img" className="relative">
        <img src={logo} alt="" className="w-20" />
      <span className="absolute right-1 text-base top-4 font-bold italic whitespace-nowrap">all day</span>
      </div>
    </StyledAllDay>
  );
};
export default AllDay;
