import React, { Component } from 'react';

class Formulario extends Component {
	constructor(props) {

		super(props)
		this.nameInput = React.createRef();
		this.descriptionInput = React.createRef();

	}

	onChange = e => {
		this.props.formState(e.target.name, e.target.value);
	}

	handleSubmit = e => {
		e.preventDefault();
		this.nameInput.current.value = '';
		this.descriptionInput.current.value = '';
	}

	render() {

		const {
			addPost,
			name,
			description
		} = this.props;

		return (
			<form onSubmit={this.handleSubmit}>
				<div className="row">

					<div className="col-12 col-sm-3 ">
						<input
							className='form-control'
							id='nameInput'
							name='name' type='text'
							onChange={this.onChange}
							placeholder='Nombre'
							required minLength='3'
							ref={this.nameInput}
						/>
					</div>

					<div className="col-12 col-sm-7 my-3 my-sm-0">
						<input
							className='form-control'
							id='descriptionInput'
							name='description' type='text'
							onChange={this.onChange}
							placeholder='Descripción'
							required minLength='5'
							ref={this.descriptionInput}
						/>
					</div>

					<div className="col-12 col-sm-2 text-right ">
						<button
							className='btn btn-success mb-3 mr-lg-4 shadow-sm'
							onClick={addPost.bind(null, name, description)}
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