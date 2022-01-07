import express from "express";
import {
	allAssignments,
	findAverage,
	data,
} from "../models/assignments-database";

const routes = express.Router();

routes.get("/", (req, res) => {
	const assignments = allAssignments();
	const average = findAverage(data);
	res.render("home", { assignments, average });
});

export default routes;
