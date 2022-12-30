const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv").config();
const goalsRouter = require("./routes/goalRoutes");
const { errorHandler } = require("./middleware/errorMiddleware");
const connectDb = require("./config/db");
const port = process.env.PORT || 5000;

const app = express();
connectDb();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/goals", goalsRouter);
app.use(errorHandler);

app.listen(port, () => console.log(`Server started on port ${port}`));
