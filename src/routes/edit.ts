import express from "express";
import Assignment from "../models/Assignment";
import {
	assignmentById,
	updateAssignment,
} from "../models/assignments-database";

const routes = express.Router();

routes.get("/edit/:id", (req, res) => {
	const id = Number(req.params.id);
	const assignment = assignmentById(id);
	if (assignment) {
		res.render("edit-form", { assignment });
	} else {
		res.status(404).render("404");
	}
});

routes.post("/edit-submit/:id", (req, res) => {
	const assignment: Assignment = {
		id: Number(req.params.id),
		name: req.body.name,
		score: Number(req.body.score),
		possible: Number(req.body.possible),
		completed: Boolean(req.body.completed),
	};
	if (updateAssignment(assignment)) {
		res.render("edit-confirm", { assignment });
	} else {
		res.status(404).render("404");
	}
});

export default routes;
