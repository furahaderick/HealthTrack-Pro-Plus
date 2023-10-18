import express from "express";
import expressAsyncHandler from "express-async-handler";

import {
	getPatients,
	createPatient,
} from "../controllers/patients.controller.js";

const patientsRouter = express.Router();

// getAll, getOne, createPatient, updatePatient, deletePatient
patientsRouter
	.route("/")
	.get(expressAsyncHandler(getPatients))
	.post(expressAsyncHandler(createPatient));

export default patientsRouter;
