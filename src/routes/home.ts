import express from "express";
import {
	allAssignments,
	findAverage,
	data,
} from "../models/assignments-database";

const routes = express.Router();

routes.get("/", (req, res) => {
	const assignments = allAssignments();
	const average = Math.round(findAverage(data) * 100 * 10) / 10;
	res.render("home", { assignments, average });
});

export default routes;
