import express from 'express';
import cors from 'cors';
const app = express();



const answerJson = [
    { answer: "Meow, you asked too much questions." },
    { answer: "Meow. I don't answer question unless there are treats.." },
    { answer: "I'm sorry, I didn't understand that." },
    {answer:"Meow meow"},
    {answer:"Meow meow meow"},
    {answer:"Meow service is out of office, come back on Monday"},
    { answer: "That's an interesting question." },
    { answer: "I'm not sure how to answer that, meow." }
];
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 3002;

app.post('/ask', (_req, res) => {
    const randomIndex= Math.floor(Math.random()*answerJson.length);
    const randomAnswer = answerJson[randomIndex].answer;
    res.json({answer:randomAnswer});
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});