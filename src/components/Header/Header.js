import styled from 'styled-components'
import AllDay from "./AllDay/AllDay"
import Burger from "./Burger/Burger"
import Links from "./Links/Links"
import Logo from "./Logo/Logo"
const StyledHeader = styled.header`
  color: white;
`
const Header = () => {
return (
<StyledHeader className='bg-gradient-to-r from-red-400 via-pink-400 to-red-500'>
  <div className=' h-20 flex items-center justify-between px-4 xl:px-0 max-w-6xl mx-auto'>
    <div className='flex md:gap-5'>
      <Logo />
      <Links />
    </div>
    <div className="flex items-center gap-3 md:gap-5">
      <AllDay />
      <Burger />
    </div>
  </div>
</StyledHeader>
)
}
export default Header