import logo from '../../assets/logo.png'
import styled from 'styled-components'

const LogoContainer = styled.div`
    display: flex;
    font-size: 30px;
`

const LogoImage = styled.img`
    margin-right: 10px;
`
function Logo() {
    return(
        <LogoContainer>
            <LogoImage
            src={logo} 
            alt='imagem do logo do site' 
            className='logo-img'
            />
            <p><strong>Livraria</strong></p>
        </LogoContainer>
    )
}

export default Logo