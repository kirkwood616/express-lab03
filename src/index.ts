import express from "express";
import path from "path";
import homeRoutes from "./routes/home";
import addRoutes from "./routes/add";
import addedRoutes from "./routes/added";
import deleteRoutes from "./routes/delete";
import apiRoutes from "./routes/api";
import editRoutes from "./routes/edit";

const app = express();

// Setting up API
app.use(express.json());

// Settings for web server
app.use(express.urlencoded({ extended: false }));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");
app.use(express.static(path.join(__dirname, "public")));

// TODO Add routes here.
app.use("/", homeRoutes);
app.use("/", addRoutes);
app.use("/", addedRoutes);
app.use("/", deleteRoutes);
app.use("/", apiRoutes);
app.use("/", editRoutes);

// 404 Not Found for non-routes
app.use((req, res) => {
	res.status(404).render("404");
});

const port = 3000;
app.listen(port, () => console.log(`Listening on port: ${port}.`));

// Keep this line. It is added for our testing purposes.
export default app;
