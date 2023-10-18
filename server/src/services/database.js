import sqlite from "better-sqlite3";

import { resolve } from "path";

const database = new sqlite(resolve("patients.db"), { fileMustExist: true });

function query(sql, params) {
	return database.prepare(sql).all(params);
}

export default query;
