import database from "./database.js";
import config from "../config.js";

function getMultiple(page = 1) {
	const offset = (page - 1) * config.listPerPage;
	const data = database.query(`SELECT * FROM patients LIMIT ?, ?`, [
		offset,
		config.listPerPage,
	]);
	const meta = { page };

	return {
		data,
		meta,
	};
}

export { getMultiple };
