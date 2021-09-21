import styled from 'styled-components'
import logo from '../../../assets/today.png'
const StyledLogo = styled.img``
const Logo = () => {
return (
<StyledLogo src={logo} className='w-40 object-contain'>
</StyledLogo>
)
}
export default Logo