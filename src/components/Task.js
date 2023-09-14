import { useState } from "react";
import "./Task.css";

export default function Task({ todo, onDelete }) {
	const [isEditing, setIsEditing] = useState(false);
	const [title, setTitle] = useState(todo.title);
	const [isChecked, setIsChecked] = useState();

	return (
		<>
			<div className="task-container">
				<label>
					<input type="checkbox" checked={isChecked} required />
				</label>
				{!isEditing ? (
					<>
						<div className="task">{title}</div>
						<button
							onClick={() => {
								setIsEditing(!isEditing);
								console.log("edited");
							}}
						>
							EDIT
						</button>
					</>
				) : (
					<>
						<input
							type="text"
							value={title}
							onChange={(e) => setTitle(e.target.value)}
						/>
						<button
							onClick={() => {
								setTitle(title);
								setIsEditing(!isEditing);
							}}
						>
							SAVE
						</button>
					</>
				)}
				<button onClick={() => onDelete(todo.id)}>DELETE</button>
			</div>
		</>
	);
}
