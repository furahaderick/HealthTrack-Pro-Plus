import express from "express"

const app = express();

app.get("/", (req, res) => {
   res.send("Welcome to Health Track Pro Plus");
});

export default app;