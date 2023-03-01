import express from "express";
const app = express();

type Request = express.Request;
type Response = express.Response;

app.get('/', (req: Request, res: Response) => {
    res.json('hello world');
})

export = app;