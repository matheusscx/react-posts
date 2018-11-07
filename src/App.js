import React, { Component } from 'react';
import Formulario from './components/Formulario';
import Filtro from './components/Filtro';
import Lista from './components/Lista';


class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: [],
      postsAux: [],
      isLoaded: false
    }
  }

  componentWillMount = () => {
    fetch('https://app-posts.herokuapp.com/posts')
      .then(res => res.json())
      .then(json => {
        this.setState({
          posts: json.posts,
          isLoaded: true
        })
      })
  }

  render() {

    return (
      <div className='container'>
        <Filtro searchPost={this.searchPost}></Filtro>
        <Lista posts={this.state.posts} deletePost={this.deletePost}></Lista>
        <Formulario addPost={this.addPost}></Formulario>
      </div>
    );
  }

  deletePost = id => {
    let confirm = window.confirm('¿Estás seguro de que deseas eliminar este elemento?')
    if (confirm) {

      fetch(`https://app-posts.herokuapp.com/posts/${id}`, { method: 'DELETE' })
        .then(res => res.json())
        .then(data => {
          let newState = this.state.posts.filter(post => post.idposts !== id)
          this.setState({ posts: newState });
        });
    }
  }

  addPost = ({ name, description }) => {

    if (name.length >= 3 && description.length >= 5) {
      fetch('https://app-posts.herokuapp.com/posts', {
        method: 'POST',
        body: JSON.stringify({ name, description }),
        headers: { 'Content-type': "application/json" }
      })
        .then(res => res.json())
        .then(data => {
          let newState = this.state.posts;
          newState.push(data.post);
          this.setState({ posts: newState })
        });
    }
  }

  searchPost = ({ search }) => {
    if (search.length > 0) {
      this.setState({ postsAux: this.state.posts })
      let key = new RegExp(search, 'i')
      let newState = this.state.posts.filter(post => key.test(post.name))
      this.setState({ posts: newState });
    } else {
      this.setState({ posts: this.state.postsAux })
    }
  }
}


export default App;
