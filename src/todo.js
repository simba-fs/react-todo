import React from 'react';

import Task from './task';

export default function Tode(){
	const [todo, setTodo] = React.useState([]);
	const [text, setText] = React.useState('');

	function onAdd(){
		if(text.length <= 0) return;
		setTodo([...todo, {
			index: todo.length,
			text: text
		}]);
		setText('');
	}

	function gen(todo){
		return todo.map(i => <Task index={i.index} text={i.text} remove={() => remove(i.index)}/>)
	}

	function remove(e){
		setTodo(todo
			.filter(i => i.index !== e)
			.map((i, index) => ({
				...i,
				index: index
			})));
	}

	function textChange(e){
		setText(e.target.value);
	}

	return (
		<div>
			{todo.length > 0 ? gen(todo) : <h2>No Todo</h2>}
			<input type="text" onChange={textChange} value={text}/>
			<button onClick={onAdd}>Add</button>
		</div>
	)
}
