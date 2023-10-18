import express from "express";

import patientsRouter from "./routers/patients.router.js";

const app = express();

app.use(express.json());
app.get("/", (req, res) => {
   res.json({message: "Connection alive"});
});

app.use("/patients", patientsRouter);

export default app;

