import "reflect-metadata";
import "express-async-errors";
import express from "express";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    return res.json("hello world");
});

export default app;
