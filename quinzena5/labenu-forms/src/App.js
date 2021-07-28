import './App.css';
import React from 'react'; 
import Pagina1 from './components/Pagina1'; 
import Pagina2 from './components/Pagina2'; 
import Pagina3 from './components/Pagina3'; 
import PaginaFinal from './components/PaginaFinal'; 
import { ButtonContainer } from './components/Design';

class App extends React.Component { 
  state = {
    pagina: 1
  }
  
  renderizaPagina = () => {
    switch (this.state.pagina) {
      case 1: 
        return <Pagina1 /> 
      case 2: 
        return <Pagina2 /> 
      case 3: 
        return <Pagina3 />
      default: 
        return <PaginaFinal />
    }
  }
  

  irParaProximaPagina = () => {
    this.setState({
      pagina: this.state.pagina + 1
    })
  }
  
  
  render() {
    return (
      <ButtonContainer> 
        {this.renderizaPagina()}
        {this.state.pagina === 4 ? "" : <button onClick={this.irParaProximaPagina}>Próxima página</button>} 
      </ButtonContainer>
    );
  }
}

export default App;
