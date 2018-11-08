import React, { Component } from 'react';
import Formulario from './components/Formulario';
import Filtro from './components/Filtro';
import Lista from './components/Lista';

const URIDB = 'https://app-posts.herokuapp.com/posts'

class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: [],
      postsAux: [],
      search: 'hola',
      form: {
        name: '',
        description: ''
      },
    }
  }

  componentWillMount = () => {
    fetch(URIDB)
      .then(res => res.json())
      .then(json => {
        this.setState({
          posts: json.posts,
          isLoaded: true
        })
      })
  }

  render() {

    const {
      posts,
      search,
      form
    } = this.state

    return (
      <div className='container'>
        <Filtro search={search} searchState={this.searchState} searchPost={this.searchPost}></Filtro>
        <Lista posts={posts} deletePost={this.deletePost}></Lista>
        <Formulario formState={this.formState} addPost={this.addPost} name={form.name} description={form.description}></Formulario>
      </div>
    );
  }

  deletePost = id => {
    let confirm = window.confirm('¿Estás seguro de que deseas eliminar este elemento?')
    if (confirm) {
      fetch(`${URIDB}/${id}`, { method: 'DELETE' })
        .then(res => res.json())
        .then(data => {
          let newState = this.state.posts.filter(post => post.idposts !== id)
          this.setState({ posts: newState });
        });
    }
  }

  addPost = (name, description) => {

    if (name.length >= 3 && description.length >= 5) {
      fetch(URIDB, {
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

  searchPost = (search) => {
    if (search.length) {
      this.setState({ postsAux: this.state.posts })
      let key = new RegExp(search, 'i')
      let newState = this.state.posts.filter(post => key.test(post.name))
      this.setState({ posts: newState });
    } else {
      this.setState({ posts: this.state.postsAux })
    }
  }

  formState = (input, value) => {
    this.setState(prevState => {
      if (value === 'name')
        return { form: { [input]: value, description: prevState.form.description } }
      return { form: { name: prevState.form.name, [input]: value, } }
    })
  }

  searchState = (search) => {
    this.setState({ search })
  }

}


export default App;
