import React from 'react';

export default function Task(props){
	const [isEdit, setEdit] = React.useState(false);
	const [text, setText] = React.useState(props.text);
	React.useEffect(() => {
		setText(props.text);
	}, [props.text]);

	function toggleEdit(){
		if(text.length <= 0) props.remove();
		setEdit(!isEdit);
	}

	function onChange(e){
		if(isEdit) setText(e.target.value);
	}

	return (
		<div className="list_item f-row">
			<div className="input-grp">
				<span className="input-append">{props.index}</span>
				{/*
				<span className="input-append"><input data-index={props.index} type="checkbox" onClick={props.check}/></span>
				*/}
				<input className="input" type="text" value={text} onChange={onChange}/>
				{isEdit 
					? (
						<span className="input-btn" onClick={toggleEdit}>
							<button className="btn">Done</button>
						</span>
					)
					: (
						<div className="btn-grp :united :sequare">
							<button className="btn" onClick={() => props.remove()}>Remove</button>
							<button className="btn" onClick={toggleEdit}>Edit</button>
						</div>
					)
				}
			</div>
		</div>
	)
}
