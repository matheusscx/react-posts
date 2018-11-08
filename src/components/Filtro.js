import React, { Component } from 'react';

class Filtro extends Component {

	onChange = e => {
		this.props.searchState(e.target.value)
		if (!e.target.value.length) {
			this.props.searchPost({ search: '' });
		}
	}

	handleSubmit = e => {
		e.preventDefault();
	}

	render() {
		
		const {
			searchPost,
			search
		} = this.props

		return (
			<form className='mt-5' onSubmit={this.handleSubmit} >
				<div className="row">

					<div className="col-7 col-sm-5 col-md-4 ">
						<input
							onChange={this.onChange}
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
							onClick={searchPost.bind(null, search)}
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