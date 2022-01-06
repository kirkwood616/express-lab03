import express from "express";

const routes = express.Router();

routes.get("/add", (req, res) => {
	res.render("add");
});

export default routes;
