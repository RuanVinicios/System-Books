import Header from './components/Header'
import styled from 'styled-components'
import Pesquisa from './components/Pesquisa';

const AppContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: linear-gradient(90deg, #002F52 35%, #326589 165%);

}
`

function App() {
  return (
    <AppContainer>
          <Header />
          <Pesquisa />
    </AppContainer>
  );
}

export default App;

/*
Essa seria uma forma de usar componente

<div className="App">
      <header className="App-header">
       <Logo></Logo>
       <ul className='opcoes'>
        { textoOpcoes.map((texto) => (
          <li className='opcao'><p>{texto}</p></li>
        ))}
       </ul>
       <ul className='icones'>
        { icones.map((icone) => (
          <li><img src={icone}></img></li>
        )
        )}
       </ul>
      </header>

*/
