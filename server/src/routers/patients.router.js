import express from "express";
import expressAsyncHandler from "express-async-handler";

import {
	getPatients,
	createPatient,
	getPatient,
	deletePatient,
	updatePatient,
} from "../controllers/patients.controller.js";

const patientsRouter = express.Router();


patientsRouter
	.route("/")
	.get(expressAsyncHandler(getPatients))
	.post(expressAsyncHandler(createPatient));

patientsRouter
	.route("/:id")
	.get(expressAsyncHandler(getPatient))
	.put(expressAsyncHandler(updatePatient))
	.delete(expressAsyncHandler(deletePatient));

export default patientsRouter;
