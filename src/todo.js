import React from 'react';

import './lazy4.css';
import Task from './task';

export default function Tode(){
	const [todo, setTodo] = React.useState([]);
	const [text, setText] = React.useState('');
	/*
	const [isChecked, setChecked] = React.useState([]);

	function onCheck(e){
		const checked = e.target.checked;
		const index = e.target.dataset.index;
		if(checked){
			setChecked((isChecked.concat(index)).sort((a, b) => a > b));
		}else{
			setChecked(isChecked.filter(i => i !== index));
		}
	}
	*/

	function onAdd(e){
		e.preventDefault();
		if(text.length <= 0) return;
		setTodo([...todo, {
			index: todo.length,
			text: text
		}]);
		setText('');
	}

//	const gen = (todo) => todo.map(i => <Task index={i.index} text={i.text} remove={() => remove(i.index)} check={onCheck} />);
	const gen = (todo) => todo.map(i => <Task index={i.index} text={i.text} remove={() => remove(i.index)} />);

	function remove(e){
		if(typeof e === 'number'){
			setTodo(todo
				.filter(i => i.index !== e)
				.map((i, index) => ({
					...i,
					index: index
				}))
			)
		}
			/*
		else if(Array.isArray(e)){
		console.log(e);
			for(let j in e) setTodo(todo
				.filter(i => i.index !== j)
				.map((i, index) => ({
					...i,
					index: index
				}))
			)
		}
		*/
	}

	function textChange(e){
		setText(e.target.value);
	}

	return (
		<div className="container">
			<div className="container list f-row f-align:c">
				{todo.length > 0 ? gen(todo) : <h2>No Todo</h2>}
				{/*isChecked.length > 0
				?(
					<div className="btn-grp list_item :united :square">
						<button className="btn" onClick={() => remove(isChecked)}>Remove</button>
						<button className="btn">Duplicate</button>
					</div>

				): null*/}
			</div>
			<form onSubmit={onAdd}>
				<div className="input-grp">
					<input className="input" type="text" onChange={textChange} value={text}/>
					<span className="input-btn">
						<button className="btn" onClick={onAdd}>Add</button>
					</span>
				</div>
			</form>
		</div>
	)
}
