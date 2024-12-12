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
export function findQuizzesForCourse(courseId) {
  return model.find({ course: courseId });
}
export function createQuiz(quiz) {
    delete quiz._id;
    return model.create(quiz);
  }
export function deleteQuiz(quizId) {
    return model.deleteOne({ _id: quizId });
  }   
export function updateQuiz(quizId, quizUpdates) {
    return model.updateOne({ _id: quizId }, quizUpdates);
  }