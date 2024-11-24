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
export function updateAssignment(assignmentId, assignmentUpdates) {
    const { assignments } = Database;
    const assignment = assignments.find((assignment) => assignment._id === assignmentId);
    Object.assign(assignment, assignmentUpdates);
    return assignment;
  }
export function deleteAssignment(assignmentId) {
    const { assignments } = Database;
    Database.assignments = assignments.filter((assignment) => assignment._id !== assignmentId);
   }   
export function createAssignment(assignment) {
    Database.assignments = [...Database.assignments, assignment];
    return assignment;
  }  
export function findAssignmentsForCourse(courseId) {
    const { assignments } = Database;
    return assignments.filter((assignment) => assignment.course === courseId);
  }
  