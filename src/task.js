import React from 'react';

function Edit(props){
	return (
		<>
		<input 
			type="text" 
			value={props.text} 
			onChange={(e) => props.setText(e.target.value)} 
		/>
		<button onClick={props.text.length > 0 && props.toggleEdit}>Done</button>
		</>
	)

}

export default function Task(props){
	const [isEdit, setEdit] = React.useState(false);
	const [text, setText] = React.useState(props.text);

	const toggleEdit = () => {
		if(text.length <= 0) props.remove();
		setEdit(!isEdit);
	}
	return (
		<div>
			<h3>{props.index}</h3>
			<h4>{text}</h4>
			{isEdit ? <Edit toggleEdit={toggleEdit} text={text} setText={setText}/> : null}
			{isEdit ? null : (
				<>
				<button onClick={() => props.remove()}>Remove</button>
				<button onClick={toggleEdit}>Edit</button>
				</>
			)}
			</div>
	)
}
