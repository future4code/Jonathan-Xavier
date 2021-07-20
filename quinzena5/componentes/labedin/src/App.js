import React from 'react';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno';
import { Title } from './styles';
import { MyCardGrande } from './styles';

function App() {
  return (
    <MyCardGrande>
      <div>
        <Title>Dados pessoais</Title>
        <CardGrande
          imagem="https://media-exp1.licdn.com/dms/image/C4E03AQFJnf8z3hjCKg/profile-displayphoto-shrink_200_200/0/1619517127839?e=1628121600&v=beta&t=pzY4wgs1w0g0h7fm5hwZ8822C9YsCihNYjwCrlRL-oE" 
          nome="Jonathan Lopes Xavier" 
          descricao="Olá, eu sou o Jonathan. Atuo profissionalmente a mais de 6 anos na área de suporte de redes e agora estou migrando para a área de desenvolvimento, como Front End React."
        /> 
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />

        <CardPequeno
        imagem="https://w7.pngwing.com/pngs/1023/729/png-transparent-email-address-electronic-mailing-list-logo-internet-email-miscellaneous-angle-triangle.png" alt=""
        descricao="E-mail: me.info.jonathan@gmail.com"
        />

        <CardPequeno
        imagem="https://e7.pngegg.com/pngimages/940/524/png-clipart-computer-icons-icon-design-address-others-miscellaneous-heart.png" alt=""
        descricao="Rua Filomena Costa, 659"
        />
      </div>

      <div>
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://www.flin.com.br/_imagens/LogomarcaTopo.png" alt="My Awesome Image"
          nome="FLIN" 
          descricao="Suporte externo em redes de internet." 
        />
        
        <CardGrande 
          imagem="data:image/png;base64,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" alt=""
          nome="SECOVI" 
          descricao="Suporte de dados para o site do sindicato." 
        />
      </div>

      <div>
        <Title>Minhas redes sociais</Title>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </MyCardGrande>
  );
}

export default App;
