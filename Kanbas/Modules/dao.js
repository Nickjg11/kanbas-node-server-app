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
export function updateModule(moduleId, moduleUpdates) {
  return model.updateOne({ _id: moduleId }, moduleUpdates);
  }  
export function deleteModule(moduleId) {
    return model.deleteOne({ _id: moduleId });
  }   
export function createModule(module) {
    delete module._id
    return model.create(module);
  }  
export function findModulesForCourse(courseId) {
  return model.find({ course: courseId });
}
