import model from "./model.js";
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
export function findQuestionsForQuiz(quizId) {
  return model.find({ quiz: quizId });
}
export function createMCQuestion(question) {
    delete question._id;
    return model.create(question);
  }
export function createTFQuestion(question) {
    delete question._id;
    return model.create(question);
  }
export function createFIQuestion(question) {
    delete question._id;
    return model.create(question);
  }
export function deleteQuestion(questionId) {
    return model.deleteOne({ _id: questionId });
  }   
export function updateQuestion(questionId, questionUpdates) {
    return model.updateOne({ _id: questionId }, questionUpdates);
  }