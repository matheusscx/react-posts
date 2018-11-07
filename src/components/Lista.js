import React from 'react';

const fielsTable = ['Nombre', 'Descripción', 'Acción'];

const Lista = ({ posts, deletePost }) => {
	return (
		<table className="table mb-5 mt-2 table-striped text-center">
			<thead className="thead-dark">
				<tr>
					{fielsTable.map(fielTable => <th key={fielTable} scope="col">{fielTable}</th>)}
				</tr>
			</thead>
			<tbody>
				{
					posts.map(post => {
						return (
							<tr key={post.idposts} >
								<td>{post.name}</td>
								<td>{post.description}</td>
								<td>
									<button onClick={() => deletePost(post.idposts)} className="btn btn-danger btn-sm">Eliminar</button>
								</td>
							</tr>
						);
					})
				}
			</tbody>
		</table>
	);

}

export default Lista;