import React from 'react' 
import { Design } from './Design' 

class Pagina3 extends React.Component {
    render() {
        return(
            <Design>
                <h3>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</h3> 
                <label>7. Por que você não terminou um curso de graduação?</label> 
                <input /> 
                <label>8. Você fez algum curso complementar?</label> 
                <select>
                    <option value="Nenhum">Nenhum</option> 
                    <option value="Curso técnico">Curso técnico</option> 
                    <option value="Curso de inglês">Curso de inglês</option>
                </select>
            </Design>
        )
    }
} 

export default Pagina3