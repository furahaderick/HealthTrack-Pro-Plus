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
	const {name, temperature, frequent_sickness, heart_rate, NID} = req.body;
   if(!name || !temperature || !heart_rate || !NID) {
      res.status(400);
      throw new Error("Missing mandatory fields");
   }

   const newPatient = await Patient.create(req.body);
   res.json(newPatient);
}

// localhost:8000/patients/?patient_nid=1200580003689050&patient_name=Derrick&frequent_sickness=malaria&heart_rate=65&body_temperature=32
// to insert : name, temperature, frequent-sickeness, heart-rate, NID.

export { getPatients, createPatient };
