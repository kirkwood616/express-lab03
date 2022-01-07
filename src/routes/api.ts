import express from "express";
import {
	allAssignments,
	findAverageSummary,
} from "../models/assignments-database";

const routes = express.Router();

routes.get("/api/assignments", (req, res) => {
	const assignments = allAssignments();
	res.status(200).json(assignments);
});

routes.get("/api/summary", (req, res) => {
	const assignments = allAssignments();
	let summary = {
		overallAverage: findAverageSummary(assignments),
		assignments: allAssignments(),
	};
	res.status(200).json(summary);
});

export default routes;
