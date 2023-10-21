import Patient from "../models/patients.model.js";

// @desc Read patients
// @route GET /patients
// @access Public
async function getPatients(req, res) {
	const patients = await Patient.findAll();
	res.json(patients);
}

// @desc Create patients
// @route POST /patients
// @access Public
async function createPatient(req, res) {
	const { name, temperature, heart_rate, NID } = req.body;
	if (!name || !temperature || !heart_rate || !NID) {
		res.status(400);
		throw new Error("Missing mandatory fields");
	}

	const newPatient = await Patient.create(req.body);
	res.json(newPatient);
}

// @desc Read patient
// @route POST /patients/:id
// @access Public
async function getPatient(req, res) {
	const id = req.params.id;
	const patient = await Patient.findByPk(id);
	if (!patient) {
		res.status(404).json({ message: "Error. Patient not found" });
	}
	res.json(patient);
}

// @desc Update patient
// @route PUT /patients/:id
// @access Public
async function updatePatient(req, res) {
	const { name, temperature, heart_rate, NID } = req.body;
	if (!name || !temperature || !heart_rate || !NID) {
		res.status(400);
		throw new Error("Missing mandatory fields");
	}
	const id = req.params.id;
	const patient = await Patient.findByPk(id);
	if (!patient) {
		res.status(404).json({ message: "Error. Patient not found" });
	}

	const newPatient = await Patient.update(req.body, {
		where: {
			id: id,
		},
	});

	res.json({ updatedRows: newPatient });
}

// @desc Delete patient
// @route DELETE /patients/:id
// @access Public
async function deletePatient(req, res) {
	const id = req.params.id;
	const patient = await Patient.findByPk(id);
	if (!patient) {
		res.status(404).json({ message: "Error. Patient not found" });
	}
	const deletedPatient = await Patient.destroy({
		where: {
			id: id,
		},
	});

	res.json({ updatedRows: deletedPatient });
}

// localhost:8000/patients/?patient_nid=1200580003689050&patient_name=Derrick&frequent_sickness=malaria&heart_rate=65&body_temperature=32

export { getPatients, createPatient, getPatient, updatePatient, deletePatient };
