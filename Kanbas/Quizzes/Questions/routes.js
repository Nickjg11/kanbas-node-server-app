import * as questionsDao from "./dao.js";
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
export default function QuestionRoutes(app) {
  app.put("/api/questions/:questionId", async (req, res) => {
    const { questionId } = req.params;
    const questionUpdates = req.body;
    log(questionUpdates.quiz)
    const status = await questionsDao.updateQuestion(questionId, questionUpdates);
    res.send(status);
  });
    
 app.delete("/api/questions/:questionId", async (req, res) => {
   const { questionId } = req.params;
   const status = await questionsDao.deleteQuestion(questionId);
   res.send(status);
 });
}
