import React from 'react';

export default function Tode(){
	const [todo, setTodo] = React.useState([]);
	const [text, setText] = React.useState('');

	function onAdd(){
		let newTask = (
			<div>
				<h3>{text}</h3>
				<button>Remove</button>
			</div>
		);
		setTodo([...todo, newTask]);
	}

	function remove(e){
		console.log(e.target);
	}

	function textChange(e){
		setText(e.target.value);
	}

	return (
		<div>
			{(() => {
				if(todo.length === 0){
					return <h2>No Todo</h2>
				}else{
					return todo
				}
			})()}
			<input type="text" onChange={textChange}/>
			<button onClick={onAdd}>Add</button>
		</div>
	)
}
