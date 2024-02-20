import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Todo from "./Todo";

const AddTodoForm = ({ addNewTodo }) => {
	const [value, setValue] = useState("");

	const handleTodo = (e) => {
        e.preventDefault();
        console.log(value);
        addNewTodo(value)
    }
    
    
    
	return (
		<form className="mt-4" onSubmit={handleTodo}>
			<div className="card card-body">
				<div className="form-group">
					<label>Ajouter une Tache</label>
					<input
						type="text"
						className="form-control"
						id="task"
						placeholder="Ajouter une tache"
                        onChange={(e) => setValue(e.target.value)}
					/>
					<button type="submit" className="btn btn-primary mt-4">
						Ajouter
					</button>
				</div>
			</div>
		</form>
	);
};

export default AddTodoForm;
