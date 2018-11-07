import React, { Component } from 'react';

class Filtro extends Component {
	constructor() {
		super()
		this.state = {
			search: ''
		};
	}

	onChange = e => {
		this.setState({ search: e.target.value })
		if (e.target.value.length === 0) {
			this.props.searchPost({ search: '' });
		}
	}

	handleSubmit = e => {
		e.preventDefault();
	}

	render() {
		return (
			<form className='mt-5' onSubmit={this.handleSubmit} >
				<div className="row">

					<div className="col-7 col-sm-5 col-md-4 ">
						<input 
							onChange={this.onChange.bind(this)} 
							placeholder='Filtro de nombre' 
							required minLength='3' 
							type='text' className='form-control'
						/>
					</div>

					<div className="col-12 col-sm-4 col-md-6 d-none d-sm-block">
					</div>

					<div className="col-5 col-sm-3 col-md-2 text-right ">
						<button 
							className='btn btn-primary mb-3 mr-lg-3 justify-content-end shadow-sm'
							onClick={() => this.props.searchPost(this.state)} 
							type='submit' 
						>
							Buscar 
						</button>
					</div>
				</div>
			</form>
		);
	}
}

export default Filtro;