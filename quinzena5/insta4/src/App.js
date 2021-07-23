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

  onChangeInputNomeUsuario = (event) => { this.setState({ valorInputNomeUsuario: event.target.value }) }
  onChangeInputFotoUsuario = (event) => { this.setState({ valorInputFotoUsuario: event.target.value }) }
  onChangeInputFotoPost = (event) => {this.setState({ valorInputFotoPost: event.target.value })}
  adicionaPost = () => {
    const novoPost = {
      nomeUsuario: this.state.valorInputNomeUsuario,
      fotoUsuario: this.state.valorInputFotoUsuario,
      fotoPost: this.state.valorInputFotoPost }

    const organizacaoPost = [novoPost, ...this.state.posts]
    this.setState({posts: organizacaoPost, valorInputFotoPost:"", valorInputFotoUsuario:"", valorInputNomeUsuario:""})}


  render() {
    const listaDePosts = this.state.posts.map((param, indice) => {
      return (<Post nomeUsuario={param.nomeUsuario} fotoUsuario={param.fotoUsuario} fotoPost={param.fotoPost} />)


    })
    return (


      <MainContainer>
        <Post
        </NovosPosts>
        {listaDePosts}
        
          fotoPost={'https://picsum.photos/200/152'} 
      </MainContainer>

    );
  }
}
