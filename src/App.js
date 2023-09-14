import { useState } from "react";
import "./App.css";
import Input from "./components/Input";
import ToDoList from "./components/ToDoList";

// let nextId = 0;
// const initialState = [{ id: 0, title: "Satisfied", done: true }];
export default function App() {
	const [list, setItem] = useState([]);

	function AddItem(title) {
		setItem([...list, { id: list.length++, title: title, done: false }]);
	}

	function onDelete(id) {
		setItem(list.filter((item) => item.id !== id));
	}

	return (
		<>
			<div className="main">
				<Input AddItem={AddItem}></Input>
				<ToDoList list={list} onDelete={onDelete}></ToDoList>
			</div>
		</>
	);
}
