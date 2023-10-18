import { getMultiple } from "../services/patients.service.js";

// @desc Get patients
// @route GET /patients
// @access Public
function getPatients(req, res, next) {
	try {
		res.json(patients.getMultiple(req.query.page));
	} catch (err) {
		console.error("Error retrieving patients", err.message);
		next(err);
	}
}

export { getPatients };
