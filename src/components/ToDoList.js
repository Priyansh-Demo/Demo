import Task from "./Task";
import "./ToDoList.css";

export default function ToDoList({ list, onDelete }) {
	return (
		<>
			<div className="list-container">
				{list.map((todo) => (
					<li key ={todo.id}>
						<Task todo={todo} onDelete={onDelete}></Task>
					</li>
				))}
			</div>
		</>
	);
}
