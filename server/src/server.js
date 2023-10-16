import { createServer } from "http";

import app from "./app.js";

// import { config } from "dotenv";
// config();

const server = createServer(app);
const PORT = 8000;

server.listen(PORT, () => {
	console.log(`Server listening on port ${PORT}`);
});
