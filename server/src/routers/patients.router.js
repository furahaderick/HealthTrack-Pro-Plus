import express from "express";

import { getPatients } from "../controllers/patients.controller.js";

const patientsRouter = express.Router();

// getAll, getOne, createPatient, updatePatient, deletePatient
patientsRouter.route("/").get(getPatients);

export default patientsRouter;
