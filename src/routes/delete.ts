import express from "express";
import {
	assignmentById,
	deleteAssignment,
} from "../models/assignments-database";

const routes = express.Router();

routes.get("/delete/:id", (req, res) => {
	const id = parseInt(req.params.id);
	const assignment = assignmentById(id);

	if (assignment) {
		deleteAssignment(id);
		res.render("delete-confirm", { name: assignment.name });
	} else {
		res.status(404).render("404");
	}
});

export default routes;
