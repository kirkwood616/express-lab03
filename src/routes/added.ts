import express from "express";

const routes = express.Router();

routes.get("/added", (req, res) => {
	res.render("added");
});

routes.get("/added/add-submit", (req, res) => {
	res.render("added-confirmation");
});

export default routes;
