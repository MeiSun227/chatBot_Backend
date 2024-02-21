"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
const answerJson = [
    { answer: "Meow, you asked too much questions." },
    { answer: "Meow. I don't answer question unless there are treats.." },
    { answer: "I'm sorry, I didn't understand that." },
    { answer: "Meow meow" },
    { answer: "Meow meow meow" },
    { answer: "Meow service is out of office, come back on Monday" },
    { answer: "That's an interesting question." },
    { answer: "I'm not sure how to answer that, meow." }
];
app.use(express_1.default.json());
app.use((0, cors_1.default)());
const PORT = process.env.PORT || 3002;
app.post('/ask', (_req, res) => {
    const randomIndex = Math.floor(Math.random() * answerJson.length);
    const randomAnswer = answerJson[randomIndex].answer;
    res.json({ answer: randomAnswer });
});
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
