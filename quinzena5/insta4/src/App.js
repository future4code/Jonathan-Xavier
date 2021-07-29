import React from 'react';
import './App.css';
import Post from './components/Post/Post';

class App extends React.Component {
  state = {

   posts:[

 {
   nomeUsuario:'paulinha',
   fotoUsuario:'https://picsum.photos/50/50',
   fotoPost:'https://picsum.photos/200/150'
 },

 {
   nomeUsuario:'Jonathan',
   fotoUsuario:"https://picsum.photos/50/51",
   fotoPost: "https://picsum.photos/200/151"

 },

 {
   nomeUsuario:'Amanda',
   fotoUsuario: "https://picsum.photos/50/52",
   fotoPost: "https://picsum.photos/200/152"

 }],

 valorInputNomeUsuario: "",
    valorInputFotoUsuario: "",
    valorInputFotoPost: ""
  }

  adicionarNovoPost = () => {
    const novaPostagem = {
      nomeUsuario: this.state.novoNomeUsuario,
      fotoUsuario: this.state.novaFotoUsuario,
      fotoPost: this.state.novaFotoPost,
    };

    const novasPostagens = [...this.state.postagens, novaPostagem];
    this.setState({ postagens: novasPostagens });

    this.setState({
      novoNomeUsuario: "",
      novaFotoUsuario: "",
      novaFotoPost: "",
    });
  };

  onChangeUsuario = (event) => {
    this.setState({ novoNomeUsuario: event.target.value });
  };

  onChangeFotoUsuario = (event) => {
    this.setState({ novaFotoUsuario: event.target.value });
  };

  onChangeFotoPost = (event) => {
    this.setState({ novaFotoPost: event.target.value });
  };

  render() {
    const listaPostagens = this.state.postagens.map((dado) => {
      return (
        <Post
        nomeUsuario={dado.nomeUsuario}
        fotoUsuario={dado.fotoUsuario}
        fotoPost={dado.fotoPost}
      />
    );
  });

  return (
    <MainContainer>
      <Input
        value={this.state.novoNomeUsuario}
        onChange={this.onChangeUsuario}
        placeholder="Insira Nome"
      />
      <Input
        value={this.state.novaFotoUsuario}
        onChange={this.onChangeFotoUsuario}
        placeholder="Link foto do Perfil"
      />
      <Input
        value={this.state.novaFotoPost}
        onChange={this.onChangeFotoPost}
        placeholder="Link foto da Postagem"
      />
      <button onClick={this.adicionarNovoPost}>Novo Post</button>
      <div>{listaPostagens}</div>
    </MainContainer>
  );
}
}

export default App;
