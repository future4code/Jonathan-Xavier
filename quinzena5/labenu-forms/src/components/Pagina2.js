import React from 'react' 
import { Design } from './Design' 

class Pagina2 extends React.Component {
    render(){
        return(
            <Design>
                <h3>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h3> 
                <label>5. Qual o curso?</label> 
                <input /> 
                <label>6. Qual a unidade de ensino?</label> 
                <input />
            </Design>
        )
    }
} 

export default Pagina2