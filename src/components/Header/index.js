import Logo from '../Logo'
import OpcoesHeader from '../Opcoes-Header'
import IconesHeader from '../Icones-Header'
import styled from 'styled-components'

const HeaderContainer = styled.div`
    background-color: #fff;
    display: flex;
    justify-content: center;
` 
function Header() {
    return(
      <HeaderContainer>
       <Logo></Logo>
       <OpcoesHeader></OpcoesHeader>
       <IconesHeader></IconesHeader>
      </HeaderContainer>
    )
}

export default Header