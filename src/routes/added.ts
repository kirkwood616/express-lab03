import express from "express";
import Assignment from "../models/Assignment";
import { createAssignment } from "../models/assignments-database";

const routes = express.Router();

routes.get("/added", (req, res) => {
	res.render("added");
});

routes.post("/added/add-confirmation", (req, res) => {
	const assignment: Assignment = {
		name: req.body.name as string,
		score: Number(req.body.score),
		possible: Number(req.body.possible),
		completed: Boolean(req.body.completed),
	};

	createAssignment(assignment);
	res.render("added", { assignment });
});

export default routes;
