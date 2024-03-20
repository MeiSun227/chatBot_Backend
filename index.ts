/* eslint-disable @typescript-eslint/no-unsafe-call */
import express from "express";
import cors from "cors";

const app = express();

const answerJson = [
	{ answer: "Meow, you asked too much questions." },
	{ answer: "Meow. I don't answer question unless there are treats.." },
	{ answer: "I'm sorry, I didn't understand that." },
	{ answer: "Meow meow" },
	{ answer: "Meow meow meow" },
	{ answer: "Meow service is out of office, come back on Monday" },
	{ answer: "That's an interesting question." },
	{ answer: "I'm not sure how to answer that, meow." },
];
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 3002;

app.get("/ping", (_req, res) => {
	console.log("someone pinged here");
	res.send("pong");
});

app.post("/ask", (_req, res) => {
	const randomIndex = Math.floor(Math.random() * answerJson.length);
	const randomAnswer = answerJson[randomIndex].answer;
	res.json({ answer: randomAnswer });
});

app.get("/success", (req, res) => {
	try {
		const requestedbody: unknown = req.body;

		console.log("Request succeeded:", {
			url: req.originalUrl,
			query: req.query,
			headers: req.headers,
			body: requestedbody,
		});

		res.status(200).send("GET request received successfully");
	} catch (error) {
		console.error("Error:", error);
		res.status(500).send("Internal Server Error");
	}
});

app.get("/fail", (req, res) => {
	const requestBody: unknown = req.body;
	console.error("Request failed:", {
		url: req.originalUrl,
		query: req.query,
		headers: req.headers,
		body: requestBody,
	});

	res.status(500).send("Error occurred");
});

app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});
