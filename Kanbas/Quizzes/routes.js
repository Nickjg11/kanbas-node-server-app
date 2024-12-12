import * as quizzesDao from "./dao.js";
import * as questionsDao from "../Quizzes/Questions/dao.js";
import fs from 'fs';
import path from 'path';

// Define the log file path (relative to the script location)
const logFilePath = path.join("./", 'app.log');

// Logging function
function log(input) {
  // Format log entry with timestamp
  const logEntry = `[${new Date().toISOString()}] ${input}\n`;

  // Append the log entry to the log file
  fs.appendFile(logFilePath, logEntry, (err) => {
    if (err) {
      console.error('Failed to write to log file:', err);
    }
  });
}
export default function QuizRoutes(app) {
  app.put("/api/quizzes/:quizId", async (req, res) => {
    const { quizId } = req.params;
    const quizUpdates = req.body;
    const status = await quizzesDao.updateQuiz(quizId, quizUpdates);
    res.send(status);
  });
    
 app.delete("/api/quizzes/:quizId", async (req, res) => {
   const { quizId } = req.params;
   const status = await quizzesDao.deleteQuiz(quizId);
   res.send(status);
 });

 app.post("/api/quizzes/:quizId/questions/mc", async (req, res) => {
    const { quizId } = req.params;
    const question = {
      ...req.body,
      type: "MULTIPLE CHOICE",
    };
    const newQuestion = await questionsDao.createMCQuestion(question);
    res.send(newQuestion);
  });
  app.post("/api/quizzes/:quizId/questions/tf", async (req, res) => {
    const { quizId } = req.params;
    const question = {
      ...req.body,
      type: "TRUE FALSE",
    };
    const newQuestion = await questionsDao.createTFQuestion(question);
    res.send(newQuestion);
  });
  app.post("/api/quizzes/:quizId/questions/fi", async (req, res) => {
    const { quizId } = req.params;
    const question = {
      ...req.body,
      type: "FILL IN BLANK",
    };
    const newQuestion = await questionsDao.createFIQuestion(question);
    res.send(newQuestion);
  });

  app.get("/api/quizzes/:quizId/questions", async (req, res) => {
    const { quizId } = req.params;
    const questions = await questionsDao.findQuestionsForQuiz(quizId);
    res.json(questions);
  });
}
