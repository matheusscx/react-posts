import React, { Component } from 'react';

class Formulario extends Component {

		state = {
			name: '',
			description: ''
		}
	
	onChange = e => {
		this.setState({ [e.target.name]: e.target.value })
	}

	handleSubmit = e => {
		e.preventDefault();
		document.getElementById('nameInput').value = '';
		document.getElementById('descriptionInput').value = '';
		this.setState({ name: '', description: '' })
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<div className="row">
					
					<div className="col-12 col-sm-3 ">
						<input 
							className='form-control'
							id='nameInput' 
							name='name' type='text' 
							onChange={this.onChange.bind(this)}
							placeholder='Nombre' 
							required minLength='3' 
						/>
					</div>

					<div className="col-12 col-sm-7 my-3 my-sm-0">
						<input 
							className='form-control'
							id='descriptionInput' 
							name='description' type='text' 
							onChange={this.onChange.bind(this)} 
							placeholder='Descripción' 
							required minLength='5' 
						/>
					</div>

					<div className="col-12 col-sm-2 text-right ">
						<button 
							className='btn btn-success mb-3 mr-lg-4 shadow-sm'
							onClick={() => this.props.addPost(this.state)}
							type='submit' 
						>
							Crear
						</button>
					</div>
				</div>
			</form>
		);
	}
}

export default Formulario;