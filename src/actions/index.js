const ADD_TODO='ADD_TODO'
export const addtodo=(message)=>({
	type:ADD_TODO,
	message,
	id:Math.random(),
});


const DELETE_TODO='DELETE_TODO'
export const deletetodo=(id)=>({
	type:DELETE_TODO,
	id,
});


