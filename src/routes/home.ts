import express from "express";
import { allAssignments } from "../models/assignments-database";

const routes = express.Router();

routes.get("/", (req, res) => {
	const assignments = allAssignments();
	res.render("home", { assignments });
});

export default routes;
