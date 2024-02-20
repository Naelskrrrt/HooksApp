import React, { useState } from "react";
import { ListGroup } from "react-bootstrap";
import { v4 as uuid } from "uuid";
import AddTodoForm from "./AddTodoForm";

export default function Todo() {
	const [todo, setTodo] = useState([
		{ id: 1, title: "Learn React" },
		{ id: 2, title: "Learn TypeScript" },
		{ id: 3, title: "Learn GraphQL" }
	]);

	const addNewTodo = (newTodo) => {
		setTodo([
			...todo,
			{
				id: uuid(),
				title: newTodo
			}
		]);
	};

	return (
		<>
			<h1 className="text-center">Todo: {todo.length}</h1>
			<ListGroup>
				{todo.map((item) => {
					return (
						<ListGroup.Item
							className="list-group-item"
							key={item.id}
						>
							{item.title}
						</ListGroup.Item>
					);
				})}
			</ListGroup>

			<AddTodoForm addNewTodo={addNewTodo} />
		</>
	);
}
