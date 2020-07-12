import React from 'react';

export default function Nav(){
	return (
		<nav className="nav">
			<li className="nav_col">
				<h1 className="nav_item">React Todo</h1>
			</li>
			<li className="nav_col">
				<a className="nav_item" href="https://github.com/simba-fs/todo" target="_blank">Github</a>
			</li>
		</nav>
	);
}
