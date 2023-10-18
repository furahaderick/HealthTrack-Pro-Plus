import express from "express";

import patientsRouter from "./routers/patients.router.js";

const app = express();

app.use(express.json());
app.get("/", (req, res) => {
   res.json({message: "Connection alive"});
});

app.use("/patients", patientsRouter);

export default app;

// localhost:8000/patients/?patient_nid=1200580003689050&patient_name=Derrick&frequent_sickness=malaria&heart_rate=65&body_temperature=32
// to insert : name, temperature, frequent-sickeness, heart-rate, NID.