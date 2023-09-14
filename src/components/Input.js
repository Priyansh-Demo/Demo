import { useState } from "react";
import "./Input.css";

export default function AddToDo({ AddItem }) {
	const [title, setTitle] = useState("");

	return (
		<>
			<form className="input-container">
				<input
					type="text"
					value={title}
					onChange={(e) => setTitle(e.target.value)}
				/>
				<button
					onClick={(e) => {
						e.preventDefault();
						setTitle("");
						AddItem(title);
					}}
				>
					ADD
				</button>
			</form>
		</>
	);
}
