import icone1 from '../../assets/icone1.png'
import icone2 from '../../assets/icone2.png'
import styled from 'styled-components'
const icones = [icone1, icone2]

const Icone = styled.li`
    margin-right: 40px;
    width: 25px;
`

const Icones = styled.ul`
    display: flex;
    align-items: center;
`

function IconesHeader() {
    return(
        <Icones>
        { icones.map((icone) => (
          <Icone><img src={icone}></img></Icone>
        ))}
       </Icones>
    )
}

export default IconesHeader