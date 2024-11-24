import Database from "../Database/index.js";

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
    const { modules } = Database;
    const module = modules.find((module) => module._id === moduleId);
    Object.assign(module, moduleUpdates);
    return module;
  }  
export function deleteModule(moduleId) {
    const { modules } = Database;
    Database.modules = modules.filter((module) => module._id !== moduleId);
   }   
export function createModule(module) {
    const time = Date.now().toString();
    const newModule = { ...module, _id: time };
    Database.modules = [...Database.modules, newModule];
    return newModule;
  }  
export function findModulesForCourse(courseId) {
  const { modules } = Database;
  return modules.filter((module) => module.course === courseId);
}
