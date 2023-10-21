import express from "express";
import expressAsyncHandler from "express-async-handler";

import {
	getPatients,
	createPatient,
	getPatient,
	deletePatient
} from "../controllers/patients.controller.js";

const patientsRouter = express.Router();

//  getOne, updatePatient, deletePatient
patientsRouter
	.route("/")
	.get(expressAsyncHandler(getPatients))
	.post(expressAsyncHandler(createPatient));

	patientsRouter.route("/:id").get(getPatient).delete(expressAsyncHandler(deletePatient))

export default patientsRouter;
